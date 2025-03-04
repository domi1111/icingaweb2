/*! Icinga Web 2 | (c) 2015 Icinga Development Team | GPLv2+ */

(function(Icinga, $) {

    'use strict';

    Icinga.Behaviors = Icinga.Behaviors || {};

    var ApplicationState = function (icinga) {
        Icinga.EventListener.call(this, icinga);
        this.on('rendered', '#layout', this.onRendered, this);
        this.icinga = icinga;
    };

    ApplicationState.prototype = new Icinga.EventListener();

    ApplicationState.prototype.onRendered = function(e) {
        if (e.currentTarget !== e.target) {
            // Nested containers are ignored
            return;
        }

        if (! $('#application-state').length
            && ! $('#login').length
            && ! $('#guest-error').length
            && ! $('#setup').length
        ) {
            var _this = e.data.self;

            $('#layout').append(
                '<div id="application-state" class="container" style="display: none" data-icinga-url="'
                + _this.icinga.loader.baseUrl
                + '/application-state" data-icinga-refresh="60"></div>'
            );
        }
    };

    Icinga.Behaviors.ApplicationState = ApplicationState;

})(Icinga, jQuery);
