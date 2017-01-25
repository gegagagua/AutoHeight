(function( $ ){

	'use strict';

	$.fn.sameHeight = function() {

		var elements 	= this,
			sameHeight 	= 0;

		elements.each(function(index, el) {
			
			var elHeight = $(el).outerHeight();

			if ( elHeight > sameHeight ) {

				sameHeight = elHeight;

			};

		});

		elements.css('min-height', sameHeight);

        return this;

	}

}( jQuery ));