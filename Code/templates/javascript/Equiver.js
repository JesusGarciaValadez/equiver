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

    var _Equiver    = window._Equiver,
    // Use the correct document accordingly with window argument (sandbox)
    document    = window.document,
    location    = window.location,
    navigator   = window.navigator,
    // Map over Equiver in case of overwrite
    _Equiver    = window.Equiver;
    // Define a local copy of Equiver
    Equiver = function() {
        if ( !( this instanceof Equiver ) ) {
            // The Equiver object is actually just the init constructor 'enhanced'
            return new Equiver.fn.init();
        }
        return Equiver.fn.init();
    };

    Equiver.overlay;
    Equiver.closer;
    Equiver.radio;

    //  Object prototyping
    Equiver.fn = Equiver.prototype = {
        /**
         *
         *  @function:  !constructor
         *  @description:   Constructor method
         *  @author: @_Chucho_
         *
         */
        //  Método constructor
        constructor:    Equiver,
        /**
         *
         *  @function:  !init
         *  @description:   Inicializer method
         *  @author: @_Chucho_
         *
         */
        //  !Método inicializador
        init:                   function ( ) {
            Equiver.obtainActualDocument();
        },
        /**
         *
         *  @function:  !smoothScroll
         *  @description:   Do smooth scroll for the anchors in menu
         *  @params jQuery selector.- A jQuery Selector
         *  @params Number durationInSec.- A number to indicate the duration of
         *                                 the animation
         *  @see:   http://flesler.blogspot.com/2007/10/jqueryscrollto.html
         *  @author: @_Chucho_
         *
         */
        //  !Realiza el efecto para dar la impresión de scroll "suavizado"
        smoothScroll:           function ( selector, durationInSec ) {

            var _selector       = ( typeof( selector ) === "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) === "object" ) ? _selector : ( typeof( _selector ) === "number" ) ? _selector : $( _selector );

            var _durationInSec  = ( durationInSec === "" ) ? 1000 : durationInSec;
            _durationInSec  = ( typeof( _durationInSec ) === "string" ) ? parseInt( _durationInSec ) : _durationInSec;
            _durationInSec  = ( typeof( _durationInSec ) !== "number" ) ? parseInt( _durationInSec ) : _durationInSec;
            var _scrollYOffset;

            if ( typeof( _selector ) === "object" ) {

                _scrollYOffset  = _selector.offset().top;
                _scrollYOffset  = Math.ceil ( Number( _scrollYOffset ) );
            } else if ( typeof( _selector ) === "number" ) {

                _scrollYOffset  = _selector;
            }

            $.scrollTo( _scrollYOffset, {
                duration: _durationInSec,
                axis: 'y'
            } );
        },
        /**
         *
         *  @function:  !managerTimelineFill
         *  @description:   Carrousel inicializer
         *  @params jQuery slider.- A jQuery Selector
         *  @params String progressBar.- A class to add to target
         *  @params Object ui.- An object with css properties to apply to the jQuery selector
         *  @params Number leftOffset.- A number to indicate the duration of the animation
         *  @params Number rightOffset.- A number to indicate the duration of the animation
         *  @see:   http://jquerytools.org
         *  @author: @_Chucho_
         *
         */
        //  !Inicializador de un carrusel jQuery Tools
        inicializeCarrousel:    function ( selector, optionsScrollable, optionsNavigator, optionsAutoscroll ) {

            var _selector;
            _selector       = ( typeof( selector )  === "undefined" ) ? "*" : selector;
            _selector       = ( typeof( _selector ) === "object" )    ? _selector : $( _selector );

            if( !optionsScrollable || optionsScrollable === {} ) {
                optionsScrollable = {};
            }
            if( !optionsNavigator || optionsNavigator === {} ) {
                optionsNavigator = {};
            }
            if( !optionsAutoscroll || optionsAutoscroll === {} ) {
                optionsAutoscroll = {};
            }

            _selector.scrollable( optionsScrollable ).navigator( optionsNavigator ).autoscroll( optionsAutoscroll );
        },
    };

    // Give the init function the Equiver prototype for later instantiation
    Equiver.fn.init.prototype = Equiver.fn;

    Equiver = Equiver.fn;

    // Expose Equiver to the global object

    window.Equiver  = Equiver;
} ) ( jQuery, window, document );