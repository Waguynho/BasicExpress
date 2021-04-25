var baseRoute = require('./baseRoute.js');

var postMiddleware = function (req, res, next) {
    console.log('post MiddleWare')
    next()
}

baseRoute.get('/posts', postMiddleware, function (req, res) {
    res.send('All posts!');
});

module.exports = baseRoute
