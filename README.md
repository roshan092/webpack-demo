# webpack-demo
Demo project for learning webpack

##Introduction to webpack
###Setup:
1. Navigate to the project and initialize npm project.<br/>
`npm init -y`
2. Install webpack to the project <br />
`npm install webpack webpack-cli --save-dev`
3. Create dist/index.html and add reference to built js file
4. Create a webpack.config.json file, define entry and output

##Build from js file
1. `npm install --save-dev ora`  - used to display the spinner.
2. `npm install --save-dev rimraf` - used to delete the old files.

##Create different build for different environments.
1. `npm install --save-dev webpack-merge` - used to merge webpack conf for 
different environment.
2. Create three webpack conf files, testing, production, development.
3. Create a config folder and add files per environment.
4. Add required environment variables to respective files.
5. Use process.env.BUILD_ENV to control which env file is used.
6. BUILD_ENV is an environment variable set on the machine where it is built.

##Serve static files over http
1. `npm install http-server` - Installs the http server.
2. Run by stating the http-server to server from the dist directory.
