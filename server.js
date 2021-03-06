function startServer() {
    var express        = require('express'),
        http           = require('http'),
        path           = require('path'),
        app            = express(),
        methodOverride = require('method-override'),
        request        = require('request'),
        _              = require('lodash');

    //Turns an object into a query String
    // { 'foo': 'bar', 'message': 'hi' } =>  ?foo=bar&message=hi
    function querify (queryParamsObject) {
        return '?' + _.map(queryParamsObject || {}, function (val, key) {
            return key + '=' + val;
        }).join('&');
    }

    // adds a new rule to proxy a localUrl -> webUrl
    // i.e. proxify ('/my/server/google', 'http://google.com/')
    function proxify(localUrl, webUrl){
        app.get(localUrl, function(req, res) {
            var url = [ webUrl, querify(req.query) ].join("");
            req.pipe(request(url)).pipe(res);
        });
    }

    // add your proxies here.
    //
    // examples:
    // proxify('/yummly/recipes', 'http://api.yummly.com/v1/api/recipes');
    // proxify('/brewery/styles', 'https://api.brewerydb.com/v2/styles');
    //proxify('/walmart/search', 'http://api.walmartlabs.com/v1/search');

    // all environments
    // set port
    app.set('port', process.argv[3] || process.env.PORT || 3000);

    app.use(methodOverride());
    app.use(express.static(path.join(__dirname, 'dist')));

    //Create the server
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
}

module.exports.startServer = startServer;
