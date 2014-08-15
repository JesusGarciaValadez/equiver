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

        window.navigator.userAgent = userAgent    = ( window.navigator.userAgent );
        //( deviceWidth >= minDeviceWidth && deviceWidth <= maxDeviceWidth ) ? isPortable  = true : isPortable  = false;
        ( userAgent.indexOf( 'iPhone ' ) || userAgent.indexOf( 'Android' ) ) ? isPortable  = true : isPortable  = false;

        window.typeOfDevice = typeOfDevice  = ( isPortable ) ? "mobile" : "desktop";

        window.isPortable   = isPortable;

        if ( isPortable ) { //  Si es un móvil...

            //  Validación del formulario de contacto
            if ( $( 'form[name="contact-form"]' ).exists() ) {
                $( 'input[name="submit-button"]' ).on( 'click', function ( e ) {
                    e.preventDefault();
                    e.stopPropagation();

                    var contact         = {};
                    contact.nombre      = $.trim( $( 'input[name="first-name"]' ).val() );
                    contact.apellido    = $.trim( $( 'input[name="last-name"]' ).val() );
                    contact.correo      = $.trim( $( 'input[name="email"]' ).val() );
                    contact.telefono    = $.trim( $( 'input[name="telephone"]' ).val() );
                    contact.mensaje     = $.trim( $( 'textarea[name="message"]' ).val() );

                    Equiver.validateContactForm( contact );
                } );
            }
        } //  Si es un móvil...
    } );

    //  When page is finished loaded
    $( 'document' ).ready( function ( e ) {

        // Asignación de tag de destino para realizar un scroll a la sección 
        // correspondiente cuando se haga click en el menu de navegación
        if ( $( '.sections-menu' ).exists() ) {
            var domDestiny  = "";
            $( '.sections-menu li a' ).map( function ( index, domElement ) {
                
                $( domElement ).on( 'click', function ( e ) {
                    e.stopPropagation();
                    e.preventDefault();

                    domDestiny  = $( domElement ).data( 'link' );
                    Equiver.smoothScroll ( domDestiny, 500 );
                } );
            } );
        }

        // Inicialización de carrusel de imágenes
        if ( $( '.scrollable' ).exists() ) {
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
        }
    } );
} ) ( jQuery, window, document );