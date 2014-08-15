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
            //Equiver.obtainActualDocument();
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
        _validateMail:          function ( mail ) {
            return ( /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test( mail ) ) ? true : false;
        },
        _validateNumber:        function ( numberToCheck ) {
            return /^\d+[^a-zA-Z]+$/.test( parseInt( numberToCheck ) );
        },
        _validateRange:         function ( rangeTo, rangeFrom, valueToCheck ) {
            return ( rangeTo >= valueToCheck && rangeFrom <= valueToCheck ) ? true : false;
        },
        _validateMinLength:     function ( minLength, valueToCheck ) {
            return ( minLength < valueToCheck ) ? true : false;
        },
        _validateMaxLength:     function ( maxLength, valueToCheck ) {
            return ( valueToCheck <= maxLength ) ? true : false;
        },
        _validateDate:          function ( dateToCheck ) {
            return ( !/Invalid|NaN/.test(new Date(dateToCheck).toUTCString() ) ) ? true : false;
        },
        /**
         *
         *  @function:  !anchorMenu
         *  @description:   Anchor the menu
         *  @params jQuery selectorToApply.- A jQuery Selector
         *  @params Object toFix.- An object with css properties to apply to the
         *                         jQuery selector
         *  @params Object toDeFix.- An object with css properties to apply to
         *                         the jQuery selector
         *  @author: @_Chucho_
         *
         */
        //  !Ancla el menú cuando a una altura determinada mediante css
        anchorMenu:             function ( selectorToApply, offsetTop, cssToFix, cssToDeFix ) {
            Equiver.tool = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var _selector       = ( typeof( selectorToApply ) === "undefined" ) ? "*" : selectorToApply;
            _selector       = ( typeof( _selector ) === "object" ) ? _selector : $( _selector );
            var _offsetTop      = ( offsetTop === "" ) ? 0 : offsetTop;
            _offsetTop      = ( typeof( _offsetTop ) === "string" ) ? parseInt( _offsetTop ) : ( typeof( _offsetTop ) === "number" ) ? _offsetTop : parseInt( _offsetTop );
            var _cssToFix     = ( typeof( cssToFix ) === "object" ) ? cssToFix : {};
            var _cssToDeFix   = ( typeof( cssToDeFix ) === "object" ) ? cssToDeFix : {};
            if ( Equiver.tool >= _offsetTop ) {
                _selector.css( _cssToFix );
            } else {
                _selector.css( _cssToDeFix );
            }
        },
        /**
         *
         *  @function:  doOverlay
         *  @description:  Make and overlay effect
         *  @params jQuery selector.- A jQuery Selector
         *  @params Object options.- A JSON object with the options to make a
         *                           target element a jqdock Element
         *  @author: @_Chucho_
         *  @see:   http://jquerytools.org
         *
         */
        //  !Hace un efecto de overlay sobre un elemento determinado
        doOverlay:              function ( selector, options ) {
            var _selector   = ( typeof( selector )  === "string" ) ? $( selector ) : ( ( typeof( selector ) === "object" )? selector : $( '*' ) );
            var _options    = ( typeof( options )   === "object" ) ? options : {};

            _selector.overlay( _options );
        },
        //  !Abre un cuadro de diálogo con un mensaje
        openAlert:              function ( title, markupMessage ) {
            var _title      = ( title === "" || title === undefined ) ? "Error" : title;
            var _message    = ( markupMessage === "" || markupMessage === undefined ) ? "<p>Hubo un error inesperado.</p>" : markupMessage;

            var alertView   = Backbone.View.extend( {
                tagName:   'p',
                events:    {
                    'click input[name="submit-button"]': this.showAlert
                },
                showAlert:     function () { console.log( 'hi' ); }
            } );
            /*$( '.alert h4' ).text( '' );
            $( '.alert p' ).remove( );
            $( '.alert form' ).remove( );
            $( '.alert table' ).remove( );
            $( '.alert div' ).remove( );
            $( '.alert button' ).remove( );

            if ( $( '.alert h2' ).exists() ) {

                $( '.alert h2' ).text( _title );
            } else {

                $( '.alert' ).append( '<h2>' + _title + '</h2>' );
            }
            $( '.alert' ).append( _message );
            //Equiver.overlay.load();
            //$( '.alert_trigger' ).click( );
            $( '.alert' ).centerHeight( );
            $( '.alert' ).centerWidth( );
            $( '.alert_background' ).fadeIn( 50, function (  ) {

                $( '.alert' ).fadeIn( 100 );
            } );*/
        },
        /**
         *
         *  @function:  !closeAlert
         *  @description:   Close an alert box with a message
         *  @see:   http://bassistance.de/jquery-plugins/jquery-plugin-validation/ ||
         *          http://docs.jquery.com/Plugins/Validation
         *  @author: @_Chucho_
         *
         */
        //  !Cierra un cuadro de diálogo con un mensaje
        closeAlert:             function ( ) {

            if ( typeof( Equiver.closer ) !== 'undefined' ){
                Equiver.overlay.close();
            } else {
                $( '.alert' ).fadeOut( 150, function () {
                    $( '.alert h4' ).text( '' );
                    $( '.alert p' ).remove( );
                    $( '.alert form' ).remove( );
                    $( '.alert table' ).remove( );
                    $( '.alert div' ).remove( );
                    $( '.alert button' ).remove( );

                    $( '.alert_background' ).fadeOut( 'fast' );
                } );
            }
        },
        validateContactForm:   function ( dataPass ) {

            //  Valida el nombre
            if ( !Equiver._validateMinLength( 2, dataPass.nombre.length ) ) {
                Equiver.openAlert( 'Error', '<p>Por favor, escribe tu nombre.</p>' );
                return false;
            }

            //  Valida el apellido
            if ( !Equiver._validateMinLength( 2, dataPass.apellido.length ) ) {
                Equiver.openAlert( 'Error', '<p>Por favor, escribe tu apellido.</p>' );
                return false;
            }

            //  Valida el correo
            if ( !Equiver._validateMinLength( 2, dataPass.correo.length ) ) {
                Equiver.openAlert( 'Error', '<p>Por favor, escribe tu email.</p>' );
                return false;
            }
            if ( !Equiver._validateMail( dataPass.correo ) ) {
                Equiver.openAlert( 'Error', '<p>Por favor, escribe un email válido.</p>' );
                return false;
            }

            //  Valida el teléfono
            if ( !Equiver._validateMinLength( 7, dataPass.telefono.length ) ) {
                Equiver.openAlert( 'Error', '<p>El número no debe tener menos de 8 caracteres.</p>' );
                return false;
            }
            if ( !Equiver._validateMaxLength( 20, dataPass.telefono.length ) ) {
                Equiver.openAlert( 'Error', '<p>El número no debe tener mas de 20 caracteres.</p>' );
                return false;
            }
            if ( !Equiver._validateNumber( dataPass.telefono ) ) {
                Equiver.openAlert( 'Error', '<p>Por favor, escribe sólo números.</p>' );
                return false;
            }

            //  Valida que se escriba un mensaje
            if ( !Equiver._validateMinLength( 8, dataPass.mensaje.length ) ) {
                Equiver.openAlert( 'Error', '<p>Por favor, escribe tu mensaje para nosotros.</p>' );
                return false;
            }
            if ( !Equiver._validateMaxLength( 140, dataPass.mensaje.length ) ) {
                Equiver.openAlert( 'Error', '<p>Tu mensaje debe tener mas de 140 caracteres.</p>' );
                return false;
            }

            $.ajax ( 'Code/snippets/dispatcher.php?action=sendAppointment', {
                beforeSend: function ( ) {
                    $('.error_indicator').remove();
                    if ( $('textarea' ).val() === "" ) {

                        $('textarea' ).val( 'Ninguno' );
                    }
                },
                cache: false,
                complete: function ( ) {},
                contentType: "application/x-www-form-urlencoded",
                converters: {
                    "* text":       window.String,
                    "text html":    true,
                    "text json":    $.parseJSON,
                    "text xml":     $.parseXML
                },
                data: dataPass,
                error:  function () {
                    $( '.alert' ).addClass( 'error_message' );
                    _title      = 'Error';
                    _markup     = '<p>Hubo un error al enviar el formulario. ¿Podrías intentarlo nuevamente?.</p>';
                    Equiver.openAlert( _title, _markup );
                },
                success: function ( responseText ) {
                    //console.log(responseText.success);

                    var _title, _markup;

                    if ( $.parseJSON( responseText ) ) {

                        responseText    = $.parseJSON( responseText );

                        if( responseText && ( responseText.success === 'true' || responseText.success === true ) ) {

                            window.location.href    = 'http://www.giovannibojanini.com/agradecimiento.html';
                        } else {

                            $( '.alert' ).addClass( 'error_message' );
                            _title      = 'Error';
                            _markup     = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                            Equiver.openAlert( _title, _markup );
                        }
                    } else {
                        $( '.alert' ).addClass( 'error_message' );
                        _title      = 'Error';
                        _markup     = '<p>Hubo un error. ¿Podría intentarlo nuevamente?.</p>';
                        Equiver.openAlert( _title, _markup );
                    }
                    //Equiver.smoothScroll( 'body' );
                },
                type: "POST"
            } );
        }
    };

    // Give the init function the Equiver prototype for later instantiation
    Equiver.fn.init.prototype = Equiver.fn;

    Equiver = Equiver.fn;

    // Expose Equiver to the global object
    window.Equiver  = Equiver;
} ) ( jQuery, window, document );