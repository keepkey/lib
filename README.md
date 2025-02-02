# lib

## Dependencies

- [OpenJDK 11](https://openjdk.java.net/install/) - required for [openapi-generator-cli](https://openapi-generator.tech/docs/usage#generate) to generate api clients from OpenAPI specs

## Getting started

```bash
# Install the required dependencies
yarn
```

If you're working in this repo, you're likely also working in [web](https://github.com/shapeshift/web). Run the following command to automatically `yarn link` all the packages in this repo, so they can also be linked in `web`

```bash
➜ yarn link-packages
yarn run v1.22.15
$ node scripts/linkPackages.js link
success Registered "@keepkey/asset-service".
info You can now run `yarn link "@keepkey/asset-service"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/caip".
info You can now run `yarn link "@keepkey/caip"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/chain-adapters".
info You can now run `yarn link "@keepkey/chain-adapters"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/errors".
info You can now run `yarn link "@keepkey/errors"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/investor-foxy".
info You can now run `yarn link "@keepkey/investor-foxy"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/investor-yearn".
info You can now run `yarn link "@keepkey/investor-yearn"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/logger".
info You can now run `yarn link "@keepkey/logger"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/market-service".
info You can now run `yarn link "@keepkey/market-service"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/swapper".
info You can now run `yarn link "@keepkey/swapper"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/types".
info You can now run `yarn link "@keepkey/types"` in the projects where you want to use this package and it will be used instead.
success Registered "@keepkey/unchained-client".
info You can now run `yarn link "@keepkey/unchained-client"` in the projects where you want to use this package and it will be used instead.

✨  Done in 0.47s.
```

Similarly you can unlink packages, which can be useful for debugging failing CI runs

```bash
➜ yarn unlink-packages
yarn run v1.22.15
$ node scripts/linkPackages.js unlink
success Unregistered "@keepkey/asset-service".
info You can now run `yarn unlink "@keepkey/asset-service"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/caip".
info You can now run `yarn unlink "@keepkey/caip"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/chain-adapters".
info You can now run `yarn unlink "@keepkey/chain-adapters"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/errors".
info You can now run `yarn unlink "@keepkey/errors"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/investor-foxy".
info You can now run `yarn unlink "@keepkey/investor-foxy"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/investor-yearn".
info You can now run `yarn unlink "@keepkey/investor-yearn"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/logger".
info You can now run `yarn unlink "@keepkey/logger"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/market-service".
info You can now run `yarn unlink "@keepkey/market-service"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/swapper".
info You can now run `yarn unlink "@keepkey/swapper"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/types".
info You can now run `yarn unlink "@keepkey/types"` in the projects where you no longer want to use this package.
success Unregistered "@keepkey/unchained-client".
info You can now run `yarn unlink "@keepkey/unchained-client"` in the projects where you no longer want to use this package.

✨  Done in 0.37s.
```

## Testing

Bug fixes and features should always come with tests, when applicable. Test files should live next to the file they are testing. Before submitting your changes in a pull request, always run the full test suite.

To run the test suite:

```bash
# build all dependent packages
yarn build

# Runs the full test suite
yarn test

# Runs the full w/ the watch flag and coverage reports
yarn test:dev
```

**Helpful Testing Process**

One technique that can helpful when writing tests, is to reference the coverage report for the file/function/feature you're testing. To do this, run `yarn test:dev` from your terminal. This will generate a coverage report for the project in the `coverage` directory. To view the report, open the file `coverage/lcov-report/index.html`.

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md) document for this repo's specific contributing guidelines.
