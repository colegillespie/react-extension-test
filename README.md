# react-extension-test

used to test react extension for issue react issue [#17997](https://github.com/facebook/react/issues/17997)

## install build and start test server

```
npm i
npm start
```

## setup react dev tool extension

```
git clone git@github.com:facebook/react.git
cd react
yarn
yarn build-for-devtools
cd packages/react-devtools-extensions
yarn build:firefox && yarn test:firefox --url=localhost:8000
```

more details for extension development found [here](https://github.com/facebook/react/blob/main/packages/react-devtools/CONTRIBUTING.md)
