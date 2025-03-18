const logger = (req, res, next) => {    
    console.log('Logging...');
    next();
}
exports.logger = logger;