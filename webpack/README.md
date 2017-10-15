# Webpack

An existing Angular application needs some Webpack magic to get it up and running. Configure Webpack so it loads in the index.ts and styles.css as entries and outputs them as bundle.js in the dist folder. Specify the required loaders and plugins.

## Setup
[Webpack installation](https://webpack.js.org/guides/installation/)

## Configure Webpack
### Entry path
1. Define the entry path to load in index.ts and styles.css
### Output
1. Bundle everything together in a bundle.js file located in the dist folder
### Resolve
1. Let Webpack know it has to resolve both TypeScript and JavaScript files
### Loaders
1. Enforce the tslint-loader to run before other loaders
    * Only for TypeScript files
    * Exclude node_modules
2. Use both the awesome-typescript-loader and angular2-template-loader to handle TypeScript files
3. Configure the css-loader and style-loader for ccs files
4. The raw-loader should load in .html files only, excluding the index.html file
### Plugins
1. Generate the HTML file by using the HtmlWebpackPlugin
2. Extraxt all the css files to styles.css with the ExtractTextPlugin
    * Define the plugin under plugins
    * Reconfigure the css-loader and style-loader with the ExtractTextPlugin
3. Angular needs the ContextReplacementPlugin which we configure as the following:
```javascript
new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)((esm(\\|\/)src|src)(\\|\/)linker|@angular)/,
    path.resolve(__dirname, './src')
)
```
### Sourcemap
1. For debugging purposes, put the devtool to source-map so sourcemaps can be generated