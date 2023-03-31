var element = document.getElementById('button');
element.addEventListener('mouseover', function () {
	element.style.left = Math.random() * 600 + 'px';
	element.style.top = Math.random() * 600 + 'px';
	element.style.position = 'absolute';
});

var event = new MouseEvent('mouseover', {
	view: window,
	bubbles: true,
	cancelable: true,
});

element.dispatchEvent(event);
