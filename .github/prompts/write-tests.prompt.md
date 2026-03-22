---
agent: 'agent'
description: 'Generate comprehensive test suite for existing code with unit and integration tests'
tools: ['edit', 'search', 'read']
model: 'Claude Sonnet 4.5'
---

# Write Tests

## Inputs

- `${input:filePath:Path to file to test (e.g., src/components/MyComponent.tsx)}`
- `${input:testType:Test type (unit|integration|e2e):unit}`

## Process

1. **Read and analyze** the target file
2. **Identify testable functions** and components
3. **Generate test file** with appropriate coverage
4. **Include edge cases** and error scenarios
5. **Add mocks** for external dependencies

## Test Structure

### For Components

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ComponentName from './ComponentName';

interface ComponentNameProps {
  prop?: string;
  data?: string[];
  onClick?: () => void;
}

describe('ComponentName', () => {
  describe('Rendering', () => {
    it('should render with default props', (): void => {
      render(<ComponentName />);
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render with custom props', (): void => {
      render(<ComponentName prop="value" />);
      expect(screen.getByText('value')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should handle click events', async (): Promise<void> => {
      const onClick = vi.fn();
      render(<ComponentName onClick={onClick} />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty data', (): void => {
      render(<ComponentName data={[]} />);
      expect(screen.getByText('No data')).toBeInTheDocument();
    });

    it('should handle errors gracefully', (): void => {
      // Error scenario test
      expect(() => render(<ComponentName prop={undefined} />)).not.toThrow();
    });
  });
});
```

### For Hooks

```typescript
import { describe, it, expect } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useMyHook } from './useMyHook';

describe('useMyHook', () => {
  it('should initialize with default values', (): void => {
    const initialValue = 'initial';
    const { result } = renderHook(() => useMyHook());
    expect(result.current.value).toBe(initialValue);
  });

  it('should update state correctly', (): void => {
    const { result } = renderHook(() => useMyHook());
    
    act(() => {
      result.current.setValue('new value');
    });
    
    expect(result.current.value).toBe('new value');
  });
});
```

### For Utilities

```typescript
import { describe, it, expect } from 'vitest';
import { utilityFunction } from './utility';

describe('utilityFunction', () => {
  it('should return expected result for valid input', (): void => {
    expect(utilityFunction('input')).toBe('expected');
  });

  it('should handle edge cases', (): void => {
    const defaultValue = 'default';
    expect(utilityFunction(null)).toBe(defaultValue);
    expect(utilityFunction('')).toBe(defaultValue);
  });

  it('should throw error for invalid input', (): void => {
    const invalidInput = undefined;
    expect(() => utilityFunction(invalidInput as never)).toThrow('Invalid input');
  });
});
```

## Coverage Goals

- Aim for 80%+ code coverage
- Focus on critical paths
- Test happy paths and error scenarios
- Include edge cases
- Mock external dependencies

## Output

- Test file with comprehensive coverage
- Mocks for external dependencies
- Coverage report summary
- Instructions to run tests
