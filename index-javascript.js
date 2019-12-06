// JavaScript Document
	$(".hamburger-menu").click(function(){ 
			
			$(".menu-list").show("slow", "swing");
			$(".hamburger-menu").hide("slow","swing"); 
		})
		
		$(".close-icon").click(function(){ 
			$(".menu-list").hide("slow","swing"); 
			$(".hamburger-menu").show("slow","swing"); 
		})

	//animation for eggless section 
		var tl3= new TimelineMax(); 
		var tl4= new TimelineMax({onUpdate:updatePercentage}); 
		const controllerEggless= new ScrollMagic.Controller(); 
		
		tl3.from(".eggless-photo-first", 1, {x:-200, opacity:0 }); 
		tl3.from(".eggless-photo-second", 1, {x:200, opacity:0 }); 

	//automatic animation
		const sceneEggless = new ScrollMagic.Scene({
  triggerElement: ".eggless-naan-section",
})
  .setTween(tl3)
		.addTo(controllerEggless);

	//set on scroll 
		tl4.from(".eggless-underline",0.5, { width:0, opacity: 0}); 
		tl4.from(".eggless-naan-text", 0.5, {x:200, opacity:0}); 
	


		const sceneEggless2 = new ScrollMagic.Scene({
  triggerElement: ".eggless-naan-section",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".eggless-naan-section")
  .setTween(tl4)
		.addTo(controllerEggless);
		
		function updatePercentage(){ 
				tl4.progress(); 
				console.log(tl4.progress()); 
				}

//animation for celebrate section 
		var tl5= new TimelineMax(); 
		var tl6= new TimelineMax({onUpdate:updatePercentageCelebrate}); 
		const controllerCelebrate= new ScrollMagic.Controller(); 
		
		tl5.from(".celebrate-photo-first", 1, {x:200, opacity:0 }); 
		tl5.from(".celebrate-photo-second", 1, {x:-200, opacity:0 }); 

	//automatic animation
		const sceneCelebrate = new ScrollMagic.Scene({
  triggerElement: ".celebrate-section",
})
  .setTween(tl5)
		.addTo(controllerCelebrate);

	//set on scroll 
		tl6.from(".celebrate-underline",0.5, { width:0, opacity: 0}); 
		tl6.from(".celebrate-text", 0.5, {x:-200, opacity:0}); 
	


		const sceneCelebrate2 = new ScrollMagic.Scene({
  triggerElement: ".celebrate-section",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".celebrate-section")
  .setTween(tl6)
		.addTo(controllerCelebrate);
		
		function updatePercentageCelebrate(){ 
				tl6.progress(); 
				console.log(tl6.progress()); 
				}
			

		//animation for special section 
		var tl2= new TimelineMax({onUpdate:updatePercentageCatering}); 
		var tl= new TimelineMax(); 
		const controller= new ScrollMagic.Controller(); 
		
		tl.from(".catering-photo-first", 1, {x:-200, opacity:0 }); 
		tl.from(".catering-photo-second", 0.5, {x:200, opacity:0 }); 

	//automatic animation
		const scene1 = new ScrollMagic.Scene({
  triggerElement: ".catering-section",
})
  .setTween(tl)
		.addTo(controller);

	//set on scroll 
		tl2.from(".catering-underline",0.5, { width:0, opacity: 0}); 
		tl2.from(".catering-text", 0.5, {x:200, opacity:0}); 
	


		const scene2 = new ScrollMagic.Scene({
  triggerElement: ".catering-section",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".catering-section")
  .setTween(tl2)
		.addTo(controller);
		
		function updatePercentageCatering(){ 
				tl2.progress(); 
				console.log(tl2.progress()); 
				}
			