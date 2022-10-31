
class PostController {
    async get(req, res, next) {
        return res.json({ message: "Hello World" });
    }
    create(req, res, next) {
        return res.json({ message: "Hello World" });
    }
    getPagination(req, res, next) {
        return res.json({ message: "Hello World" });
    }
}

module.exports = new PostController();
