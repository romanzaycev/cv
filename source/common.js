(function ($) {
    "use strict";

    var gallery = {
        init: function () {
            $('.js-gallery-item')
                .each(function () {
                    var $self = $(this);

                    $self
                        .find('.js-gallery-item__toggle')
                        .on('click', function (e) {
                            e.preventDefault();

                            if(!this.hasOwnProperty('isOriginalShowed')){
                                this.isOriginalShowed = true;
                            }

                            $self
                                .find('.gallery-item__edited')
                                .stop()
                                .fadeToggle();

                            $(this)
                                .text(this.isOriginalShowed === true ? 'Show edited' : 'Show original');

                            this.isOriginalShowed = !this.isOriginalShowed;
                        });
                });
        }
    };
    
    $(function () {
        gallery.init();
    });
})(jQuery);
