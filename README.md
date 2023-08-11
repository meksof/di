# WHY ?

Fastest build environment for production.

### Keywords:

`typescript`, `esbuild`, `eslint`


# Installation

1. `npm install` or `yarn install`
2. create a `/dist` folder and add `index.html` file:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TESTing env for production</title>
</head>
<body>
    <h1>TESTing env for production</h1>
    <div id="app"></div>
    <script src="index.js"></script>
</body>
</html>
```
3. install http-server: 
   1. `npm i -D http-server` or
   2. using [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) vscode extension.

# Running

1. `yarn run build`
2. go into ./dist and start serving using your favorite http server.
3. open your browser at http://127.0.0.1:5500/dist/index.html