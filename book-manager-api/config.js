/**
 * Application configuration object
 */
exports.app = {
    PORT: 9000,
    MONGODB_URI: 'mongodb://' + process.env.MONGO_HOST + ':27017/bookdata',
    logErrors: true
};
