var Template = require('../models/Template'),
    _ = require('underscore'),
    paginator = require('generic-paginate')( {defaults:{ size: 5 }});

exports.index = function(req, res ) {

    Template.count( {}, function( err, count ){
        var paginationParams = {};
        paginationParams.count = count;
        paginationParams.page = req.query.page;

        var pagination = paginator.paginate( paginationParams );

        return Template.find({}).skip(pagination.start-1).limit( paginator.defaults.size).exec(function( err, templates ){
            console.log( err, templates );
            return res.render('templates/index', { templates: templates, pagination: pagination });
        });
    });
};

exports.load = function( id, req, res, next ){
    Template.findById(id, function( err, user ){
        return next( err, user );
    });
};

exports.create = function( req, res ){

    var userData = req.body;

    var user = new Template( userData );
    return user.save( function( err, template ){
        if( err ){
            return res.send( err );
        }
         return res.render('debug', {template: template});
    });
};
exports.show = function( req, res ){
    var id = req.params.user;

    return Template.findById( id , function( err, user ){
        return res.render('templates/show', {user: user });
    });
};

exports.destroy = function( req, res ){
    var id = req.params.user;

    return Template.destroyById( id , function( err  ){
        return res.render( 'templates/destroy', { _code: !err } );
    });
};

exports.profile = function( req, res ){
    res.render('templates/profile', { user: req.user, title: 'test', _code: ( req.user !== null ) } );
};

exports.new = function( req, res ){
    res.render('templates/new');
};

exports.edit = function( req, res ){
    var id = req.params.user;
    return Template.findById( id , function( err, user ){
        return res.render('templates/edit', {user: user });
    });
};

exports.update = function( req, res ){
    var id = req.params.user;
    var data = _.pick( req.body, 'name', 'email', 'password' );
    return Template.findById( id , function( err, user ){
        user = _.extend( user, data );
        return user.save( function( err, template ){
            if ( err ){
                return res.send(503);
            }
            return res.render('debug', {template: template });
            
        });

    });
};
