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
    var storage, deviceWidth, isPortable, typeOfDevice, minDeviceWidth = 320, 
    maxDeviceWidth = 568, timeLapseOfCarrousel = 6000, scrollOffsetOfSlide = 681;
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

        Equiver.init();

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

        //  Ancla el menú si bajamos mas allá de la posición normal del menú
        if ( Equiver.tool > 680 ) {
            Equiver.overflow();
            Equiver.anchorMenu ( $( '.nav' ), 680, "anchored", "unanchored" );
        }
        
        //  Revisa si al recargar la página, el scroll del sitio se encuentra 
        //  mas abajo de lo normal para anclar el menú
        $( window ).on( 'scroll', function ( e ) {
            Equiver.overflow();
            Equiver.anchorMenu ( $( '.nav' ), 680, "anchored", "unanchored" );
        } );

        // Asignación de tag de destino para realizar un scroll a la sección 
        // correspondiente cuando se haga click en el menu de navegación
        if ( $( '.sections-menu' ).exists() ) {

            var domDestiny  = "", sectionMinusBar, navHeight = $( '.nav' ).height();
            if ( $( '.home main' ).exists() ) {
                $( '.home main a' ).first().on( 'click', function ( e ) {
                    e.stopPropagation();
                    e.preventDefault();

                    $( '.sections-menu li' ).eq( 0 ).find( 'a' ).click();
                    /*domDestiny  = $( e.currentTarget ).data( 'link' );
                    domDestiny  = $( domDestiny ).offset().top;
                    Equiver.smoothScroll ( domDestiny, 500 );*/
                } );
            }

            //  Si click en el logo del nav, manda a "home"
            $( 'nav .logo' ).on( 'click', function ( e ) {
                e.stopPropagation();
                e.preventDefault();

                domDestiny  = $( e.currentTarget ).data( 'link' );
                domDestiny  = $( domDestiny ).offset().top;
                Equiver.smoothScroll ( domDestiny, 500 );
            } );

            $( '.sections-menu li a' ).map( function ( index, domElement ) {
                
                $( domElement ).on( 'click', function ( e ) {
                    e.stopPropagation();
                    e.preventDefault();

                    console.log( 'hi' );
                    domDestiny      = $( domElement ).data( 'link' );
                    sectionMinusBar = $( domDestiny ).offset().top - navHeight;
                    domDestiny  = ( index === 0 ) ? scrollOffsetOfSlide : sectionMinusBar;
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

        //  Control de sección de eventos
        if ( $( '.events-indicator-container .event-description' ).exists() ) {

            $( '.events-indicator-container' ).on( 'click', '.event[rel="trigger"]', function ( e ) {
                e.preventDefault();
                e.stopPropagation();


            } );
        }
    } );
} ) ( jQuery, window, document );