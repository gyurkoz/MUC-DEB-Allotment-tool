# NetLine UI v8.0.0-rc.2 - Contributors guide

This guide is made for developers who wants to start develop / contribute to the NetLine UI component library.

The code library is internal open source and we welcome any contributors from the company, but if you have any 
development idea or feature request please always contact the Product or Technical Owner first to discuss it, as the
project has its own roadmap and vision:
- Product Owner: [HERVAI, LAURA](laura.hervai@lhsystems.com)
- Technical Owner: [SOMOS, ZOLTAN](zoltan.somos@lhsystems.com)

The project is maintained in trackSpace under the [UICDLSY](https://trackspace.lhsystems.com/browse/UICDLSY) project
and "NetLine UI" component. Any new feature or bugfix should be created as a new task in the trackSpace project and 
linked to the relevant epic.

The main infrastructure we build the project on:
- React 18 / 19
- Typescript
- Nx Monorepo (from v8) for monorepo management, build and release
- Storybook v8
- Jest
- ESLint (with AIRBnB + custom config) + Prettier
- GitHub Actions for CI/CD
- GitHub Package Registry + Nexus for package hosting
- Commitizen + Husky for git commit standardization and precommit hooks

## Setting up the development environment

Although there are no OS restrictions, we recommend using a Unix based OS such as Linux or MacOS. Windows users can use 
WSL2 to get a similar experience. The documentation will usually reference to `bash` / `sh` commands. Using also 
**Git Bash** on Window can also work, but it is not recommended.

## Checking out the code

The NetLine UI component library is hosted on an internal private GitHub repository in the **lsy-netline** 
organization. To be able to contribute you need to have access to this repository. Please contact the team if you need
access who can give you access to the **lsy-netline-ui-contributors** OKTA group.

To clone the repository you can use the following command:

```bash
git clone https://github.com/lsy-netline/netline-ui.git
```

When you start develop you might need multiple versions of the codebase. We highly recommend to clone the repository
multiple times into different folders so you can easily switch between branches and versions:

```bash
git clone https://github.com/lsy-netline/netline-ui.git netline-ui@6
cd netline-ui@6
git checkout v6.x-dev
cd ..

git clone https://github.com/lsy-netline/netline-ui.git netline-ui@7
cd netline-ui@7
git checkout develop
cd ..

git clone https://github.com/lsy-netline/netline-ui.git netline-ui@next
cd netline-ui@next
git checkout next-dev
cd ..
```

Take care that from NetLine UI v8 we are using a new monorepo structure which is created with `Nx` toolset. The v6 and 
v7 versions are using a different repository structure!

In case of NetLine UI v7 we are generating three packages from one source. To be able to make it we are using source 
control blocks with @BUILD, @BUILD-BLOCK and @BUILD-COMMENT tags, and a pre-compiler mechanism which generates the 
final packages codes (see `scripts/build-helpers.ts` for details). Please take care when you edit the code in v7 branch
as these tags are very sensitive to modifications. Any change in these tags can break the build process!

## Installing dependencies

When the repo is cloned you need to install the dependencies. The project uses `npm` as package manager. To install the
dependencies run the following command in the root of the repository:
```bash
npm install
```

Take care that different version of NetLine UI might use different NodeJS versions. To make sure you are using the 
correct NodeJS version we recommend to use `nvm` (Node Version Manager) tool. You can find the required NodeJS version 
in the `.nvmrc` file in the root of the repository. To use `nvm` you need to install it first. You can find the 
installation instructions on the [official nvm repository](https://github.com/nvm-sh/nvm). Please read the "Deeper 
Shell Integration" section to make sure `nvm` is loaded automatically when you change into the project folder!

NOTE: as the project only publishes private packages to the internal GitHub package registry, and does not install any
internal packages, this setup should be enough for you for local development. However, if you want to publish packages
to any of our GitHub or Nexus package repositories, you need to configure the following authentication tokens:
- GitHub: <br/>
  You will need to create a personal access token (PAT) on GitHub with the `write:packages` scope in the **lsy-netline**
  organization. This personal access token need to be added to your `GH_PUBLISH_TOKEN` environment variable. You can do
  this by running the following command:
  ```bash
  export GH_PUBLISH_TOKEN=<<your_personal_access_token>>
  ```
- Nexus: <br/>
  You need to go to the User Account > User Token > Access User Token button, and you need to copy the Base64 token 
  from the **Use the following for a base64 representation of "user:password"** input field and you need to add it to
  the `NEXUS_PUBLISH_TOKEN` environment variable:
  ```bash
  export NEXUS_PUBLISH_TOKEN=<<your_nexus_base64_token>>
  ```
  
It is recommended to put these tokens into your `.bashrc` or `.zshrc` file so you do not need to set them every time.

## Starting and building Storybook

The project uses Storybook as the main development and demo environment. To start the Storybook run the following 
command in the root of the repository:
```bash
npm run storybook
```

This will start the Storybook in development mode and it will be available at `http://localhost:9009` by default.

To build a static version of the Storybook you can run the following command:
```bash
npm run build:storybook
```

The static Storybook will be generated into the `apps/netline-ui-storybook` folder. This can be started with a simple 
static file server such as `serve` package:
```bash
npx serve apps/netline-ui-storybook/dist
```

## Running static code analyizer (ESLint)

There is a static code analyizer (ESLint) set up in the project to make sure the code quality is maintained. You can 
run the ESLint with the following command:
```bash
npm run lint
```

As linter results are cached by `Nx` for build optimization purposes, if you want to make sure all files are checked 
you can run the linter with the `--no-cache` option or reset the Nx cache with `npm run reset` command.

Automatic linting is happening also as a precommit Husky hook. So before every commit the linter will run and if there
are any linting errors the commit will be aborted. You can bypass the precommit hook with the `--no-verify` option of 
the `git commit` command, but it is not recommended as QA checks are done in the build / release pipeline too.

## Running unit tests

For most of the packages there is a Jest based unit test suite set up.

You can run the unit tests with the following command:
```bash
npm run test
```

## Running storyshots

This is a guide for developers on how to test components in Storybook.

With the update to Storybook v8 come a few changes. The tests are no longer using puppeteer, but instead use Playwright.
Storybook introduced a new test runner which you can run against a deployed storybook. You can learn more about 
storybook testing in the [official documentation](https://storybook.js.org/docs/8/writing-tests).

As the Storyshot image creation is OS dependent (different OS-s can render components slightly differently) we
recommend to use a **Ubuntu 22.04** WSL environment on Windows, or a native Linux or MacOS environment. In the future we
will create a Docker based solution to be able to run the tests in a containerized environment.

### Prerequisites

You need to install Playwright with OS dependencies to be able to run the tests. This can be done with the following
command (after the package dependencies already installed with `npm install`):
```bash
npx playwright install --with-deps
```

### Running tests

To run the tests, you need need to have a locally running or deployed Storybook. You can run storybook locally with the
following command:
```bash
npm run storybook
```

Once you have the storybook running, you can run the tests with the following command:
```bash
npm run test:storybook
```

This will run all the stories and image snapshot tests.

### Component tests

This are test which are written for a specific component. They are located in the `src/{ComponentName}` folder. You can
think of them as react unit tests. Instead of the react testing library they use `@storybook/test` addon which provides
a similar testing experience. You can view these tests when you run the storybook. If a component story has component 
tests then they will show up on the selected stories dashboard under the `Interactions` tab.

## Branching, committing and releasing

As above mentioned the project uses three main branches for different versions (the number of main branches can
increase in the future if we start develop v9 or later versions):
- `v6.x-dev`: <br/>
  This branch is used for maintaining the v6 version of the NetLine UI component library. This version is in maintenance 
  mode only and only critical bugfixes and security updates are applied here. No new features are added to this version.
- `develop`: <br/>
  This branch is used for the v7 version of the NetLine UI component library. This version is still actively developed 
  and new features are added here. Once a new major version is ready it will be released from this branch.
- `next-dev`: <br/>
  This branch is used for the v8 version of the NetLine UI component library. This version is still in Alpha / RC phase
  and new features are added here. Once a new major version this branch will be merged into `develop` branch and will 
  become the development branch of the next version (v9).

When a new feature or bugfix is started a new feature branch need to be created from the relevant development branch. 
The naming convention of the feature branches are the following: 
```
{type}/{ticket-no}-{short-description}`
```
Where:
- `{type}`: <br/>
  The type of the branch. It can be `feat`, `fix`, `chore` or `docs` according to spec
- `{ticket-no}`: <br/>
  The trackSpace task ID which is related to the change (eg. UICDLSY-1234)
- `{short-description}`: <br/>
  A short description of the change in lowercase letters and words separated by hyphens.

After the development is done the commit messages need to follow the 
[conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) specification. This means that the following 
format need to be used:
```
{type}({ticket-no}): {short-description}

{optional body}
```
Where:
- `{type}`: <br/>
  The type of the change. It can be `feat`, `fix`, `chore` or `docs` according to conventional commit spec
- `{ticket-no}`: <br/>
  The trackSpace task ID or (IDs it there are multiple ones) which is related to the change (eg. UICDLSY-1234)
- `{short-description}`: <br/>
  A short description of the change in lowercase letters
- `{optional body}`: <br/>
  An optional longer description of the change

### Merging with pull requests

Development branches are protected and direct commits are not allowed. All changes need to be done via pull requests 
(PR). Once a feature branch is ready a pull request need to be created against the relevant development branch. 

The PR title and description must be created with the following rules:
- The title of the pull request need to follow the same conventional commit specification as the commit messages. 
- The description of the pull request need to contain the trackSpace task ID or (IDs it there are multiple ones) which
  is related to the change (eg. UICDLSY-1234). Also a link to the trackSpace task is recommended.

The pull request need to be reviewed and approved by at least one other team member before it can be merged. Once the 
pull request is approved and all checks are passed it can be merged into the development branch. 

It is possible to create a AKS based deployment for the changes in the pull request for testing purposes: for this the
PR author need to add the **Preview** label to the pull request. This will trigger the GitHub Actions workflow which 
will create a temporary deployment in the AKS cluster. Once the PR is merged or closed the temporary deployment will be 
deleted automatically. The link of the temporary deployment will be added as a comment to the pull request by the 
workflow. If the comment is not created automatically, it doesn't mean that the deployment failed, so please check the
following URL to see if the deployment is created: https://netline-ui-storybook-pr-NNN.aks-netline.dev.lhsystems.int/
(the `NNN` in the URL need to be replaced with the pull request number).

### Releasing a new version

A new version of the NetLine UI component library is released from the relevant release branches automatically. For this
a pull request need to be created from the development branch to the release branch. The PR title need to be in the
following format: `chore(release): release v<version>`, where `<version>` need to be replaced with the expected new 
version number. The versions are calculated automatically by `Nx` tool from the commit messages since the last release.

The following release branches are available:
- `v6.x`: <br/>
  The release branch for the v6 version of the NetLine UI component library. The related develpoment branch is 
  `v6.x-dev` where the PR need to be created from.
- `master`: <br/>
  The release branch for the v7 version of the NetLine UI component library. The related develpoment branch is `develop`
  where the PR need to be created from.
- `next`: <br/>
  The release branch for the v8 version of the NetLine UI component library. The related develpoment branch is 
  `next-dev` where the PR need to be created from.

In case of release the bulid is generated into the `dist` folder and the packages are published to the internal GitHub 
Package Registry and Nexus Repository automatically via GitHub Actions workflow.

## Kitchensink: template repository

We have created a kitchensink repository which contains a template project for creating new applications or
libraries using the NetLine UI component library. You can find the repository at the following URL:
- https://github.com/lsy-netline-ui/netline-ui-template-vite

## Installing dependencies

The kitchensink repo is built with Vite and React, and it is integrated in every Storybook release pipeline to make
sure it is always up to date with the latest NetLine UI component library version.

Before starting the project the package dependencies need to be installed:
```bash
npm install
```

When installing the kitchensink repo it always installed with some existing version of the NetLine UI component library.
To update to the latest in-development version we recommend to replace to content of `node_modules/@lsy-netline` with
the latest package version found in NetLine UI's `dist` folder. This can be done with the following command:
```bash
rm -rf node_modules/@lsy-netline 
cp -r <netline-ui-dir>/dist/ ./node_modules/@lsy-netline/
rm -rf node_modules/.cache # to make sure Vite cache is cleared
```

NOTE: do not forget to build the NetLine UI component library first before copying the `dist` folder!

## Building and starting the kitchensink repo

After successful installation the kitchensink repo can be built with the following command:
```bash
npm run build
```

Or even start with a development server:
```bash
npm run dev
```

## Test packages as an SDK in different host projects

It is often required to test the library with different host project. For this there are three solutions:
- Use `npm pack` command will create a `.tgz` file which can be installed in your project. For this you need to run 
  the following command in the root folder:
  ```bash
  npm run build
  cd ./dist/netline-ui # or any package name
  npm pack
  ```

  And then you need to install the dependency in your host project:
  ```bash
  npm install <path-of-the-created-tgz-file>
  ```
  <br />
- Use [Verdaccio](https://github.com/verdaccio/verdaccio) to test how this package behaving when properly published to
  a package registry. With [docker](https://github.com/verdaccio/verdaccio#docker) it's runnig in mintues and it's 
  easier than linking this project to a random host project during development. See 
  [Publishing](https://github.com/verdaccio/verdaccio#publishing) section for details.

  You can then publish the packages to the local repo:
  ```bash
  npm run build
  npm publish ./dist/netline-ui --registry http://localhost:4873
  ```

  In the host project you need to configure the NPM registry in your `.npmrc` file:
  ```ini
  @lsy-netline:registry=https://localhost:4873
  ```
  <br />
- The hacky solution copying the complete the content `./dist` folder into your host project's 
  `./node_modules@lsy-netline` folder and updating the `package.json` manually can also work, but this solution there
  are some pain points:
  - dependencies and transient dependencies are not updated, so if package deps are changed it most likley not work
  - build tools often caches the build result so the cache folder (eg. `./node_modules/.cache`) need to be cleaned
    before we run the build tool again

## Using Git Worktree

**Git Worktree** is a powerful feature that allows you to manage multiple working directories attached to a single Git 
repository. This is especially useful for working on different branches simultaneously, testing changes, or preparing 
releases without cloning the repository multiple times.

### Common Commands

#### Add a New Worktree

To create a new worktree for a specific branch (e.g., `feature-branch`):
```bash
git worktree add ../netline-ui-feature feature-branch
```
Which does the following:
- Creates a new directory `../netline-ui-feature` with the contents of `feature-branch`.
- If the branch does not exist, it will be created.
- Creates a .git file inside it (which points to the main repository's .git directory).
- Example content of .git file:
    ```
    gitdir: /path/to/main/repo/.git/worktrees/netline-ui-feature
    ```

#### List Existing Worktrees

To see all worktrees attached to your repository:
```bash
git worktree list
```

#### Remove a Worktree

To remove a worktree (after you’re done with it):
```bash
git worktree remove ../netline-ui-feature
```
It detaches the worktree from the repository and deletes the directory.

#### 4. Prune Worktrees

To clean up worktrees that are no longer valid (e.g., directories deleted manually):
```bash
git worktree prune
```

### Typical Workflow

1. **Create a feature branch worktree:**  
  `git worktree add ../netline-ui-feature feature-branch`
2. **Work in the new directory:**  
  Make changes, commit, and push as usual.
3. **Switch between branches easily:**  
  Each worktree is independent, so you can work on multiple branches in parallel.
4. **Remove worktree when done:**  
  `git worktree remove ../netline-ui-feature`

> **Notes**:
> - Worktrees share the same `.git` directory, so operations like fetch and push affect all worktrees.
> - Avoid making changes in the same branch from multiple worktrees at the same time to prevent conflicts.

### Example for handling different versions
- Create worktrees based on existing branches:
  ```bash
  git worktree add ../netline-ui.worktrees/develop develop
  git worktree add ../netline-ui.worktrees/next-dev next-dev
  git worktree add ../netline-ui.worktrees/v6.x-dev v6.x-dev
  ```

- Create worktrees based on remote branches:
  ```bash
  git worktree add ../netline-ui.worktrees/develop -b develop
  git worktree add ../netline-ui.worktrees/next-dev -b next-dev
  git worktree add ../netline-ui.worktrees/v6.x-dev -b v6.x-dev
  ```

---

*View this documentation in [Netline UI Storybook](https://netline-ui-storybook-next.aks-netline.dev.lhsystems.int)*
