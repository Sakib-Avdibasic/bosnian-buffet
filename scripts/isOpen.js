'use strict';

const workHoursCard = document.getElementById('work-hours-card');
const isOpen = document.getElementById('is-open');

const hourCST = (new Date().getUTCHours() + 24 - 6) % 24;
if (hourCST >= 8 && hourCST < 23) {
	isOpen.textContent = 'open';
	workHoursCard.style.backgroundColor = 'darkgreen';
} else {
	isOpen.textContent = 'closed';
	workHoursCard.style.backgroundColor = 'darkred';
}
