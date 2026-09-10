const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (menuToggle && nav) {
	menuToggle.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});

	nav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('open');
			menuToggle.setAttribute('aria-expanded', 'false');
		});
	});
}

const registrationLinks = {
	'competition-1': '#',
	'competition-2': '#',
	'competition-3': '#',
	'combo-1': '#',
	'combo-2': '#',
	'workshop-1': '#',
	'workshop-2': '#',
	'workshop-3': '#'
};

document.querySelectorAll('[data-link]').forEach((button) => {
	button.href = registrationLinks[button.dataset.link] || '#';
});
