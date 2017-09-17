'use strict';

(function($) {

    function getPostcodeData(callback) {
        $.ajax({
            url: "/assets/postcodes-by-ward.json"
        }).done(function(body) {
            callback(body);
        })
    }

    function standardisePostcode(postcode) {
        return postcode.replace(" ", "").toUpperCase();
    }


    $('.postcode-form').on('submit', function(event){

        event.preventDefault();

        var myPostcode = standardisePostcode($('.postcode-form .postcode-input').val());

        getPostcodeData(function(postcodes){
            var ward = false;

            $.each(postcodes, function(key, postcodesForWard) {
                $.each(postcodesForWard, function(index, postcode) {
                    if(postcode === myPostcode) {
                        ward = key;
                    }
                });
            });

            console.log('ward', ward);
        });

    });

})(jQuery)