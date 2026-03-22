---
agent: 'agent'
description: 'Generate a new React component with TypeScript, Netline UI, and complete test coverage'
tools: ['edit', 'search']
model: 'Claude Sonnet 4.5'
---

# Create React Component

## Inputs

- `${input:componentName:Component name (e.g., UserProfile)}`
- `${input:componentPath:Path relative to src/ (e.g., components/user)}`
- `${input:componentType:Type (page|component):component}`

## Process

1. **Analyze requirements** from component name and type
2. **Generate component file** with TypeScript and Netline UI
3. **Create test file** with Vitest and Testing Library
4. **Add exports** to appropriate index files if needed

## Component Template

### For regular components

```typescript
import { FC } from 'react';
import { Box, Typography } from '@lsy-netline/netline-ui';

interface ${componentName}Props {
  // Define props here
}

const ${componentName}: FC<${componentName}Props> = (props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5">${componentName}</Typography>
      {/* Component implementation */}
    </Box>
  );
};

export default ${componentName};
```

### For page components

```typescript
import { FC } from 'react';
import { Box, Typography, Container } from '@lsy-netline/netline-ui';

const ${componentName}Page: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          ${componentName}
        </Typography>
        {/* Page content */}
      </Box>
    </Container>
  );
};

export default ${componentName}Page;
```

## Test Template

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  it('should render successfully', (): void => {
    render(<${componentName} />);
    expect(screen.getByText('${componentName}')).toBeInTheDocument();
  });

  it('should handle props correctly', (): void => {
    // Add specific prop tests
    // Example: render(<${componentName} prop="value" />);
    // expect(screen.getByText('value')).toBeInTheDocument();
  });
});
```

## Output

- Component file: `src/${componentPath}/${componentName}.tsx`
- Test file: `src/${componentPath}/${componentName}.test.tsx`
- Updated exports if applicable
- Brief usage example
