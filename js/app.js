window.onload = () => {

	reviewCycle(6000, review1, review2, review3);
	scrollTopFade(navbar, 400, 10);

}

// DOM Elements
const review1 = $('#hero-review-1');
const review2 = $('#hero-review-2');
const review3 = $('#hero-review-3');
const navbar = $('.navbar');
const menuOptionPanel = $('.menu-selection');
const closeBtn = document.getElementById('close-btn');
const mainDishesMenuLink = $('#main-dishes-link');
const seafoodMenuLink = $('#seafood-link');
const appetizerMenuLink = $('#appetizers-link');
const sidesMenuLink = $('#sides-link');
const menuSection = $('#menu-section');
const menuBtn = $('#menu-btn');
const mainDishMenuTarget = $('#main-dishes');
const seafoodMenuTarget = $('#seafood');
const appetizerMenuTarget = $('#appetizers');
const sideMenuTarget = $('#sides');


// Hero Review FadeIn / FadeOut Cycle
function reviewCycle(delay) {

    let elements = Array.prototype.slice.call(arguments, 1);
    let functions = [];

    for (let i = 0; i < elements.length; i++) {
        functions.push(function (i) {
            let prev = i === 0 ? elements.length - 1 : i - 1;
            let next = (i + 1) % elements.length;
            return function() {
                elements[prev].fadeToggle(function() {
                    elements[i].fadeToggle(function() {
                        setTimeout(functions[next], delay);
                    });
                });
            };
        }(i));
    }
    functions[1]();
};

//Smooth Scroll to Target
const smoothScrollToTarget = (target, transition) => {
	$('html, body').animate({
		scrollTop: target.offset().top
	}, transition);
}

const smoothScrollToTargetTest = (target, transition) => {
	$('.menu-display').animate({
		scrollTop: target.offset().top
	}, transition);
}

// Hero 'Menu Link' Scroll to Menu Section
menuBtn.click( () => {

	smoothScrollToTarget(menuSection, 1000);

	setTimeout( () => {
		menuOptionPanel.addClass('open-menu-panel');
		menuOptionPanel.removeClass('close-menu-panel');
	}, 1000);

	setTimeout( () => {
		mainDishesMenuLink.fadeIn(800);
		seafoodMenuLink.fadeIn(800);
		appetizerMenuLink.fadeIn(800);
		sidesMenuLink.fadeIn(800);
	}, 1500);

});

// Menu Option Links Scroll to Menu Heading Target
mainDishesMenuLink.click( () => {

	smoothScrollToTargetTest(mainDishMenuTarget, 800);
});

seafoodMenuLink.click( () => {

	smoothScrollToTargetTest(seafoodMenuLink, 800);
});

appetizerMenuLink.click( () => {

	smoothScrollToTargetTest(appetizerMenuTarget, 800);
});

sidesMenuLink.click( () => {

	smoothScrollToTarget(sideMenuTarget, 800);
})



// FadeIn/Out Element at Scroll Position 
const scrollTopFade = (element, speed, fromTop) => {
	$(window).on('scroll', () => {
		let scrollTop = $(window).scrollTop();
		if( scrollTop >= fromTop) {
			element.fadeOut(speed);
		} else {
			element.fadeIn(speed);
		}
	});
}

// Open and Close Menu Options Panel

const closeMenuOptions = () => {

	mainDishesMenuLink.fadeOut(500);
	seafoodMenuLink.fadeOut(500);
	appetizerMenuLink.fadeOut(500);
	sidesMenuLink.fadeOut(500);

	setTimeout( () => {
		menuOptionPanel.addClass('close-menu-panel');
		menuOptionPanel.removeClass('open-menu-panel');
	}, 800);
	

}

closeBtn.addEventListener('click', closeMenuOptions);

