const validate = (req, res, next) => {
    if (
        req.protocol == "http"
    ) {
        return next();
    } else {
        res
        .status(400)
        .send(`please start url with http:// or https://`)
    }
};

module.exports = {validate};