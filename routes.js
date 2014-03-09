var templates = require('./controllers/templates');

module.exports = function( app ){
    app.get('/', function( req, res ){
        return res.redirect('/templates');
    });

    var templatesRes = app.resource('templates', templates );

}
