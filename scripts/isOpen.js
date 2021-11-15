'use strict';

const workHoursCard = document.getElementById('work-hours-card');
const isOpen = document.getElementById('is-open');

let hourCST = (new Date().getUTCHours() + 24 - 6) % 24;
if (hourCST >= 8 && hourCST < 23) {
	workHoursCard.style.backgroundColor = 'darkgreen';
	isOpen.textContent = 'open';
} else {
	workHoursCard.style.backgroundColor = 'darkred';
	isOpen.textContent = 'closed';
}
