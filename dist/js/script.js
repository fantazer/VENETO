$(document).ready(function () {

	// nice select
	$('.select-beauty').niceSelect();
	// nice select === end

//closeModal() - закрыть окна
//initModal('data-name-attr') - Открыть нужное окно

//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	$('.modal-content').click(function (event) {
		event.stopPropagation();
	});

	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflow: 'hidden',
				position: 'fixed',
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%'
			});
		}
		modalState.isModalShow = true;
	};
	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').removeClass('modal__show');
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close').click(function () {
		closeModal();
	});
//modals===end

//mobile menu
//Фиксируем скрол
	$('.head-toggle--open').click(function () {
		$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
	});

	$('.head-toggle').click(function (event) {
		event.stopPropagation();
		$(this).toggleClass('head-toggle--open');
		$('.slide-menu').toggleClass('slide-menu--open');
		$('body').toggleClass('body-fix')
	});

	$('.slide-menu').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
		$('.head-wrap').removeClass('head--up');
		$('.head-toggle').removeClass('head-toggle--open');
		$('.slide-menu').removeClass('slide-menu--open');
		console.log(modalState.isModalShow);
		if (modalState.isModalShow == false) {
			$('body').removeClass('body-fix')
		}
	});
	//mobile menu===end

	// fix top-menu
/*	var shrinkHeader = 250;
	var heightHeader = $('.head-block').height();
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if (scroll >= shrinkHeader) {
			$('body').css('paddingTop', heightHeader);
			$('.header').addClass('shrink');
		} else {
			$('body').css('paddingTop', 0);
			$('.header').removeClass('shrink');
		}
	});*/

	$(window).resize(function () {
		heightHeader = $('.header').height();
	});
	// fix top-menu === end

	// ==== slider ===
	$('.sale-slider,.advant-slider').slick({
		slidesToShow: 1,
		speed: 500,
		dots: false,
		arrows: false,
		//autoplaySpeed: 8000, time between

	});
	$('.news-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		dots: true,
		autoplay:true,
		speed: 1500,
		autoplaySpeed: 3000,
		focusOnSelect: true,
		customPaging : function(slider, i) {
			return '<span class="dot"></span>';
		},
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: "0px",
					slidesToShow: 1
				}
			}
		]
	});
		$('.partner').slick({
		centerMode: true,
		centerPadding: '20px',
		slidesToShow: 5,
		dots: false,
		autoplay:true,
		speed: 1500,
		autoplaySpeed: 3000,
		focusOnSelect: true,
		rows:0,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.kind-slider').slick({
		slidesToShow: 4,
		speed: 500,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
		//autoplaySpeed: 8000, time between

	});

	$('.gallary-slider').slick({
		slidesToShow: 3,
		speed: 500,
		dots: false,
		arrows: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			}
		]
		//autoplaySpeed: 8000, time between

	});
	// ==== slider end ===

	// === custom arrow el ===
	$('.slider-control--right').click(function () {
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function () {
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	// custom arrow el === end
	
	// fancy
	$('.fancybox').fancybox({
		thumbs : {
			autoStart : true
		},
	});
	// fancy === end

	// akkord row toggle
	$('.akkord__el-head').click(function () {
		$(this).toggleClass('akkord__el--active');
		$(this).closest('.akkord__el').find('.akkord__el-content').slideToggle();
	});
	// akkord row toggle === end

	//increment field
	$('.incr__minus').click(function () {
		var countIncr = $(this).closest(".wrap-incr").find(".el-incr:visible").length;
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		if(!$(this).hasClass("incr--one")){ // add class incr--one for 1 always
			if(count < 1){
				count = 0;
			}
		}else{
			if(count < 1){
				$('.incr-btn').removeClass("incr-btn--active");
				$(this).closest(".el-incr").slideUp();
				count = 1;
			}
		}
		$input.html(count);
		if(countIncr<=1){
			$(this).closest(".wrap-incr").addClass("wrap-incr--empty");
		}
	});

	$('.incr__plus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) + 1;
		count = count > 100 ? 100 : count;
		$input.html(count);
	});
	//increment field === end

	// STICK
	var isMobile = function(){
		if($(window).width() > 1025 ){
			$(".toolbar-item--stick").stick_in_parent({
				'offset_top':20
			});
		}

		if($(window).width() < 769 ){
			$(".toolbar-item--stick").trigger("sticky_kit:detach");
		}
	};
	$(window).resize(function(){
		isMobile();

	});
	isMobile();
	// STICK === end

	// scroll to id
	$("a[rel='m_PageScroll2id']").mPageScroll2id({
		offset:10,
		highlightClass:"toolbar-el--active",

	});
	// scroll to id === end


});
