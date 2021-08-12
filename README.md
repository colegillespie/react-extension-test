# react-extension-test

used to test react extension for issue react issue [#17997](https://github.com/facebook/react/issues/17997)

## setup

1. install this apps dependencies and launch local server
```
npm i
npm start
```

2. in separate shell, clone react and build for dev tools then run dev tools for extentions ( more details found [here](https://github.com/facebook/react/blob/main/packages/react-devtools/CONTRIBUTING.md) )
```
git clone git@github.com:facebook/react.git
cd react
yarn
yarn build-for-devtools
cd packages/react-devtools-extensions
yarn build:firefox && yarn test:firefox --url=localhost:8000
```