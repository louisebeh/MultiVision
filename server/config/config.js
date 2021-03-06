var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db:'mongodb://localhost/multivision',
        port: process.env.PORT || 3030

    },
    production: {
        rootPath : rootPath,
        db: 'mongodb://lbeh:multivision@ds019028.mlab.com:19028/multivision1985',
        port: process.env.PORT || 80
    },
}