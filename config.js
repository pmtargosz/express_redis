const config = {
    PORT: process.env.PORT || 3000,
    ENV: process.env.NODE_ENV || 'development',
    REDIS_URL: process.env.REDIS_URL
}

module.exports = config;