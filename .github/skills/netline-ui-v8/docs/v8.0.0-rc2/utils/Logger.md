# Logger

Logging utilities (Logger and ServerLogger)

## Overview

- **Category**: utils
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { Logger } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
import { Logger } from  '@lsy-netline/netline-ui-utils'

const logger = new Logger();

export default logger;
```

## Examples

### Example 1

```tsx
import { Logger } from  '@lsy-netline/netline-ui-utils'

const logger = new Logger();

export default logger;
```

### Example 2

```tsx
import { Logger } from  '@lsy-netline/netline-ui-utils'

const logger = new Logger({ allowConsole: process.env.NODE_ENV === 'development'});

export default logger;
```

### Configuring server logger with backend transport adapter

```tsx
import { ServerLogger } from  '@lsy-netline/netline-ui-utils'

const logger = new ServerLogger({ 
  allowConsole: process.env.NODE_ENV === 'development',
  transport: async ({ entries }) => axios.post('/api/log', entries),
});

export default logger;
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
