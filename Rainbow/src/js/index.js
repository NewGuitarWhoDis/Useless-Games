const speedVar = document.querySelector('input[type="range"]');
const body = document.querySelector('body');

speedVar.addEventListener('input', function () {
	body.style.animationDuration = `${this.value}s`;
});
