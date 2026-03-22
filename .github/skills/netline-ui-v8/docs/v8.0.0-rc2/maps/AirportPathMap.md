# Airport Path Map

Airport Path Map component

## Overview

- **Category**: maps
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { AirportPathMap } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const [activePath, setActivePath] = useState(paths[0].path);
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(500);
  const [pathWidth, setPathWidth] = useState(DEFAULT_PATH_WIDTH);

  const handlePathWidthChange = useCallback((event: SelectChangeEvent<number>) => {
    setPathWidth(+event.target.value);
  }, []);

  const handlePathClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const newPath = paths.find(({ name }) => event.currentTarget.dataset.name === name);
    if (!newPath) {
      return;
    }
    setActivePath(newPath.path);
  }, []);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <Container>
      {paths.map(({ name }) => (
        <Button key={name} data-name={name} variant="contained" onClick={handlePathClick}>
          {name}
        </Button>
      ))}
      <MenuButton {...darkModeMenuButtonProps} />
      <Select size="small" style={{ width: 200 }} value={pathWidth} label="Pathwidth" onChange={handlePathWidthChange}>
        {PATH_WIDTH_OPTIONS.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <AirportPathMap path={activePath} darkMode={darkMode} pathWidth={pathWidth} />
      <TextField
        id="height"
        label="Height"
        name="height"
        size="small"
        type="number"
        defaultValue={height}
        onBlur={(event: FocusEvent<HTMLInputElement>) => setHeight(Number(event.currentTarget.value))}
      />
      <TextField
        id="width"
        label="Width"
        name="width"
        size="small"
        type="number"
        defaultValue={width}
        onBlur={(event) => setWidth(Number(event.currentTarget.value))}
      />
      <AirportPathMap path={activePath} darkMode={darkMode} height={height} width={width} pathWidth={pathWidth} />
    </Container>
  );
};
AirportPathMapInit.storyName = 'Map with airport paths';
AirportPathMapInit.parameters = {
  ...storyParameters,
  viewport: { width: 800 },
};

const styles: Styles = {
  display: 'flex',
  flexDirection: 'column',
  '& .AirportPathMapAutoResize-actions': {
    flex: 0,
  },
  '& .AirportPathMapAutoResize-map': {
    flex: 1,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
};
const AutoResizeContainer = styled(Container, { name: 'AutoResizeContainer' })(styles);

export const AirportPathMapAutoResize = () => {
  const [activePath, setActivePath] = useState(paths[0].path);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();
  const handlePathClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const newPath = paths.find(({ name }) => event.currentTarget.dataset.name === name);
    if (!newPath) {
      return;
    }
    setActivePath(newPath.path);
  }, []);

  return (
    <AutoResizeContainer fullPage>
      <Container>
        {paths.map(({ name }) => (
          <Button key={name} data-name={name} variant="contained" onClick={handlePathClick}>
            {name}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <div className="AirportPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <AirportPathMap path={activePath} darkMode={darkMode} height={height} width={width} />
          )}
        </AutoResizer>
      </div>
    </AutoResizeContainer>
  );
};
AirportPathMapAutoResize.storyName = 'Map with airport paths (auto resize)';
AirportPathMapAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export default {
  title: 'Graphs & charts/Maps/AirportPathMap',
  component: AirportPathMap,
```

## Variants

- Small

## Examples

```tsx
const [activePath, setActivePath] = useState(paths[0].path);
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(500);
  const [pathWidth, setPathWidth] = useState(DEFAULT_PATH_WIDTH);

  const handlePathWidthChange = useCallback((event: SelectChangeEvent<number>) => {
    setPathWidth(+event.target.value);
  }, []);

  const handlePathClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const newPath = paths.find(({ name }) => event.currentTarget.dataset.name === name);
    if (!newPath) {
      return;
    }
    setActivePath(newPath.path);
  }, []);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <Container>
      {paths.map(({ name }) => (
        <Button key={name} data-name={name} variant="contained" onClick={handlePathClick}>
          {name}
        </Button>
      ))}
      <MenuButton {...darkModeMenuButtonProps} />
      <Select size="small" style={{ width: 200 }} value={pathWidth} label="Pathwidth" onChange={handlePathWidthChange}>
        {PATH_WIDTH_OPTIONS.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <AirportPathMap path={activePath} darkMode={darkMode} pathWidth={pathWidth} />
      <TextField
        id="height"
        label="Height"
        name="height"
        size="small"
        type="number"
        defaultValue={height}
        onBlur={(event: FocusEvent<HTMLInputElement>) => setHeight(Number(event.currentTarget.value))}
      />
      <TextField
        id="width"
        label="Width"
        name="width"
        size="small"
        type="number"
        defaultValue={width}
        onBlur={(event) => setWidth(Number(event.currentTarget.value))}
      />
      <AirportPathMap path={activePath} darkMode={darkMode} height={height} width={width} pathWidth={pathWidth} />
    </Container>
  );
};
AirportPathMapInit.storyName = 'Map with airport paths';
AirportPathMapInit.parameters = {
  ...storyParameters,
  viewport: { width: 800 },
};

const styles: Styles = {
  display: 'flex',
  flexDirection: 'column',
  '& .AirportPathMapAutoResize-actions': {
    flex: 0,
  },
  '& .AirportPathMapAutoResize-map': {
    flex: 1,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
};
const AutoResizeContainer = styled(Container, { name: 'AutoResizeContainer' })(styles);

export const AirportPathMapAutoResize = () => {
  const [activePath, setActivePath] = useState(paths[0].path);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();
  const handlePathClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const newPath = paths.find(({ name }) => event.currentTarget.dataset.name === name);
    if (!newPath) {
      return;
    }
    setActivePath(newPath.path);
  }, []);

  return (
    <AutoResizeContainer fullPage>
      <Container>
        {paths.map(({ name }) => (
          <Button key={name} data-name={name} variant="contained" onClick={handlePathClick}>
            {name}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <div className="AirportPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <AirportPathMap path={activePath} darkMode={darkMode} height={height} width={width} />
          )}
        </AutoResizer>
      </div>
    </AutoResizeContainer>
  );
};
AirportPathMapAutoResize.storyName = 'Map with airport paths (auto resize)';
AirportPathMapAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export default {
  title: 'Graphs & charts/Maps/AirportPathMap',
  component: AirportPathMap,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
