
// Back to top button
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});
$('.back-to-top').click(function () {
	$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
	return false;
});

// Preloader
$(window).on('load', function () {
	if ($('#preloader').length) {
		$('#preloader').delay(1200).fadeOut('slow', function () {
			$(this).remove();
		});
	}
});

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
	y: '-30%',
	opacity: 0,
	duration: 2,
	ease: Power4.easeOut
})
tl.from('.stagger1', {
	opacity: 0,
	y: -50,
	stagger: .3,
	ease: Power4.easeOut,
	duration: 2
}, "-=1.5")
tl.from('.hero-design', {
	opacity: 0, y: 50, ease: Power4.easeOut, duration: 1
}, "-=2")

gsap.from(".square-anim", {
	stagger: .2,
	scale: 0.1,
	duration: 1,
	ease: Back.easeOut.config(1.7)
})

gsap.from(".transition2", {
	scrollTrigger: {
		trigger: '.transition2',
		start: "top bottom"
	},
	y: 50,
	opacity: 0,
	duration: 1.2,
	stagger: .3
})

gsap.from(".transition3", {
	scrollTrigger: {
		trigger: ".transition3",
		start: "top center"
	},
	y: 50,
	opacity: 0,
	duration: 1.2,
	stagger: .6
});
