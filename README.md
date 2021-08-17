# RickMorty

This project has been created by ReactNative CLI.

## Maintainers
[https://github.com/l0ger]

## Available Scripts

In the project directory, you can run:

### `yarn android`

Runs the app in the android device or emulator.\
### `yarn ios`

Runs the app in the ios device or emulator.\


### `yarn test`

Launches the test runner in the interactive watch mode.\
Jest setup is located `jest/setup.js`. it's possible to modify jest
configuration from package.json or dedicated jest configuration file.
You put mocks into the `__mock__` directory.

### `yarn lint`
Launches linter

### `yarn prettier`

Launches prettier to format code


## Directory Guide

### `src/common`
All utils, components,configuration, etc
that are common across project and are not dependent on
specific business located here. 

### `src/common/types`
Shared type over the whole project are defined here.

### `src/components`
All components that are related to specific business logic
located here and components categorized by their business.
For example all components which are related to 
character have been located into the character subdirectory.

### `src/navigation`
All screens and utils components of the screen located here.
You can configure your screen in the index.ts file located in the root.

### `src/entities`
All types that are related to remote data
are placed here.

## Theme Guide
you can modify theme variables
from `src/constants/theme.constants` 
I have not added theme config to ReactNavigation but we can add it in the future.





