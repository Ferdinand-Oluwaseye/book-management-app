/**
 * Application configuration object
 */
exports.app = {
    PORT: 9000,
   // MONGODB_URI: 'mongodb://' + process.env.MONGO_HOST + '/bookdata',
    MONGODB_URI: process.env.DATABASE,
    logErrors: true
};
