		document.querySelector('.gr_ps').animate({width: '95%'}, 2000);
		document.querySelector('.gr_html').animate({width: '95%'}, 1500);
		document.querySelector('.gr_jquery').animate({width: '60%'}, 2000);
		document.querySelector('.gr_illu').animate({width: '90%'}, 1500);

		document.ready(function () {
			$('.primary-nav').onePageNav();
		});
		window.console = window.console || function (t) {
		};
		if (document.location.search.match(/type=embed/gi)) {
			window.parent.postMessage("resize", "*");
		}

