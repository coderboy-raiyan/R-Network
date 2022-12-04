function notFound(_req, res, next) {
    const error = new Error('Resource not Found');
    error.status = 400;
    next(error);
}
function globalError(error, _req, res, _next) {
    if (error.status) {
        return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Something went wrong' });
}

module.exports = [notFound, globalError];
