// JavaScript Document
	$(".hamburger-menu").click(function(){ 
			
			$(".menu-list").show("slow", "swing");
			$(".hamburger-menu").hide("slow","swing"); 
		})
		
		$(".close-icon").on('click',function(){ 
			$(".menu-list").hide("slow","swing"); 
			$(".hamburger-menu").show("slow","swing"); 
		})

		$(".menu-list").on('click', function(){ 
			$(".menu-list").hide("slow","swing"); 
			$(".hamburger-menu").show("slow","swing"); 
		})

//Review section

    /* Add your logic here */


	let reviewArray = ['While traveling in New Zealand, we have eaten in many Indian restaurants. This is our favorite so far. Delicious food, great atmosphere and friendly staff. We will be back.<span>Bruno Neeser</span>','The most delicious Indian food I have ever tasted! They have an affordable menu. Try the naan bread with almonds was my absolute fave. Would Recommend to everyone! You’ll get your moneys worth.<span>Anika Hunter</span>',"A fabulous place for a meal. I mostly get takeaway of butter chicken with rice & poppa dom. Add Nan bread & it's perfect. Owner Ubah & the Team are great.<span>Graham Highet</span>", "Delicious food.... Bought the chefs special family meal. Loved all the dishes and the family is now nicely satisfied. The boys were very nice at the counter so all around great work.<span>Chris Hedges</span>", "Mumbai massala. Lovely food and service. Very friendly and lunch is absolutely value for money. Will definitely return. Lamb sagwala is amazing. So is their butter chicken.<span> Fleur</span>", "Consistently good food, nice friendly staff and fairly priced. On our most recent trip, partner and I both agreeed it was the best restaurant meal we have had ages.<span>Adam El-Agez</span>","Tasty, traditional Indian cuisine, great choice for vegetarians. Good value for money. Sensational and friendly service of the staff. Highly recommended. Take Away menu is offered<span>Viktoria Makarov</span>" ]; 
  	
	let count=0; 
	$("#review-second-svg").on('click', function(){ 
		
		count++; 
		if (count==7){ 
			count=0; 
		}
		document.getElementById('review-paragraph').innerHTML = reviewArray[count]; 
		let numbers=reviewArray.length; 
		console.log(numbers); 
		console.log("counting" + count); 
	})

	$('#review-first-svg').on('click',function(){ 
		count--; 
		if (count==-1){ 
			count=6; 
		}
		document.getElementById('review-paragraph').innerHTML = reviewArray[count]; 
		console.log("-- counting "+count); 
		
		
	})

	

	 
	if ($(window).width()>850){
		
		//animation for tandoori section 
	var tl9= new TimelineMax({onUpdate:updatePercentageCatering}); 
		var tl10= new TimelineMax(); 
		const controllerTandooriSection= new ScrollMagic.Controller(); 
		
		
		tl10.from(".tandoori-details-text", 1, {opacity:0.2, y:100});  
		tl10.from(".tandoori-first-photo", 1, {width:0, y:100}); 
		tl10.from(".tandoori-underline",0.5, { width:0});
		

	//automatic animation
		const sceneTandoori = new ScrollMagic.Scene({
  triggerElement: ".tandoori-section",
	triggerHook:0.7,
	duration:"80%"
})
  .setTween(tl10)
			.addIndicators({
			name: 'fade-scene', 
			colorTrigger: 'black', 
			colorStart: '#75C695', 
			colorEnd: '#75C695'
		})
		.addTo(controllerTandooriSection);
		

	//animation for eggless section 
		var tl3= new TimelineMax(); 
		const controllerEggless= new ScrollMagic.Controller(); 
		tl3.from(".eggless-naan-text", 1,  {opacity:0.2, y:100}); 
		tl3.from(".eggless-photo-first", 1,  {width:0, y:100});
		tl3.from(".eggless-underline",0.5, { width:0}); 
	

	//automatic animation
		const sceneEggless = new ScrollMagic.Scene({
  triggerElement: ".eggless-naan-section",
			triggerHook:0.7,
	duration:"80%"
})
  .setTween(tl3)
		.addIndicators({
			name: 'fade-scene', 
			colorTrigger: 'black', 
			colorStart: '#75C695', 
			colorEnd: '#75C695'
		})
		.addTo(controllerEggless);

//animation for celebrate section 
		var tl5= new TimelineMax(); 
		const controllerCelebrate= new ScrollMagic.Controller(); 
		
		tl5.from(".celebrate-text", 1, {opacity:0.2, y:100}); 
		tl5.from(".celebrate-photo-first", 1, {width:0, y:100});
		tl5.from(".celebrate-underline", 0.5, { width:0}); 

	//automatic animation
		const sceneCelebrate = new ScrollMagic.Scene({
  triggerElement: ".celebrate-section",
triggerHook:0.7,
	duration:"90%"
})
  .setTween(tl5)
		.addIndicators({
			name: 'fade-scene', 
			colorTrigger: 'black', 
			colorStart: '#75C695', 
			colorEnd: '#75C695'
		})
		.addTo(controllerCelebrate);

		//animation for Catering section 
		var tl= new TimelineMax(); 
		const controller= new ScrollMagic.Controller(); 
		
		tl.from(".catering-text", 1, {opacity:0.2, y:100}); 
		tl.from(".catering-photo-first", 1, {width:0, y:100});
		tl.from(".catering-underline",  0.5, { width:0}); 

	//automatic animation
		const scene1 = new ScrollMagic.Scene({
  triggerElement: ".catering-section",
triggerHook:0.7,
	duration:"90%"
})
  .setTween(tl)
		.addIndicators({
			name: 'fade-scene', 
			colorTrigger: 'black', 
			colorStart: '#75C695', 
			colorEnd: '#75C695'
		})
		.addTo(controller);

	//set on scroll 
		function updatePercentageCatering(){ 
				tl2.progress(); 
				console.log(tl2.progress()); 
				}
			
//animation for about us section 
		
		var tl20= new TimelineMax(); 
		const controllerAboutUs= new ScrollMagic.Controller(); 
		
		tl20.from(".about-us-paragraph", 4, {height:0}); 

	//automatic animation
		const sceneAboutUs = new ScrollMagic.Scene({
  triggerElement: ".about-us-text",
triggerHook:0.7,
	duration:"70%"
})
  .setTween(tl20)
		.addIndicators({
			name: 'fade-scene', 
			colorTrigger: 'black', 
			colorStart: '#75C695', 
			colorEnd: '#75C695'
		})
		.addTo(controllerAboutUs);

	//set on scroll 
		function updatePercentageCatering(){ 
				tl20.progress(); 
				console.log(tl20.progress()); 
				}
		
		//animation for visit india section 
		
		var tl21= new TimelineMax(); 
		const controllerVisitIndia= new ScrollMagic.Controller(); 
		tl21.from(".about-us-foreground", 1, {opacity:0}); 
		tl21.from(".parallax-paragraph", 0.5, {opacity:0, y:200}); 
			
		

	//automatic animation
		const sceneParallax = new ScrollMagic.Scene({
  triggerElement: ".about-us-parallax",
triggerHook:0.4,
	duration:"90%"
})
  .setTween(tl21)
		.addIndicators({
			name: 'fade-scene', 
			colorTrigger: 'black', 
			colorStart: '#75C695', 
			colorEnd: '#75C695'
		})
		.addTo(controllerVisitIndia);
	
	}

//Spice Section
			
	 var waypointMild = new Waypoint({
  element: document.getElementsByClassName('spiceMild'),
		 
  handler: function(direction) {
	  if(direction=='down'){
	console.log('scrolled to the postion'); 
        var counter = document.getElementById('counter').getContext('2d');
        var no = 0; // Starting Point
        var pointToFill = 4.72;  //Point from where you want to fill the circle
        var cw = counter.canvas.width;  //Return canvas width
        var ch = counter.canvas.height; //Return canvas height
        var diff;   // find the different between current value (no) and trageted value (100)
        
        function fillCounter(){
           diff = ((no/100) * Math.PI*2*10);
            
            counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
            
            counter.lineWidth = 15;     // size of stroke
            
            counter.strokeStyle = '#FD1A00';    // Stroke Color
			
            counter.textAlign = 'center';
            
            counter.font = "30px roboto";    //set font size and face
            
            counter.fillText('Mild',100,110);       //fillText(text,x,y);
         
            counter.beginPath();
            counter.arc(100,100,90,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)
            
            counter.stroke();   // to fill stroke
            
            // now add condition
            
            if(no >= 33)
            {
                clearTimeout(fill);     //fill is a variable that call the function fillcounter()
            }
            no++;
        }
        
        //now call the function
        var fill = setInterval(fillCounter,40);     //call the fillCounter function after every 50MS
   
	  }
	}, 
		 offset: 300
})
	 
	  var waypointMedium = new Waypoint({
  element: document.getElementsByClassName('spiceMedium'),
		 
  handler: function(direction) {
	  if(direction=='down'){
	console.log('scrolled to the postion'); 
        var counter = document.getElementById('counterMedium').getContext('2d');
        var no = 0; // Starting Point
        var pointToFill = 4.72;  //Point from where you want to fill the circle
        var cw = counter.canvas.width;  //Return canvas width
        var ch = counter.canvas.height; //Return canvas height
        var diff;   // find the different between current value (no) and trageted value (100)
        
        function fillCounter(){
           diff = ((no/100) * Math.PI*2*10);
            
            counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
            
            counter.lineWidth = 15;     // size of stroke
            
            counter.strokeStyle = '#FD1A00';    // Stroke Color
            
			counter.fillStyle = '#000';     // color that you want to fill in counter/circle
			
            counter.textAlign = 'center';
            
            counter.font = "30px roboto";    //set font size and face
            
            counter.fillText('Medium',100,110);       //fillText(text,x,y);
            
            counter.beginPath();
            counter.arc(100,100,90,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)
            
            counter.stroke();   // to fill stroke
            
            // now add condition
            
            if(no >= 66)
            {
                clearTimeout(fill);     //fill is a variable that call the function fillcounter()
            }
            no++;
        }
        
        //now call the function
        var fill = setInterval(fillCounter,20);     //call the fillCounter function after every 50MS
   
	  }
	}, 
		 offset: 300
})
	  
	  	  var waypointHot = new Waypoint({
  element: document.getElementsByClassName('spiceHot'),
		 
  handler: function(direction) {
	  if(direction=='down'){
	console.log('scrolled to the postion'); 
        var counter = document.getElementById('counterHot').getContext('2d');
        var no = 0; // Starting Point
        var pointToFill = 4.72;  //Point from where you want to fill the circle
        var cw = counter.canvas.width;  //Return canvas width
        var ch = counter.canvas.height; //Return canvas height
        var diff;   // find the different between current value (no) and trageted value (100)
        
        function fillCounter(){
           diff = ((no/100) * Math.PI*2*10);
            
            counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
            
            counter.lineWidth = 15;     // size of stroke
            
            counter.fillStyle = '#000';     // color that you want to fill in counter/circle
            
            counter.strokeStyle = '#FD1A00';    // Stroke Color
            
            counter.textAlign = 'center';
            
            counter.font = "30px roboto";    //set font size and face
            
            counter.fillText('Hot',100,110);       //fillText(text,x,y);
            
            counter.beginPath();
            counter.arc(100,100,90,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)
            
            counter.stroke();   // to fill stroke
            
            // now add condition
            
            if(no >= 100)
            {
                clearTimeout(fill);     //fill is a variable that call the function fillcounter()
            }
            no++;
        }
        
        //now call the function
        var fill = setInterval(fillCounter,20);     //call the fillCounter function after every 50MS
   
	  }
	}, 
		 offset: 300
})