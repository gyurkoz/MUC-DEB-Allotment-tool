# NetLine UI v8.0.0-rc.2 - Installation guide

This guide provides instructions on how to install and set up the NetLine UI library in your project. As the library is
built on top of React and Material UI (MUI), it is assumed that you have a basic understanding of these technologies.

As NetLine UI v8 usually re-exports every required MUI components and utilities, it is not necessary to install
`@mui/material` or other MUI packages directly in your project. The only exception is `@mui/icons-material`  which is 
not re-exported by NetLine UI, so if you need to use MUI icons in your project you have to install the package manually.

We have collected some topics from MUI Installation guide which is needed to be configured in your project with 
NetLine UI:
- [Peer dependencies](https://mui.com/material-ui/getting-started/installation/#peer-dependencies)
- [React 18 and below](https://mui.com/material-ui/getting-started/installation/#react-18-and-below)
- [Roboto font](https://mui.com/material-ui/getting-started/installation/#roboto-font)
- [Material Icons](https://mui.com/material-ui/getting-started/installation/#icons)

If it looks that something is not re-exported from MUI, please contact the NetLine UI team for further assistance!

## Preparation: Setting up package repositories

Before you start with the installation of NetLine UI packages there are some basic NPM configuration need to be done as
the library is not published into the NPM public repository, but into an internally available 
[Nexus](https://nexus.devspace-dev.lhsystems.int/#browse/browse:wui-npm) and an externally available 
[GitHub](https://github.com/lsy-netline/netline-ui/pkgs/npm/netline-ui) repositories.

So the following line has to be added to the `.npmrc` file in the your project root to be able to access the above
repositories:
- In case the project is using **Nexus NPM repository**:
  ```ini
  @lsy-netline:registry=https://nexus.devspace-dev.lhsystems.int/repository/wui-npm/
  //npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}
  legacy-peer-deps=false
  ```
  Make sure to set the `NPM_AUTH_TOKEN` environment variable with your Nexus Access Token in your build environment to
  be able to access the repository. You can find your token in Nexus under the **User Account** > **User Token** >
  **Access User Token** button, and you need to copy the Base64 token from the **Use the following for a Base64 
  representation of "user:password"** input field.
  <br/>
- In case the project is using **GitHub package repository**:
  ```ini
  @lsy-netline:registry=https://npm.pkg.github.com/
  //npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}
  legacy-peer-deps=false
  ```
  Make sure to set the `NPM_AUTH_TOKEN` environment variable with your GitHub personal access token in your build 
  environment to be able to access the repository. You can create a new personal access token in your GitHub account 
  settings under **Developer settings** > **Personal access tokens** with **read:packages** scope and authorize the 
  token to the **lsy-netline** and **lsy-netline-ui** organization!

The `legacy-peer-deps=false` line is needed to avoid installing incompatible versions of peer dependencies.

## Installing basic packages

Since NetLine UI v8 the library became a multi package library the installation process is always depends on what 
features your application needs. There are two packages which are recommended to be installed in every project using 
NetLine UI which are the following:
- **`@lsy-netline/netline-ui`** <br/>
  It is the extension and re-theming of the `@mui/material` library. It contains theming & styling, typography, buttons, 
  icon buttons, menu buttons, input fields, form handling, menus, lists, and various surface, layout and navigation 
  components.
  
  The package re-exports the `@mui/material` package not including the `@mui/material/utils` folder as it
  is moved into `@lsy-netline/netline-ui-utils` package.
  <br/>
- **`@lsy-netline/netline-ui-utils`** <br/>
  The package contains every utility functions and features which previously existed in NetLine UI v7 under
  `@lsy-netline/netline-ui/api`, `@lsy-netline/netline-ui/hooks` and `@lsy-netline/netline-ui/utils` exports. The 
  package also re-exports the utility functions from `@mui/utils` and from `@mui/material/utils`.

To install the these basic packages run the following command in your project root folder:
```bash
npm install @lsy-netline/netline-ui @lsy-netline/netline-ui-utils
```

**Note: as the packages are always deployed with the same version number, please make sure to always install the same 
version of the packages to avoid compatibility issues!**

## Installing further packages

As mentioned before we have split the different components and features into separate packages to make the library
more modular and to reduce the bundle size of applications using NetLine UI. Depending on the features your application 
needs you can install the following additional packages:
- **`@lsy-netline/netline-ui-icons`** <br/>
  The package contains common business related icons. Every icons were previously imported from NetLine UI v7
  `@lsy-netline/netline-ui/icons` were moved into this package, plus some new "semantic" icons are also introduced to 
  display some colorful icons for information, error, warning or success states.

  The package can be installed with the following command:
  ```bash
  npm install @lsy-netline/netline-ui-icons
  ```
  <br/>
- **`@lsy-netline/netline-ui-pickers`** and **`@lsy-netline/netline-ui-pickers-pro`**<br/>
  It is the extension and re-theming of `@mui/x-date-picker` and `@mui/x-time-picker-pro` package. It contains date 
  and time pickers like `DatePicker`, `TimePicker`, `DateTimePicker`, and a customizable calendar component 
  `EventCalendar`. 
  
  The PRO package contains additional feature like the `DateRangePicker` component and contains re-exports of the 
  original MUI exports with a `Mui` prefix (like: `MuiTimeRangePicker` or `MuiTimeRangePickerProps`).

  The packages can be installed with the following commands:
  ```bash
  npm install @lsy-netline/netline-ui-pickers 
  # or
  npm install @lsy-netline/netline-ui-pickers-pro
  ```
  <br/>
  <b>
  Notes:
  - Only one of the packages should be installed depending on the features your application needs as 
    `@lsy-netline/netline-ui-pickers-pro` already contains every components from `@lsy-netline/netline-ui-pickers` plus 
    the PRO components.
  - Packages need some additional setup in your build tool, so please read the 
    [Extra configuration for picker packages](#extra-configuration-for-picker-packages) section for details!
  - Using `@lsy-netline/netline-ui-pro` package will include the MUI X PRO license which is annually licensed for every 
    NetLine developer!
  </b>
  <br/>
- **`@lsy-netline/netline-ui-tables`** <br/>
  It contains the legacy `VirtualTable` and `ProblemArea` components, which are the same as their NetLine UI v7 version
  in `@lsy-netline/netline-ui/tables` export. The package will be extended later with new components.

  The package can be installed with the following command:
  ```bash
  npm install @lsy-netline/netline-ui-tables
  ```
  <br/>
- **`@lsy-netline/netline-ui-data-grid`**, **`@lsy-netline/netline-ui-data-grid-pro`** and 
  **`@lsy-netline/netline-ui-data-grid-premium`** <br/>
  In NetLine UI v8 we have introduced new data grid components to replace the old `VirtualTable` solution with time. 
  The new components are placed in the `@lsy-netline/netline-ui-data-grid`, `@lsy-netline/netline-ui-data-grid-pro` and 
  `@lsy-netline/netline-ui-data-grid-premium` packages, and which can be installed with the following commands:
  ```bash
  npm install @lsy-netline/netline-ui-data-grid
  # or
  npm install @lsy-netline/netline-ui-data-grid-pro
  # or
  npm install @lsy-netline/netline-ui-data-grid-premium
  ```
  <b>
  Notes:
  - Only one of the packages should be installed depending on the features your application needs as 
    `@lsy-netline/netline-ui-data-grid-pro` already contains every components from `@lsy-netline/netline-ui-data-grid` 
    plus the PRO components and `@lsy-netline/netline-ui-data-grid-premium` contains every components from both 
    previous packages plus the PREMIUM components.
  - Using `@lsy-netline/netline-ui-data-grid-pro` package will include the MUI X PRO license which is annually licensed 
    for every NetLine developer!
  - Using `@lsy-netline/netline-ui-data-grid-premium` package will include the MUI X PREMIUM license which is NOT 
    licensed for every developer, so please purchase a separate license if your team needs this library!
  </b>
  <br/>
- **`@lsy-netline/netline-ui-forms`** <br/>
  <br/>
- **`@lsy-netline/netline-ui-maps`** <br/>
  It contains geography / maps solution based on [OpenLayer](https://openlayers.org/) API. The package has the same
  exports as previously NetLine UI v7 `@lsy-netline/netline-ui/maps` had.

  The package can be installed with the following command:
  ```bash
  npm install @lsy-netline/netline-ui-maps
  ```
  <br/>

- **`@lsy-netline/netline-ui-license`** <br/>
  Contains common code for MUI X license handling. This package is automatically included if you are using PRO or 
  PREMIUM packages from NetLine UI, so you do not need to be added manually.
  <br/>

For detailed description and to migrate of the old code into different packages please read our 
[Migration Guide](/MIGRATION.md).

## Extra configuration for picker packages

Using `@lsy-netline/netline-ui-pickers` and `@lsy-netline/netline-ui-pickers-pro` needs some extra configuration in your
build tools, as `EventCalendar` component uses some files from `@mui/x-date-pickers` package which are not exported by
default. 

To be able to import these files a resolver need to be added into your Vite configuration (`vite.config.ts`):
```ts
// ... existing code ...
import { muiDatePickerResolver } from '@lsy-netline/netline-ui-pickers/tools';
// ... existing code ...

export default defineConfig({
  // ... existing config ...
  resolve: {
    alias: [muiDatePickerResolver],
  },
  // ... existing config ...
});
```


## Using / importing components

Most methods and components can be imported by using their default or named exports. The longer solution is to use their 
default exports like this:
```ts
import { ThemeProvider, theme } from '@lsy-netline/netline-ui/styles';
import Button from '@lsy-netline/netline-ui/Button';
import Card from '@lsy-netline/netline-ui/Card';
```

Also methods and components can be imported using named imports. This solution is working with less code, but only 
effective in code size when the bundler app supports tree-shaking (like CRA is doing):
```ts
import { Button, Card, ThemeProvider, theme } from '@lsy-netline/netline-ui';
```

Also all components (except unsafe ones) and methods are exported from `@mui/material` and are available in 
`@lsy-netline/netline-ui`.

### Extending Typescript interfaces of NetLine UI

NetLine ui tries to export interfaces when possible, so consumers can extend via 
[declaration merging (interface augmentation)](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).

Example for themes can be found in the #customizing-theme-and-palette section.
Example using `ColumnConfig`:

Lets assume you want to extend the Column to have an exportRenderer method as well, so you can define exportRenderers 
for table exports. This solution would enable all of your columns to define an exportRenderer method.
```ts
declare module '@lsy-netline/netline-ui-tables/VirtualTable/columns/Column' {
  interface VirtualTableColumn<RowType extends unknown = unknown> extends VirtualTableNonEditableColumn<RowType> {
    exportRenderer?: (rowValue: unknown) => string;
  }
}
```


## Setting up test environment in host project

While running tests with JEST framework (default framework of Create React App build tool) you might experience some 
resource loading problem. To avoid this, it is recommended to add the following JEST configuration lines into the 
`package.json` file or without `jest` key into your `jest.config.js` file:
```json
"jest": {
  ...
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  ...
},
```

This will map a default object loader for resources which does not effective while running unit tests.

---

*View this documentation in [Netline UI Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)*
