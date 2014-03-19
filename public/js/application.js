function deleteReq( url, redirect ){
    var redirectUrl = redirect || window.location.pathname.toString();
    var data = {
        _method: 'delete'
    };
    $.ajax({
        headers: {
            Accept : "application/json"
        },
        url: url,
        type: "POST",
        data: data ,
        success: function( data ){
            window.location.pathname = redirectUrl;
        }
    });
    return false;
}

function confirmAndDelete( message, url, redirect ){
    var confirmed = confirm( message );
    if ( confirmed ){
        deleteReq( url, redirect );
    }
    return false;
}
