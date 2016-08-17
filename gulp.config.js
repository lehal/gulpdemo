module.exports = function () {
    var client = './src/client/';
    var config = {
        temp: './.tmp/',
        
        /**
         * Files path
         */
        // all js in default
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        less:  client + 'styles/styles.less'
    };
    return config;
};