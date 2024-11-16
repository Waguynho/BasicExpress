var baseRoute = require('./baseRoute.js');
var path = require('path');
var appDir = path.dirname(require.main.filename);

var filesMiddleware = function (req, res, next) {
    console.log('FILES LOGGED')
    next()
}

baseRoute.get('/files', filesMiddleware, function (req, res) {
    res.redirect('/tutorial.PDF');//
});

baseRoute.get('/files/download', filesMiddleware, function (req, res, next) {
    res.download(appDir+'/files/tutorial.PDF', 'downloaded.pdf', function (err) {
        if (err) {
          console.error(err.message);          
          next(err);
        } else {
          console.log('App directory'+appDir);
          console.log('Current directory'+__dirname);
        }
      })
});

module.exports = baseRoute;