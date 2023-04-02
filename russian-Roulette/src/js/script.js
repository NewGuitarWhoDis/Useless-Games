var audio = new Audio('/russian-roulette/src/audio/shot.mp3');
audio.volume = 1;

function shoot() {
	var gun = document.getElementById('gun');
	var died = document.getElementById('died');
	gun.style.display = 'none';
	died.style.display = 'flex';

	audio.play();
}

function tryAgain() {
	var gun = document.getElementById('gun');
	var died = document.getElementById('died');
	gun.style.display = 'block';
	died.style.display = 'none';
}
