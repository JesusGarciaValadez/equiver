//  @codekit-prepend "plugins.js";
/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
console.log( 'hi' );
( function ( $, window, document, undefined ) {
    //  Revisa la disponibilidad de localStorage
    var storage, deviceWidth, isPortable, typeOfDevice, minDeviceWidth  = 320, maxDeviceWidth = 568, timeLapseOfCarrousel    = 6000;
    if( 'localStorage' in window && window.localStorage !== null ) {
        storage = localStorage;
    } else {

        try {

            if ( localStorage.getItem ) {

                storage = localStorage;
            }
        } catch( e ) {

            storage = {};
        }
    }

    //  When DOM is loaded
    $( function ( ) {

    } );

    //  When page is finished loaded
    $( 'document' ).ready( function ( e ) {
        
        Equiver.inicializeCarrousel( '.scrollable', {
            speed: 300,
            circular: false,
            keyboard: false,
            items: '.items',
            next: '.next',
            prev: '.prev'
        }, {
            activeClass: "active",
            navi: ".navigator",
            naviItem: "a",
            indexed: false
        }, {
            steps: 1,
            interval: 10000,
            autoplay: false,
            autopause: false
        } );

        var navigatorLinksLength    = $( '.navigator a' ).length;
        
    } );
} ) ( jQuery, window, document );