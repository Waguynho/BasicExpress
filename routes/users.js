var baseRoute = require('./baseRoute.js');

var userMiddleware = function (req, res, next) {
    console.log('USER LOGGED');
    next();
}

baseRoute.get('/users', userMiddleware,  function (req, res) {
    res.send('All users');
});

baseRoute.get('/users/:userId', function (req, res) {
    console.log('User ID: '+req.params.userId)
    res.send('User ID: '+req.params.userId);
});

baseRoute.get('/users/:userId/posts/:postId', function (req, res) {
    console.log('userId: '+req.params.userId);
    console.log('postId: '+req.params.postId);
    res.send(req.params);
});

module.exports = baseRoute;