!function($){"use strict";var i={init:function(){$(".js-gallery-item").each(function(){var i=$(this);i.find(".js-gallery-item__toggle").on("click",function(t){t.preventDefault(),this.hasOwnProperty("isOriginalShowed")||(this.isOriginalShowed=!0),i.find(".gallery-item__edited").stop().fadeToggle(),$(this).text(this.isOriginalShowed===!0?"Show edited":"Show original"),this.isOriginalShowed=!this.isOriginalShowed})})}};$(function(){i.init()})}(jQuery);