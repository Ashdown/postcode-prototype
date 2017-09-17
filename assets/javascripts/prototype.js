'use strict';

(function($) {

    $.ajax({
        url: "/assets/postcodes-by-ward.json"
    }).done(function(body) {
        console.log('done')
        console.log('body', body)
    })

})(jQuery)