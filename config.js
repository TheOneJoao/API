const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
    server: {
        port: parseInt(process.env.SERVER_PORT) || 62126
    },
    database: {
        connectionLimit : 99,
        host: '51.68.122.118',
        port: parseInt(process.env.DEV_DB_PORT) || 2126,
        user: process.env.DEV_DB_USER_API || 'api',
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABASE || 'fits',
        debug: false
    }
};

const test = {
    server: {
        port: 62126
    },
    database: {
        connectionLimit : 99,
        host: process.env.TEST_DB_HOST || 'localhost',
        port: process.env.TEST_DB_PORT || 2126,
        user: process.env.TEST_DB_USER_API || 'api',
        password: process.env.TEST_DB_PASSWORD || 'Joidk2126',
        database: process.env.TEST_DB_DATABASE || 'fits',
        debug: false
    }
};

const config = {
    dev,
    test
};

module.exports = config[env]; //config[env];