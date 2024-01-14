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





