# Grunt

Configure Grunt to let it build our project and places everything in the dist folder. Grunt has to take care of putting all the JavaScript inside one file, uglify it and notify the user when it's ready. There should also be a way to watch for changes in a JavaScript file and trigger the build task when a change has been detected.

## Setup
[Grunt Getting started](https://gruntjs.com/getting-started)

## Configure Grunt
1. Create a Gruntfile.js file
2. Require the necessary dependencies
  * grunt-contrib-clean
  * grunt-contrib-concat
  * grunt-contrib-uglify
  * grunt-contrib-watch
  * gulp-notify
3. Provide the Grunt wrapper function
4. Read the package.json file into pkg

## Configure plugins
### concat
1. Concat all JavaScript files under src and place them in the dist folder
### uglify
1. Uglify the JavaScript file in the dist folder
2. Include a banner on top of the file including the project name and build date
### clean
#### build
1. Clean the dist folder
#### concat
1. Remove the unuglyfied JavaScript file
### watch
1. Watch js files under src directory 
2. Run build task if changes occur
### notify
#### build
1. Show Build is ready message
## Tasks
### scripts
1. Run concat
2. Run uglify
### build
1. Run clean:build
2. Run scripts
3. Run clean:concat
4. Run notify:build
### default
1. Start the build and watch task