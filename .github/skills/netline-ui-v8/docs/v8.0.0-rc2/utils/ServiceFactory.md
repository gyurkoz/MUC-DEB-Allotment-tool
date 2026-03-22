# Service Factory

ServiceFactory utilities for creating typed API services

## Overview

- **Category**: utils
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { ServiceFactory } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
<Fruit[]>({
    method: 'get',
    url: '/api/fruits.json',
  });

  // invoke service
  const { data } = await getFruits();
  console.log(data);
```

## Examples

### SimpleGetService

```tsx
<Fruit[]>({
    method: 'get',
    url: '/api/fruits.json',
  });

  // invoke service
  const { data } = await getFruits();
  console.log(data);
```

### ParameterMappings

```tsx
<Fruit[]>({
      url: '/api/fruits',
    }),
    getFruit: createService<Fruit, { fruitId: number }>({
      method: 'get',
      url: '/api/fruits/{fruitId}',
      paramTypes: {
        fruitId: 'url',
      },
    }),
    createFruit: createService<Fruit, Omit<Fruit, 'id'>>({
      method: 'post',
      url: '/api/fruits',
      paramTypes: {
        name: 'body',
        genus: 'body',
        family: 'body',
        order: 'body',
        status: 'body',
        color: 'body',
        weight: 'body',
        bestBefore: 'body',
        nutritions: 'body',
      },
    }),
    updateFruit: createService<Fruit, { id: Fruit['id']; fruit: Omit<Fruit, 'id'> }>({
      method: 'put',
      url: '/api/fruits/{id}',
      paramTypes: {
        id: 'url',
        fruit: 'data',
      },
    }),
  };

  // GET /api/fruits
  const { data: fruits } = await services.getFruits();
  console.log(fruits);

  // GET /api/fruits/1
  const { data: fruit } = await services.getFruit({ fruitId: 1 });

  // POST /api/fruits with fruit content in body
  await services.createFruit(fruit);

  // PUT /api/fruits/1 with fruit content in body
  await services.updateFruit({
    id: fruit.id,
    fruit,
  });
```

### FileUpload

```tsx
<Fruit[]>({
    method: 'post',
    url: '/api/upload',
    paramTypes: {
      formData: 'data',
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // append file to a `FormData` object
  const formData = new FormData();
  const imageFile = document.querySelector('#file') as HTMLInputElement;
  if (imageFile.files) {
    formData.append('image', imageFile.files[0]);
    // invoke service with `formData` mapped to `data`
    await uploadFile({ formData });
  }
```

### AbortRequest

```tsx
<Fruit[]>({
    method: 'get',
    url: '/api/fruits.json',
  });

  try {
    // invoke service with abort controller
    const abortController = new AbortController();
    getFruits({}, { signal: abortController.signal });

    // while request is pending abort signal can be called which will throw a request error
    abortController.abort();
  } catch (err: unknown) {
    // cancellation can be checked with `axios.isCancel` method
    console.log(axios.isCancel(err));
  }
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
