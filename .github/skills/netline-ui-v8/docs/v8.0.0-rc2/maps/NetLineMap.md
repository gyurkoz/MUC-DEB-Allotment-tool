# Net Line Map

Net Line Map component

## Overview

- **Category**: maps
- **Base Library**: custom

## Description

An OpenLayers map component which provides a context for the map layers and controls.

There are different sources available for the map tiles which can be controlled
with the `source` prop:
- OpenStreetMap (default)
- Mapbox: Mapbox API key is required to set in `apiKey` prop

Components like `AirportPathMap` and `AirportMultiPathMap` are built on top of this component.

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { NetLineMap } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(500);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <NetLineMap center={center} zoom={7} darkMode={darkMode} source={MapSource.Osm} />
      <TextField
        id="height"
        label="Height"
        name="height"
        size="small"
        type="number"
        defaultValue={height}
        onBlur={(event) => setHeight(Number(event.currentTarget.value))}
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
      <NetLineMap center={center} zoom={7} height={height} width={width} darkMode={darkMode} />
    </>
  );
};
NetLineMapOsm.storyName = 'NetLine Map with OSM';
NetLineMapOsm.parameters = {
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

export const NetLineMapOsmAutoResize = () => {
  const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <AutoResizeContainer fullPage>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <div className="AirportPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <NetLineMap center={center} zoom={7} height={height} width={width} darkMode={darkMode} />
          )}
        </AutoResizer>
      </div>
    </AutoResizeContainer>
  );
};
NetLineMapOsmAutoResize.storyName = 'NetLine Map with OSM (auto resize)';
NetLineMapOsmAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export const NetLineMapMapbox = () => {
  const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(500);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <div>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <NetLineMap center={center} zoom={7} darkMode={darkMode} source={MapSource.Mapbox} apiKey={mapboxApiKey} />
      <TextField
        id="height"
        label="Height"
        name="height"
        size="small"
        type="number"
        defaultValue={height}
        onBlur={(event) => setHeight(Number(event.currentTarget.value))}
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
      <NetLineMap
        center={center}
        zoom={7}
        height={height}
        width={width}
        source={MapSource.Mapbox}
        apiKey={mapboxApiKey}
        darkMode={darkMode}
      />
    </div>
  );
};
NetLineMapMapbox.storyName = 'NetLine Map with Mapbox';
NetLineMapMapbox.parameters = {
  ...storyParameters,
  viewport: { width: 800 },
};

export const NetLineMapMapboxAutoResize = () => {
  const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <AutoResizeContainer fullPage>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <div className="AirportPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <NetLineMap
              center={center}
              zoom={7}
              height={height}
              width={width}
              source={MapSource.Mapbox}
              apiKey={mapboxApiKey}
              darkMode={darkMode}
            />
          )}
        </AutoResizer>
      </div>
    </AutoResizeContainer>
  );
};
NetLineMapMapboxAutoResize.storyName = 'NetLine Map with Mapbox (auto resize)';
NetLineMapMapboxAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export default {
  title: 'Graphs & charts/Maps/NetLineMap',
  component: NetLineMap,
```

## Variants

- Small

## Examples

```tsx
const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(500);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <NetLineMap center={center} zoom={7} darkMode={darkMode} source={MapSource.Osm} />
      <TextField
        id="height"
        label="Height"
        name="height"
        size="small"
        type="number"
        defaultValue={height}
        onBlur={(event) => setHeight(Number(event.currentTarget.value))}
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
      <NetLineMap center={center} zoom={7} height={height} width={width} darkMode={darkMode} />
    </>
  );
};
NetLineMapOsm.storyName = 'NetLine Map with OSM';
NetLineMapOsm.parameters = {
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

export const NetLineMapOsmAutoResize = () => {
  const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <AutoResizeContainer fullPage>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <div className="AirportPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <NetLineMap center={center} zoom={7} height={height} width={width} darkMode={darkMode} />
          )}
        </AutoResizer>
      </div>
    </AutoResizeContainer>
  );
};
NetLineMapOsmAutoResize.storyName = 'NetLine Map with OSM (auto resize)';
NetLineMapOsmAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export const NetLineMapMapbox = () => {
  const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(500);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <div>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <NetLineMap center={center} zoom={7} darkMode={darkMode} source={MapSource.Mapbox} apiKey={mapboxApiKey} />
      <TextField
        id="height"
        label="Height"
        name="height"
        size="small"
        type="number"
        defaultValue={height}
        onBlur={(event) => setHeight(Number(event.currentTarget.value))}
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
      <NetLineMap
        center={center}
        zoom={7}
        height={height}
        width={width}
        source={MapSource.Mapbox}
        apiKey={mapboxApiKey}
        darkMode={darkMode}
      />
    </div>
  );
};
NetLineMapMapbox.storyName = 'NetLine Map with Mapbox';
NetLineMapMapbox.parameters = {
  ...storyParameters,
  viewport: { width: 800 },
};

export const NetLineMapMapboxAutoResize = () => {
  const centers: Record<string, Coordinate> = {
    BUD: [19.25352167657738, 47.43563480321592],
    FRA: [8.553337746744319, 50.03415412473015],
    MUC: [11.782224049287322, 48.35298018996798],
    JFK: [-73.78428295709143, 40.645814487120106],
    HND: [139.78307844803226, 35.54948962825432],
  };

  const [center, setCenter] = useState(centers.BUD);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();

  return (
    <AutoResizeContainer fullPage>
      <Container>
        {Object.keys(centers).map((centerKey) => (
          <Button key={centerKey} variant="contained" onClick={() => setCenter(centers[centerKey])}>
            {centerKey}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
      </Container>
      <div className="AirportPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <NetLineMap
              center={center}
              zoom={7}
              height={height}
              width={width}
              source={MapSource.Mapbox}
              apiKey={mapboxApiKey}
              darkMode={darkMode}
            />
          )}
        </AutoResizer>
      </div>
    </AutoResizeContainer>
  );
};
NetLineMapMapboxAutoResize.storyName = 'NetLine Map with Mapbox (auto resize)';
NetLineMapMapboxAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export default {
  title: 'Graphs & charts/Maps/NetLineMap',
  component: NetLineMap,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
