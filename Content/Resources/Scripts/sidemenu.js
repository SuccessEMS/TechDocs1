$(window).load(function () {
		setTimeout(function () {
				$('.sub-menu ul').hide();
				$('a.selected').parent().parent().show();
				$("li.has-children > a").each(function (index) {
						if($(this).hasClass("selected")){
							$(this).after('<span class="toggleexp" ><svg class="arrow-plus"></svg></span>');
						} else {
							$(this).after('<span class="toggleexp" ><svg class="arrow-plus"></svg></span>');
						}
							
							
					});
				
			
				var i = 0;
				$(document).on('click', '.toggleexp', function () {
						$(this).parent().find('ul.sub-menu').first().slideToggle();
						if ( $(this).html() == '<svg class="arrow-plus"></svg>') {
							$(this).html('<svg class="arrow-plus"></svg>');
						} else {
							$(this).html('<svg class="arrow-plus"></svg>');
						}
					});
			}, 1000);
	});