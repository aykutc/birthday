$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		
		// Start floating photos animation
		startFloatingPhotos();
		
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6,#b7').hide(); // 5 buton kalsın, kalanları gizle
		// Balonları ekranın tam ortasına eşit aralıklarla yerleştir
		const balloonCount = 5;
		const balloonSpacing = 85;
		const balloonWidth = 60; // Balonun yaklaşık genişliği (px)
		vw = $(window).width();
		const isMobile = vw < 600;
		const totalBalloonsWidth = balloonCount * balloonWidth + (balloonCount - 1) * balloonSpacing;

		if (isMobile) {
			// Mobilde: balonları ekranın tam ortasına, kenarlarda ve aralarda eşit boşluklarla yerleştir
			const sidePadding = 20; // Sol ve sağdan boşluk (px)
			const availableWidth = vw - 2 * sidePadding;
			const spacing = (availableWidth - balloonCount * balloonWidth) / (balloonCount - 1);

			for (let i = 0; i < balloonCount; i++) {
				let left = sidePadding + i * (balloonWidth + spacing);
				$('#b' + (i + 1) + (i + 1)).animate({ top: 240, left: left }, 500);
			}
		} else {
			// Masaüstünde: balonları ekranın tam ortasına, eşit aralıklarla yerleştir
			const center = vw / 2;
			const startLeft = center - totalBalloonsWidth / 2;
			for (let i = 0; i < balloonCount; i++) {
				let left = startLeft + i * (balloonWidth + balloonSpacing);
				$('#b' + (i + 1) + (i + 1)).animate({ top: 240, left: left }, 500);
			}
		}
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});

// Floating Photos Functions
function startFloatingPhotos() {
	// Show all photos with a delay between each and set initial positions
	$('.floating-photo').each(function(index) {
		var photo = $(this);
		var initialLeft = Math.random() * (window.innerWidth - 250);
		var initialTop = Math.random() * (window.innerHeight - 250);
		
		// Set initial position
		photo.css({
			'left': initialLeft + 'px',
			'top': initialTop + 'px'
		});
		
		setTimeout(function() {
			photo.addClass('active');
		}, index * 300);
	});
	
	// Start rotation animations and movement after photos appear
	setTimeout(function() {
		$('#photo1, #photo3, #photo5, #photo7').addClass('photos-rotate-behaviour-one');
		$('#photo2, #photo4, #photo6').addClass('photos-rotate-behaviour-two');
		
		// Start individual floating loops for each photo with delays
		setTimeout(function() { photoLoopOne(); }, 500);
		setTimeout(function() { photoLoopTwo(); }, 700);
		setTimeout(function() { photoLoopThree(); }, 900);
		setTimeout(function() { photoLoopFour(); }, 1100);
		setTimeout(function() { photoLoopFive(); }, 1300);
		setTimeout(function() { photoLoopSix(); }, 1500);
		setTimeout(function() { photoLoopSeven(); }, 1700);
	}, 2500);
}

function photoLoopOne() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo1').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopOne();
	});
}

function photoLoopTwo() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo2').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopTwo();
	});
}

function photoLoopThree() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo3').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopThree();
	});
}

function photoLoopFour() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo4').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopFour();
	});
}

function photoLoopFive() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo5').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopFive();
	});
}

function photoLoopSix() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo6').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopSix();
	});
}

function photoLoopSeven() {
	var randleft = Math.random() * (window.innerWidth - 250);
	var randtop = Math.random() * (window.innerHeight - 250);
	$('#photo7').animate({left:randleft,top:randtop}, 8000, function(){
		photoLoopSeven();
	});
}


//alert('hello');