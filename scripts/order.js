const orderItems = JSON.parse(localStorage.getItem('order')) ?? {};

const displayOrder = orderItems => {
	let order = '';

	for (const [orderItem, itemCount] of Object.entries(orderItems)) {
		order += `${orderItem} (${itemCount})\n`;
	}

	document.querySelector('textarea').textContent = order;
	localStorage.setItem('order', JSON.stringify(orderItems));
};
const updateOrder = () => {
	event.preventDefault();

	const orderButton = event.target;
	const orderItem = orderButton.parentNode.firstElementChild.textContent;

	if (orderButton.classList.contains('incrementor')) {
		orderItems[orderItem]
			? orderItems[orderItem]++
			: (orderItems[orderItem] = 1);
	} else {
		if (orderItems[orderItem]) orderItems[orderItem]--;
	}

	if (orderItems[orderItem] == 0) delete orderItems[orderItem];

	displayOrder(orderItems);
};

const orderButtons = [...document.querySelectorAll('#order-options button')];

orderButtons.forEach(orderButton => {
	orderButton.addEventListener('click', updateOrder);
});

document.addEventListener('load', displayOrder(orderItems));

const form = document.querySelector('form');
form.addEventListener('submit', () => {
	localStorage.removeItem('order');
});
