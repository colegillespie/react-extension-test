# react-extension-test

used to test react extension for issue react issue [#17997](https://github.com/facebook/react/issues/17997)

## setup

1. install this apps dependencies and launch local server
```
npm i
npm start
```

2. clone react and run dev tools in separate shell
```
git clone git@github.com:facebook/react.git
cd react
yarn
yarn build-for-devtools
cd packages/react-devtools-extensions
yarn build:firefox && yarn test:firefox --url=localhost:8000
```