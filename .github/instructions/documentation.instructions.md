---
description: 'Documentation guidelines and markdown standards for the GST project'
applyTo: '**/*.md'
---

# Documentation Guidelines for Markdown Files

## Documentation Structure

All project documentation is organized in the `docs/` folder with the following structure:

```
docs/
├── getting-started/      # Getting started guides
├── development/          # Development documentation
├── features/             # Feature-specific docs
├── testing/              # Testing guides and references
├── architecture/         # Architecture documentation
├── deployment/           # Deployment guides
├── contributing/         # Contributing guidelines
├── reference/            # Reference materials, FAQs, troubleshooting
├── validation/           # Validation reports and checks
└── github-config/        # GitHub configuration documentation (guides only)
```

**Note:** Actual agent definitions (`.github/agents/`) and prompt templates (`.github/prompts/`) remain in the `.github` directory, not in `docs/`.

## Documentation Requirements

**ALWAYS place documentation files in the `docs/` folder:**

### 1. Development Summaries → `docs/reference/`

- Installation summaries, integration reports, checklists
- Example: `INSTALLATION_SUMMARY.md`, `MSW_INTEGRATION_SUMMARY.md`

### 2. Feature Documentation → `docs/features/`

- PWA setup, theme switching, component libraries
- Example: `PWA.md`, `THEME_SWITCHING.md`

### 3. Testing Documentation → `docs/testing/`

- Testing guides, MSW setup, test patterns
- Example: `MSW_SETUP.md`, `MSW_QUICK_REFERENCE.md`

### 4. Architecture & Technical → `docs/architecture/`

- Technology stack, design patterns, code organization
- Example: `TechnologyStack.md`, `DesignPatterns.md`

### 5. Reference Materials → `docs/reference/`

- FAQs, troubleshooting, glossaries, tools documentation
- Example: `FAQ.md`, `Troubleshooting.md`, `github-projects-mcp-tools.md`

### 6. GitHub Configuration Documentation → `docs/github-config/`

- Documentation about GitHub agents, prompts, and configuration
- Example: `README.md` (overview of agents and prompts)
- **Note:** Actual agent/prompt files stay in `.github/agents/` and `.github/prompts/`

## Documentation Auto-Sync

- Documentation in `docs/` is automatically synced to GitHub Wiki
- Changes to `docs/` folder trigger the wiki sync workflow
- Both `main` and `develop` branches maintain separate wiki sections

## File Placement Rules

**Never create documentation files in:**

- ❌ Project root (except `README.md`)
- ❌ `.github/` directory (except workflows, instructions, agents, prompts, and skills)
- ❌ `src/` directory (except inline code comments)

## Creating New Documentation

**When creating new documentation:**

1. **Choose appropriate subdirectory** - Select the correct `docs/` subdirectory based on content type
2. **Use descriptive filenames** - PascalCase format (e.g., `QuickStart.md`, `APIIntegration.md`)
3. **Follow markdown structure** - Use proper heading hierarchy (# → ## → ###)
4. **Add cross-references** - Link to related documentation files
5. **Update navigation** - Add entry to `docs/Home.md` if it's a major document

## Markdown Best Practices

### Headings

- Use `#` for main title (once per document)
- Use `##` for major sections
- Use `###` for subsections
- Never skip heading levels

### Code Blocks

- Always specify language: ````typescript`,````bash`, ````json`
- Use syntax highlighting for better readability

### Links

- Use descriptive link text: `[API Documentation](docs/reference/API.md)`
- Avoid generic text like "click here"
- Use relative paths for internal links

### Lists

- Use `-` for unordered lists
- Use `1.` for ordered lists
- Maintain consistent indentation

### Formatting

- Use **bold** for emphasis and important terms
- Use `code` for inline code, commands, file names, and technical terms
- Use > blockquotes for important notes or warnings

## Example Structure

```markdown
# Document Title

Brief introduction explaining the purpose of this document.

## Overview

High-level explanation of the topic.

## Installation

### Prerequisites

List of requirements.

### Steps

1. Step one
2. Step two
3. Step three

## Usage

### Basic Example

```typescript
// Code example with proper language tag
const example = "Hello World";
```

### Advanced Example

More complex usage scenarios.

## Troubleshooting

Common issues and solutions.

## Related Documentation

- [Link to related doc 1](path/to/doc1.md)
- [Link to related doc 2](path/to/doc2.md)

```

## Spell Check and Quality

- Run spell check before committing
- Verify all links work correctly
- Test code examples when possible
- Ensure proper grammar and punctuation
