# Gulp

Configure Gulp to let it build our project and places everything in the dist folder. Gulp has to take care of putting all the JavaScript inside one file, uglify it and notify the user when it's ready. There should also be a way to watch for changes in a JavaScript file and trigger the build task when a change has been detected.

## Setup
[Gulp Getting started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Configure Gulp
1. Create a gulpfile.js file
2. Require the necessary dependencies
  * gulp
  * gulp-uglify
  * gulp-concat
  * gulp-notify
  * gulp-minify-html
  * del
  * run-sequence
  * browser-sync

## Tasks
### scripts
1. Start from all js files under the src directory
2. Concat them into app.js
3. Put the result in the dist directory
4. Use the uglify plugin
5. Put the result again in the dist directory
6. Notify that the task is completed
### minify-html
1. Start from all html files under the src directory
2. Apply the minify-html plugin
3. Put the result in the dist directory
### clean
1. Delete the dist folder
### watch
1. Watch html files under src and run minify-html task if changes occur
2. Watch js files under src and run scripts task if changes occur
3. Before running watch, run the scripts and minify-html tasks
### default
1. Start the run and watch task in sequence