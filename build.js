const webpack = require('webpack');
const config = require('./webpack/config.js');

+(function () {
    webpack(config, function (err, stats) {
        if (stats && stats.hasErrors()) {
            var info = stats.toJson()
            console.error('<build error>:', stats.errors)
        }
        if (!!err) {
            console.error('<build error>:', err.message)
        }
    });
})();
