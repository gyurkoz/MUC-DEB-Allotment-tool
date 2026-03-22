#!/bin/bash
# Validates that all TypeScript code samples in skill files are syntactically correct
# This script extracts TypeScript code blocks and checks them with tsc

set -e

SKILLS_DIR=".github/skills"
TEMP_DIR=".github/temp-validation"
ERRORS=0

echo "🔍 Validating TypeScript code samples in skill files..."

# Clean up any previous temp directory
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

# Create a minimal tsconfig for validation
cat > "$TEMP_DIR/tsconfig.json" << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": ["../src/*"],
      "@/models/*": ["../src/models/*"],
      "@/api/*": ["../src/api/*"],
      "@/hooks/*": ["../src/hooks/*"],
      "@/components/*": ["../src/components/*"]
    }
  },
  "include": ["*.ts", "*.tsx"]
}
EOF

# Function to extract TypeScript code blocks from markdown
extract_ts_blocks() {
  local file=$1
  local skill_name=$(basename $(dirname "$file"))
  local counter=0
  
  echo "  Checking $skill_name..."
  
  # Use awk to extract code blocks
  awk '
    /^```(typescript|ts|tsx)$/ { in_block=1; block=""; next }
    in_block && /^```$/ {
      in_block=0
      counter++
      filename = sprintf("%s/%s-%03d.tsx", TEMP_DIR, SKILL_NAME, counter)
      print block > filename
      close(filename)
      next
    }
    in_block { block = block $0 "\n" }
  ' TEMP_DIR="$TEMP_DIR" SKILL_NAME="$skill_name" "$file"
}

# Extract code blocks from all skill files
for skill_file in "$SKILLS_DIR"/*/SKILL.md; do
  if [ -f "$skill_file" ]; then
    extract_ts_blocks "$skill_file"
  fi
done

# Count extracted files
TOTAL_FILES=$(find "$TEMP_DIR" -name "*.tsx" -type f | wc -l)
echo "📦 Extracted $TOTAL_FILES TypeScript code blocks"

if [ "$TOTAL_FILES" -eq 0 ]; then
  echo "⚠️  No TypeScript code blocks found!"
  rm -rf "$TEMP_DIR"
  exit 0
fi

# Run TypeScript compiler on extracted files
echo "🔨 Running TypeScript compiler..."
if ! npx tsc --project "$TEMP_DIR/tsconfig.json" 2>&1; then
  echo "❌ TypeScript validation failed!"
  ERRORS=1
else
  echo "✅ All TypeScript code samples are valid!"
fi

# Clean up
rm -rf "$TEMP_DIR"

exit $ERRORS
