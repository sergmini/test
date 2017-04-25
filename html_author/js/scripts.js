$(document).ready(function(){ 
	

	$('.imgBox img').each(function(i, elem) {
		var img = $(elem);
		var div = $(this).closest('.imgBox').css({
		background: 'url(' + img.attr('src') + ') no-repeat 50% 0'
		}).addClass('active');
	});

	$('.Slider').slick({
		dots: false,
		speed: 500,
		autoplay : 5000,
		draggable: false
	});

	$('.tariff_one .btn_grey').hover(
		function() {
			$(this).closest('.tariff_one').addClass('active');
		}, function() {
			$(this).closest('.tariff_one').removeClass('active');
		}
	);

	$('.open_menu').on( 'click', function() {
		$('#header nav').addClass('active');
		$('.clouse_menu').on( 'click', function() {
			$('#header nav').removeClass('active');
			return false;
		});
		return false;
	});
	

	$('.link_scroll').on( 'click', function() {
		var src = $(this).attr('href'),
			postion = $('#' + src).offset().top;
		if (document.getElementById(src)) {
			$('body,html').animate({
				scrollTop: postion - 99
			}, 400);
			 $('#header nav').removeClass('active');
		}
		return false;
	});

	$(".team_one .img_box a").fancybox();

	$("#form_validation").validate({
		rules:{
			name:{
				required: true,
			},
			email:{
				required: true,
			},
			comment:{
				required: true,
			}
		},
		messages:{
			name:{
				required: "Не заполненное поле",
			},
			email:{
				required: "Не заполненное поле",
			},
			comment:{
				required: "Не заполненное поле",
			}
		}
	});

});