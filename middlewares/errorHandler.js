const errorHandler = (err, req, res, next) => {
    console.error(err); // Log error for server side monitoring

    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        message: err.message || 'An unknown error occurred',
        errors: err.errors || undefined
    });
};

module.exports = errorHandler;
