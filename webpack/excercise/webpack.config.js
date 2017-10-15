const path = require('path');
const webpack = require('webpack');

const source = path.resolve(__dirname, 'src');
const destination = path.resolve(__dirname, 'dist');
const appDirectory = path.resolve(source, 'app');

module.exports = {
    context: source, // Define the starting path
    
    // 1. Define the entry path

    // 2. Define the output path

    // 3. Let Webpack know which files it has to handle

    // 4. Define the necessary loaders

    // 5. Define the necessary plugins

    // 6. Configure sourcemaps

};
