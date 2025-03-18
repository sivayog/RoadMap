const error = (err, req, res, next) => {                
    res.status(500).send(err.message);
}
exports.error = error;