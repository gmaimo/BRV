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

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX);
	slider.scrollLeft = scrollLeft - walk;
});

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

window.addEventListener('scroll', () => {
	let nav = document.querySelector('#nav');
	let logo = document.getElementById('nav-logo');
	let button = document.getElementById('nav-button');
	if(window.scrollY > 0){
		nav.classList.add('navbar-light', 'bg-light');
		nav.classList.remove('navbar-dark', 'bg-transparent');
		logo.classList.add('text-dark');
		logo.classList.remove('text-white');
		button.classList.add('btn-outline-dark');
		button.classList.remove('btn-outline-light');
	} else {
		nav.classList.add('navbar-dark', 'bg-transparent');
		nav.classList.remove('navbar-light', 'bg-light');
		logo.classList.add('text-white');
		logo.classList.remove('text-dark');
		button.classList.add('btn-outline-light');
		button.classList.remove('btn-outline-dark');
	} 
});


// mouseover on cards

let cards = document.querySelectorAll('.card');
let cardIcons = document.querySelectorAll('.service-icon-filter');
cards.forEach(card => {
	card.addEventListener('mouseover', () => {
		card.classList.remove('bg-olive');
		card.classList.add('bg-olive2');
		card.querySelector('.service-icon').classList.remove('service-icon-filter');
		card.querySelector('h5').classList.add('text-dark');
	});
	card.addEventListener('mouseout', () => {
		card.classList.add('bg-olive');
		card.classList.remove('bg-olive2');
		card.querySelector('.service-icon').classList.add('service-icon-filter');
		card.querySelector('h5').classList.remove('text-dark');
	});
});


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






