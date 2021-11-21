'use strict';

const workHoursCard = document.getElementById('work-hours-card');
const isOpen = document.getElementById('is-open');
const siteDesc = document.querySelector('meta[name=description]');

const hourCST = (new Date().getUTCHours() + 24 - 6) % 24;
let currentState;
if (hourCST >= 8 && hourCST < 23) {
	currentState = 'open';
	workHoursCard.style.backgroundColor = 'darkgreen';
} else {
	currentState = 'closed';
	workHoursCard.style.backgroundColor = 'red';
}

isOpen.textContent = currentState;
siteDesc.setAttribute(
	'content',
	siteDesc.getAttribute('content') + currentState
);
