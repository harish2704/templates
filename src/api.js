// import 'whatwg-fetch';
import URI from 'urijs';

class Api{

  constructor(){
    this.endPoint = 'http://localhost:3000';
    this.cache = {
      templates: []
    };
  }

  request( path, method = 'GET', data ={}, query = {} ){

    var url = new URI( this.endPoint + path )
    .query( query );

    var opts = {
      method: method,
      headers:{
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    if( method == 'POST' ){
      opts.body = JSON.stringify( data );
    }

    return fetch( url, opts )
    .then( ( res ) => res.json() );
  }

  getTemplates(){
    return this.request( '/templates' )
    .then(( data ) =>{
      this.cache.templates = data;
      return data;
    });
  }

  getTemplate( id ){
    var cached = this.cache.templates.filter((item) => item.id == id )[0];

    if( cached ){ return Promise.resolve( cached ); }
    return this.request( '/templates/' + id );
  }

  saveTemplate( data ){
    return this.request( '/templates', 'POST', data );
  }

}


export default (new Api() );
