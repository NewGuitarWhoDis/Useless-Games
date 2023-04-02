var loader1 = document.getElementById('loader1');
var loader2 = document.getElementById('loader2');
var loader3 = document.getElementById('loader3');
var loader4 = document.getElementById('loader4');
var loader5 = document.getElementById('loader5');
var loader6 = document.getElementById('loader6');
var loader7 = document.getElementById('loader7');
var loader8 = document.getElementById('loader8');
var uploader = document.getElementById('uploader');
var loadingtext = document.getElementById('loadingtext');
var resultscreen = document.getElementById('resultscreen');

function rate() {
	uploader.style.display = 'none';
	load();
	setTimeout(function () {
		load();
	}, 16000);
	setTimeout(function () {
		resultscreen.style.display = 'block';
		resultscreen.style.opacity = '1';
		loadingtext.style.display = 'none';
		loadingtext.style.opacity = '0';
        loader8.style.opacity = '0';
        loader8.style.display = 'none';
        // random int between 1 and 4
        var random = Math.floor(Math.random() * 4) + 1;
        // set score to random
        document.getElementById('score').innerHTML = random;
	}, 32000);
}

function load() {
	// now change the opacity of the loader from 0 to 1
	loadingtext.style.display = 'block';
	loadingtext.style.opacity = '1';
	loader8.style.display = 'none';
	loader1.style.display = 'block';
	loader1.style.opacity = '1';
	setTimeout(function () {
		loader1.style.display = 'none';
		loader2.style.display = 'block';
		loader1.style.opacity = '0';
		loader2.style.opacity = '1';
	}, 2000);
	setTimeout(function () {
		loader2.style.display = 'none';
		loader3.style.display = 'block';
		loader2.style.opacity = '0';
		loader3.style.opacity = '1';
	}, 4000);
	setTimeout(function () {
		loader3.style.display = 'none';
		loader4.style.display = 'block';
		loader3.style.opacity = '0';
		loader4.style.opacity = '1';
	}, 6000);
	setTimeout(function () {
		loader4.style.display = 'none';
		loader5.style.display = 'block';
		loader4.style.opacity = '0';
		loader5.style.opacity = '1';
	}, 8000);
	setTimeout(function () {
		loader5.style.display = 'none';
		loader6.style.display = 'block';
		loader5.style.opacity = '0';
		loader6.style.opacity = '1';
	}, 10000);
	setTimeout(function () {
		loader6.style.display = 'none';
		loader7.style.display = 'block';
		loader6.style.opacity = '0';
		loader7.style.opacity = '1';
	}, 12000);
	setTimeout(function () {
		loader7.style.display = 'none';
		loader8.style.display = 'block';
		loader7.style.opacity = '0';
		loader8.style.opacity = '1';
	}, 14000);
}
