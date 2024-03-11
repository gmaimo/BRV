var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	// spaceBetween: 30,
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


//drag to horizontally scroll gallery
const slider = document.querySelector('#gallery');
const links = document.querySelectorAll('.list-x a');
let isDown = false;
let move = false;
let startX;
let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
// 	isDown = true;
// 	slider.classList.add('active');
// 	startX = e.pageX - slider.offsetLeft;
// 	scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
// 	isDown = false;
// 	slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
// 	isDown = false;
// 	slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
// 	if (!isDown) return;
// 	e.preventDefault();
// 	const x = e.pageX - slider.offsetLeft;
// 	const walk = (x - startX);
// 	slider.scrollLeft = scrollLeft - walk;
// });

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function(e) {
		if (move) {
			e.preventDefault();
		}
	});
	links[i].addEventListener('mousedown', (e) => {
		move = false;
	});
	links[i].addEventListener('mousemove', (e) => {
		move = true;
	});
}


//cambiar active en navbar   REVISAR
const navEls = document.querySelectorAll('.nav-item');
navEls.forEach(navEl => {
	navEl.addEventListener('click', () => {
		document.querySelector('.active')?.classList.remove('active');
		navEl.classList.add('active');
	});
});

// navbar scroll theme
// window.addEventListener('scroll', () => {
// 	let nav = document.querySelector('#nav');
// 	let logo = document.getElementById('nav-logo');
// 	let button = document.getElementById('nav-button');
// 	if(window.scrollY > 0){
// 		nav.classList.add('navbar-light', 'bg-light');
// 		nav.classList.remove('navbar-dark', 'bg-transparent');
// 		logo.classList.add('text-dark');
// 		logo.classList.remove('text-white');
// 		button.classList.add('btn-outline-dark');
// 		button.classList.remove('btn-outline-light');
// 	} else {
// 		nav.classList.add('navbar-dark', 'bg-transparent');
// 		nav.classList.remove('navbar-light', 'bg-light');
// 		logo.classList.add('text-white');
// 		logo.classList.remove('text-dark');
// 		button.classList.add('btn-outline-light');
// 		button.classList.remove('btn-outline-dark');
// 	} 
// });


// mouseover on cards

let cards = document.querySelectorAll('.card-grid');
let cardIcons = document.querySelectorAll('.service-icon');
cards.forEach(card => {
	card.addEventListener('mouseover', () => {
		card.classList.remove('bg-olive');
		card.classList.add('bg-clear');
		card.querySelector('.service-icon').classList.remove('service-icon-white');
		card.querySelector('.service-icon').classList.add('service-icon-filter');
		card.querySelector('h5').classList.add('text-warning');
		card.querySelector('p').classList.add('text-white');
		card.querySelector('p').classList.remove('text-muted');
	});
	card.addEventListener('mouseout', () => {
		card.classList.add('bg-olive');
		card.classList.remove('bg-clear');
		card.querySelector('.service-icon').classList.add('service-icon-white');
		card.querySelector('.service-icon').classList.remove('service-icon-filter');
		card.querySelector('h5').classList.remove('text-warning');
		card.querySelector('p').classList.remove('text-white');
		card.querySelector('p').classList.add('text-muted');
	});
});

//animation on toggle nav small device

const burgerBtn = document.getElementById('burger-btn');
const navAnimation = document.querySelector('.nav-resp');

function toggleNav() {
	navAnimation.classList.toggle('active');
};

// hide or show nav menu on mobile when clicking the hamburger/cross menu btn
// burgerBtn.addEventListener('click', () => {
//     toggleNav();
// });




//reveal on hover over gallery image
let galleryImgs = document.querySelectorAll('.galleryImg');
// let previousRandomImg = null;

// function repeatOften() {
// 	if (previousRandomImg) previousRandomImg.classList.toggle('filterOn')
// 	let random = Math.floor(Math.random() * (galleryImgs.length - 1)) + 0;
// 	let randomImg = galleryImgs[random];
// 	randomImg.classList.toggle('filterOn');
// 	previousRandomImg = randomImg;
// 	setTimeout(repeatOften, 2000);
// }
// repeatOften();

galleryImgs.forEach(galleryImg => {
	galleryImg.addEventListener('mouseover', () => {
		galleryImg.classList.remove('filterOn');
	});
	galleryImg.addEventListener('mouseout', () => {
		galleryImg.classList.add('filterOn');
	});
});




















const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');
	const navItems = document.querySelectorAll('.nav-item');
	
	// close when click on toggle btn
	if(visibility === 'false'){
		primaryNav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else if(visibility === 'true'){
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	};
	
	//close when click on nav link
	navItems.forEach(navItem => {
		navItem.addEventListener('click', () => {
			primaryNav.setAttribute('data-visible', false);
			navToggle.setAttribute('aria-expanded', false);
		});
	});

	//close when click outside nav
	document.addEventListener('click', (e) => {
		if(!primaryNav.contains(e.target) && e.target !== navToggle){
			primaryNav.setAttribute('data-visible', false);
			navToggle.setAttribute('aria-expanded', false);
		}
	});
	
});