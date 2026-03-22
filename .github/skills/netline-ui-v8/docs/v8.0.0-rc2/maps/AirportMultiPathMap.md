# Airport Multi Path Map

Airport Multi Path Map component

## Overview

- **Category**: maps
- **Base Library**: custom

## Installation

```bash
npm install @lsy-netline/netline-ui
```

## Import

```typescript
import { AirportMultiPathMap } from '@lsy-netline/netline-ui';
```

## Basic Usage

```tsx
const paths: PathProps[] = useMemo(
    () => [
      { from: 'BUD', to: 'FRA', color: '#00DD00', lineOffset: 0 },
      { from: 'BUD-0-1', to: 'FRA-0-1', color: '#0FDD00', lineOffset: 1 },
      { from: 'FRA', to: 'JFK', color: '#DD0000' },
      { from: 'MUC', to: 'HND', color: '#0000DD' },
      { from: 'NRT', to: 'YVR', color: '#000DDD' },
      { from: 'YYT', to: 'NRT', color: '#CCA0DD' },
      { from: 'NRT', to: 'YYT', color: '#B0A0DD' },
      { from: 'NRT', to: 'PDX', color: '#00A0DD' },
    ],
    [],
  );

  const [activePaths, setActivePaths] = useState([paths[0], paths[2], paths[3]]);
  const [zoom, setZoom] = useState(6);
  const [resolution, setResolution] = useState(6);
  const [center, setCenter] = useState([0, 0]);
  const [pathWidth, setPathWidth] = useState(DEFAULT_PATH_WIDTH);
  const [showAirportLabel, setShowAirportLabel] = useState(true);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();
  const [greatCircle, setGreatCircle] = useState(true);

  const handlePathWidthChange = useCallback((event: SelectChangeEvent<number>) => {
    setPathWidth(+event.target.value);
  }, []);

  const onResolutionChanged = (params: ResolutionChangeParams) => {
    setZoom(params.zoom);
    setResolution(params.resolution);
  };

  const onCenterChanged = useCallback((newCenter: number[]) => {
    setCenter(newCenter);
  }, []);

  const handlePathClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const path = paths.find(
        ({ from, to }) => event.currentTarget.dataset.from === from && event.currentTarget.dataset.to === to,
      );
      if (!path) {
        return;
      }

      setActivePaths((prevPaths) => {
        const existingPath = prevPaths.find((item) => item.from === path.from && item.to === path.to);
        return existingPath ? without(prevPaths, existingPath) : [...prevPaths, path];
      });
    },
    [paths],
  );
  const handleShowAirportLabelChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAirportLabel(event.target.checked);
  }, []);

  return (
    <>
      <Container>
        <div>{`Resolution: ${resolution.toFixed(2)} Zoom: ${zoom.toFixed(2)} Center: [${center[0].toFixed(
          2,
        )}, ${center[1].toFixed(2)}]`}</div>
        {paths.map((path) => (
          <Button
            key={`${path.from}-${path.to}`}
            data-from={path.from}
            data-to={path.to}
            variant="contained"
            onClick={handlePathClick}
          >
            {`${path.from}-${path.to}`}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
        <Button variant="contained" onClick={() => setGreatCircle(!greatCircle)}>
          Set great circle {greatCircle ? 'OFF' : 'ON'}
        </Button>
        <Select
          size="small"
          style={{ width: 200 }}
          value={pathWidth}
          label="Pathwidth"
          onChange={handlePathWidthChange}
        >
          {PATH_WIDTH_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={<Checkbox checked={showAirportLabel} onChange={handleShowAirportLabelChange} />}
          label="Show airport labels"
        />
      </Container>

      <AirportMultiPathMap
        paths={activePaths}
        coordinates={coordinates}
        darkMode={darkMode}
        onResolutionChange={onResolutionChanged}
        onCenterChange={onCenterChanged}
        lineInterpolation={greatCircle ? 'curved' : 'straight'}
        pathWidth={pathWidth}
        showAirportLabels={showAirportLabel}
        autoCenter
      />
    </>
  );
};
AirportMultiPathMapInit.storyName = 'Map with multiple airport paths';
AirportMultiPathMapInit.parameters = {
  ...storyParameters,
  viewport: { width: 1280 },
};

const styles: Styles = {
  display: 'flex',
  flexDirection: 'column',
  '& .AirportMultiPathMapAutoResize-actions': {
    flex: 0,
  },
  '& .AirportMultiPathMapAutoResize-map': {
    flex: 1,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
};
const AirportMultiPathMapAutoResizeContainer = styled(Container, { name: 'AirportMultiPathMapAutoResize' })(styles);

export const AirportMultiPathMapAutoResize = () => {
  const paths = useMemo(
    () => [
      { from: 'BUD', to: 'FRA', color: '#00DD00' },
      { from: 'FRA', to: 'JFK', color: '#DD0000' },
      { from: 'MUC', to: 'HND', color: '#0000DD' },
    ],
    [],
  );

  const [activePaths, setActivePaths] = useState<PathProps[]>(paths);
  const [zoom, setZoom] = useState(6);

  const onResolutionChanged = ({ zoom: newZoom }: ResolutionChangeParams) => {
    setZoom(newZoom);
  };

  const handlePathClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const path = paths.find(
        ({ from, to }) => event.currentTarget.dataset.from === from && event.currentTarget.dataset.to === to,
      );
      if (!path) {
        return;
      }

      setActivePaths((prevPaths) => {
        const existingPath = prevPaths.find((item) => item.from === path.from && item.to === path.to);
        return existingPath ? without(prevPaths, existingPath) : [...prevPaths, path];
      });
    },
    [paths],
  );

  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();
  const [pathWidth, setPathWidth] = useState(DEFAULT_PATH_WIDTH);
  const [showAirportLabel, setShowAirportLabel] = useState(true);

  const handleShowAirportLabelChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAirportLabel(event.target.checked);
  }, []);

  const handlePathWidthChange = useCallback((event: SelectChangeEvent<number>) => {
    setPathWidth(+event.target.value);
  }, []);

  return (
    <AirportMultiPathMapAutoResizeContainer fullPage>
      <Container className="AirportMultiPathMapAutoResize-actions">
        <div>{`Resolution: ${zoom}`}</div>
        {paths.map((path) => (
          <Button
            key={`${path.from}-${path.to}`}
            data-from={path.from}
            data-to={path.to}
            variant="contained"
            onClick={handlePathClick}
          >
            {`${path.from}-${path.to}`}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
        <Select
          size="small"
          style={{ width: 200 }}
          value={pathWidth}
          label="Pathwidth"
          onChange={handlePathWidthChange}
        >
          {PATH_WIDTH_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={<Checkbox checked={showAirportLabel} onChange={handleShowAirportLabelChange} />}
          label="Show airport labels"
        />
      </Container>
      <div className="AirportMultiPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <AirportMultiPathMap
              width={width}
              height={height}
              paths={activePaths}
              coordinates={coordinates}
              darkMode={darkMode}
              onResolutionChange={onResolutionChanged}
              pathWidth={pathWidth}
              showAirportLabels={showAirportLabel}
            />
          )}
        </AutoResizer>
      </div>
    </AirportMultiPathMapAutoResizeContainer>
  );
};
AirportMultiPathMapAutoResize.storyName = 'Map with multiple airport paths (auto resize)';
AirportMultiPathMapAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export const AirportMultiPathMapStriped = () => {
  const paths: PathProps[] = [
    { from: 'BUD', to: 'FRA', color: ['#FFA500', '#0000FF'] },
    { from: 'FRA', to: 'JFK', color: ['#DD0000', '#00DD00', '#0000DD'] },
    { from: 'FRA', to: 'WAW', color: [255, 0, 0] },
  ];

  return <AirportMultiPathMap paths={paths} stationColor="#000000" coordinates={coordinates} autoCenter />;
};
AirportMultiPathMapStriped.storyName = 'Map with striped airport paths';
AirportMultiPathMapStriped.parameters = {
  ...storyParameters,
  viewport: { width: 800 },
};

export default {
  title: 'Graphs & charts/Maps/AirportMultiPathMap',
  component: AirportMultiPathMap,
```

## Variants

- Small

## Examples

```tsx
const paths: PathProps[] = useMemo(
    () => [
      { from: 'BUD', to: 'FRA', color: '#00DD00', lineOffset: 0 },
      { from: 'BUD-0-1', to: 'FRA-0-1', color: '#0FDD00', lineOffset: 1 },
      { from: 'FRA', to: 'JFK', color: '#DD0000' },
      { from: 'MUC', to: 'HND', color: '#0000DD' },
      { from: 'NRT', to: 'YVR', color: '#000DDD' },
      { from: 'YYT', to: 'NRT', color: '#CCA0DD' },
      { from: 'NRT', to: 'YYT', color: '#B0A0DD' },
      { from: 'NRT', to: 'PDX', color: '#00A0DD' },
    ],
    [],
  );

  const [activePaths, setActivePaths] = useState([paths[0], paths[2], paths[3]]);
  const [zoom, setZoom] = useState(6);
  const [resolution, setResolution] = useState(6);
  const [center, setCenter] = useState([0, 0]);
  const [pathWidth, setPathWidth] = useState(DEFAULT_PATH_WIDTH);
  const [showAirportLabel, setShowAirportLabel] = useState(true);
  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();
  const [greatCircle, setGreatCircle] = useState(true);

  const handlePathWidthChange = useCallback((event: SelectChangeEvent<number>) => {
    setPathWidth(+event.target.value);
  }, []);

  const onResolutionChanged = (params: ResolutionChangeParams) => {
    setZoom(params.zoom);
    setResolution(params.resolution);
  };

  const onCenterChanged = useCallback((newCenter: number[]) => {
    setCenter(newCenter);
  }, []);

  const handlePathClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const path = paths.find(
        ({ from, to }) => event.currentTarget.dataset.from === from && event.currentTarget.dataset.to === to,
      );
      if (!path) {
        return;
      }

      setActivePaths((prevPaths) => {
        const existingPath = prevPaths.find((item) => item.from === path.from && item.to === path.to);
        return existingPath ? without(prevPaths, existingPath) : [...prevPaths, path];
      });
    },
    [paths],
  );
  const handleShowAirportLabelChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAirportLabel(event.target.checked);
  }, []);

  return (
    <>
      <Container>
        <div>{`Resolution: ${resolution.toFixed(2)} Zoom: ${zoom.toFixed(2)} Center: [${center[0].toFixed(
          2,
        )}, ${center[1].toFixed(2)}]`}</div>
        {paths.map((path) => (
          <Button
            key={`${path.from}-${path.to}`}
            data-from={path.from}
            data-to={path.to}
            variant="contained"
            onClick={handlePathClick}
          >
            {`${path.from}-${path.to}`}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
        <Button variant="contained" onClick={() => setGreatCircle(!greatCircle)}>
          Set great circle {greatCircle ? 'OFF' : 'ON'}
        </Button>
        <Select
          size="small"
          style={{ width: 200 }}
          value={pathWidth}
          label="Pathwidth"
          onChange={handlePathWidthChange}
        >
          {PATH_WIDTH_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={<Checkbox checked={showAirportLabel} onChange={handleShowAirportLabelChange} />}
          label="Show airport labels"
        />
      </Container>

      <AirportMultiPathMap
        paths={activePaths}
        coordinates={coordinates}
        darkMode={darkMode}
        onResolutionChange={onResolutionChanged}
        onCenterChange={onCenterChanged}
        lineInterpolation={greatCircle ? 'curved' : 'straight'}
        pathWidth={pathWidth}
        showAirportLabels={showAirportLabel}
        autoCenter
      />
    </>
  );
};
AirportMultiPathMapInit.storyName = 'Map with multiple airport paths';
AirportMultiPathMapInit.parameters = {
  ...storyParameters,
  viewport: { width: 1280 },
};

const styles: Styles = {
  display: 'flex',
  flexDirection: 'column',
  '& .AirportMultiPathMapAutoResize-actions': {
    flex: 0,
  },
  '& .AirportMultiPathMapAutoResize-map': {
    flex: 1,
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
};
const AirportMultiPathMapAutoResizeContainer = styled(Container, { name: 'AirportMultiPathMapAutoResize' })(styles);

export const AirportMultiPathMapAutoResize = () => {
  const paths = useMemo(
    () => [
      { from: 'BUD', to: 'FRA', color: '#00DD00' },
      { from: 'FRA', to: 'JFK', color: '#DD0000' },
      { from: 'MUC', to: 'HND', color: '#0000DD' },
    ],
    [],
  );

  const [activePaths, setActivePaths] = useState<PathProps[]>(paths);
  const [zoom, setZoom] = useState(6);

  const onResolutionChanged = ({ zoom: newZoom }: ResolutionChangeParams) => {
    setZoom(newZoom);
  };

  const handlePathClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const path = paths.find(
        ({ from, to }) => event.currentTarget.dataset.from === from && event.currentTarget.dataset.to === to,
      );
      if (!path) {
        return;
      }

      setActivePaths((prevPaths) => {
        const existingPath = prevPaths.find((item) => item.from === path.from && item.to === path.to);
        return existingPath ? without(prevPaths, existingPath) : [...prevPaths, path];
      });
    },
    [paths],
  );

  const { darkMode, ...darkModeMenuButtonProps } = useDarkModeMenuButton();
  const [pathWidth, setPathWidth] = useState(DEFAULT_PATH_WIDTH);
  const [showAirportLabel, setShowAirportLabel] = useState(true);

  const handleShowAirportLabelChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAirportLabel(event.target.checked);
  }, []);

  const handlePathWidthChange = useCallback((event: SelectChangeEvent<number>) => {
    setPathWidth(+event.target.value);
  }, []);

  return (
    <AirportMultiPathMapAutoResizeContainer fullPage>
      <Container className="AirportMultiPathMapAutoResize-actions">
        <div>{`Resolution: ${zoom}`}</div>
        {paths.map((path) => (
          <Button
            key={`${path.from}-${path.to}`}
            data-from={path.from}
            data-to={path.to}
            variant="contained"
            onClick={handlePathClick}
          >
            {`${path.from}-${path.to}`}
          </Button>
        ))}
        <MenuButton {...darkModeMenuButtonProps} />
        <Select
          size="small"
          style={{ width: 200 }}
          value={pathWidth}
          label="Pathwidth"
          onChange={handlePathWidthChange}
        >
          {PATH_WIDTH_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={<Checkbox checked={showAirportLabel} onChange={handleShowAirportLabelChange} />}
          label="Show airport labels"
        />
      </Container>
      <div className="AirportMultiPathMapAutoResize-map">
        <AutoResizer>
          {({ width, height }) => (
            <AirportMultiPathMap
              width={width}
              height={height}
              paths={activePaths}
              coordinates={coordinates}
              darkMode={darkMode}
              onResolutionChange={onResolutionChanged}
              pathWidth={pathWidth}
              showAirportLabels={showAirportLabel}
            />
          )}
        </AutoResizer>
      </div>
    </AirportMultiPathMapAutoResizeContainer>
  );
};
AirportMultiPathMapAutoResize.storyName = 'Map with multiple airport paths (auto resize)';
AirportMultiPathMapAutoResize.parameters = {
  ...storyParameters,
  viewport: { width: 1280, height: 720 },
};

export const AirportMultiPathMapStriped = () => {
  const paths: PathProps[] = [
    { from: 'BUD', to: 'FRA', color: ['#FFA500', '#0000FF'] },
    { from: 'FRA', to: 'JFK', color: ['#DD0000', '#00DD00', '#0000DD'] },
    { from: 'FRA', to: 'WAW', color: [255, 0, 0] },
  ];

  return <AirportMultiPathMap paths={paths} stationColor="#000000" coordinates={coordinates} autoCenter />;
};
AirportMultiPathMapStriped.storyName = 'Map with striped airport paths';
AirportMultiPathMapStriped.parameters = {
  ...storyParameters,
  viewport: { width: 800 },
};

export default {
  title: 'Graphs & charts/Maps/AirportMultiPathMap',
  component: AirportMultiPathMap,
```

## Storybook

View interactive examples in [Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)
