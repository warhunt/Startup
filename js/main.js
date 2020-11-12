$(function () {
	$('.menu-btn').click(function () {
		$('.menu-btn').toggleClass('menu-btn-activ');
		$('.menu').toggleClass('menu-activ');
	});

	$('.about__slick').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
			}
		]
	});

	$('.partners__comments').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true
	});

	$('.all').click(function () {
		$('.works__item').css("display", "flex");
		$('.menu__item-works').removeClass('text-activ');
		$(this).addClass('text-activ');
	});

	$('.branding').click(function () {
		$('.works__item').css("display", "none");
		$('.works__item-branding').css("display", "flex");
		$('.menu__item-works').removeClass('text-activ');
		$(this).addClass('text-activ');
	});

	$('.design').click(function () {
		$('.works__item').css("display", "none");
		$('.works__item-design').css("display", "flex");
		$('.menu__item-works').removeClass('text-activ');
		$(this).addClass('text-activ');
	});

	$('.development').click(function () {
		$('.works__item').css("display", "none");
		$('.works__item-development').css("display", "flex");
		$('.menu__item-works').removeClass('text-activ');
		$(this).addClass('text-activ');
	});

	$('.strategy').click(function () {
		$('.works__item').css("display", "none");
		$('.works__item-strategy').css("display", "flex");
		$('.menu__item-works').removeClass('text-activ');
		$(this).addClass('text-activ');
	});

	$("#Home_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".main").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});

	$("#Services_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".services").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});

	$("#About_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".about").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});

	$("#Works_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".works").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});
	$("#Blog_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".blog").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});
	$("#Clients_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".partners").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});
	$("#Contact_link").click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".getintuch").offset().top  // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});




});


