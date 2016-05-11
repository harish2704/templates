#
This software is in development !!
#

Templates
=========

A simple templates or code snippets manager written in Node.js, for developers.

* [old demo](http://templates-harish2704.rhcloud.com/)
* [new demo](http://templates2-harish2704.rhcloud.com/)

Features
--------
* Powerful and flexible template engine ([ECT.js](http://ectjs.com)) for rendering code template to code. supports coffeescript syntax.
* Powerful text editor ([ACE Editor](http://ace.c9.io/)). Supports several language syntax, language snippets, themes many more.
* In-build template helpers ('pluralise', 'singularize', 'capitalize', 'small' )

Usage
-----

### Installation

```sh
git clone https://github.com/harish2704/templates.git;
cd templates;
npm Install;
node server.js &;
xdg-open http://localhost:3000;
```

### Usage

#### Create a new snippet template.

* Sample data 

        name :: "Express.js controller Index function"

        settings :: { "model": "string" }

        Source ::
                <% modelClass = @capitalize @model; modelObject = @small @model; modelObjects = @small (@pluralize @model ) %>
                function(req, res ) {

                    <%- modelClass %>.count( {}, function( err, count ){
                        var paginationParams = {};
                        paginationParams.count = count;
                        paginationParams.page = req.query.page;

                        var pagination = paginator.paginate( paginationParams );

                        return <%- modelClass %>.find( { }).slice([pagination.start-1, paginator.defaults.size]).exec(function( err, <%- modelObject %> ){
                            return res.respond('<%- modelObjects %>/index', { <%- modelObjects %>: <%- modelObjects %>, pagination: pagination });
                        });
                    });
                }

#### Generate code from this template.

* Enter value for each settings keys.
* View code in the editor by pressing submit button

#### Syntax

* settings

    Strict json
    ```
    {
        'parameter-name' : 'type'
    }
    ```
    OR
    ```
    {
        'parameter-name' : {
            "type" :"type",
            "optionName" : "optionValue"
        }
    }
    ```

    available types

        'string' => textbox
        'number' => textbox
        'boolean' => checkbox 
        'select' => select 

* Template 

    Refer [ECT.js](http://ectjs.com) template engine.

    built-in filters
    
        'capitalize', 'small', 'singularize', 'pluralize'


