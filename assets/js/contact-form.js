const contactForm = document.forms.namedItem('contact');
const contactFormAlert = document.querySelector('.contact-form .alert');

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const contactData = new FormData(contactForm);
	const plainContactData = Object.fromEntries(contactData.entries());

	fetch(contactForm.action, {
		method: contactForm.method,
		headers: {
			Accept: 'application/json',
		},
		body: JSON.stringify(plainContactData),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw Error(response.statusText);
		})
		.then(() => {
			contactFormAlert.innerHTML = 'Message sent successfully.';
			contactFormAlert.classList.remove('alert--error', 'alert--hidden');
			contactFormAlert.classList.add('alert--success', 'alert--show');
			contactForm.reset();
		})
		.catch(() => {
			contactFormAlert.innerHTML = 'Oops! Something seems to be wrong.';
			contactFormAlert.classList.remove('alert--success', 'alert--hidden');
			contactFormAlert.classList.add('alert--error', 'alter--show');
		});
});
