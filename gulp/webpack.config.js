var config = require('./config');
var glob = require('glob');
var path = require('path');
var webpack = require('webpack');

var fileNames = [];
var filePaths = glob.sync(config.scripts.apps.baseDir + '/*.jsx');

var commonPaths = [
    path.resolve(__dirname, '../app/js/vendor/_base.js')
];
  
var entries = { common: commonPaths };

filePaths.forEach(function(filePath) {
    var fileName = /\/([a-z-]+).jsx$/g.exec(filePath)[1];
    var finalFilePath = path.resolve(__dirname, '.' + filePath);

    fileNames.push(fileName);
    entries[fileName] = finalFilePath;
    
});

module.exports = {

    debug: true,
    entry: entries,

    output: {
        path: '../dist/js/',
        publicPath: '/js/',
        fileName: '[name].bundle.js'
    }

}