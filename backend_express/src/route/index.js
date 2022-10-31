const Auth = require('./AuthRoute')
const Post = require('./PostRoute')
function route(app) {
    app.use('/api', Auth)
    app.use('/api/post', Post)
}
module.exports = route;