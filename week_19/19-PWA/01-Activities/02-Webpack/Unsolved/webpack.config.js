const path = require("path")
const webpack = require("webpack");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
}