const hole = document.querySelectorAll('.hole');

const randomHole = Math.floor(Math.random() * hole.length);
hole[randomHole].classList.add('up');

function showMole() {
	const randomHole = Math.floor(Math.random() * hole.length);
	hole[randomHole].classList.add('up');
}

//   hide the mole in the hole that is hovered over
const holeOne = document.getElementById('holeOne');
document.getElementById('holeOneHover').onmouseover = function () {
	hideMoleOne();
};
const holeTwo = document.getElementById('holeTwo');
document.getElementById('holeTwoHover').onmouseover = function () {
	hideMoleTwo();
};
const holeThree = document.getElementById('holeThree');
document.getElementById('holeThreeHover').onmouseover = function () {
	hideMoleThree();
};
const holeFour = document.getElementById('holeFour');
document.getElementById('holeFourHover').onmouseover = function () {
	hideMoleFour();
};
const holeFive = document.getElementById('holeFive');
document.getElementById('holeFiveHover').onmouseover = function () {
	hideMoleFive();
};
const holeSix = document.getElementById('holeSix');
document.getElementById('holeSixHover').onmouseover = function () {
	hideMoleSix();
};

function hideMoleOne() {
	console.log('hideMoleOne');
	if (holeOne.classList.contains('up') == true) {
		holeOne.classList.remove('up');
		showMole();
	}
}
function hideMoleTwo() {
	console.log('hideMoleTwo');
	if (holeTwo.classList.contains('up') == true) {
		holeTwo.classList.remove('up');
		showMole();
	}
}
function hideMoleThree() {
	console.log('hideMoleThree');
	if (holeThree.classList.contains('up') == true) {
		holeThree.classList.remove('up');
		showMole();
	}
}
function hideMoleFour() {
	console.log('hideMoleFour');
	if (holeFour.classList.contains('up') == true) {
		holeFour.classList.remove('up');
		showMole();
	}
}
function hideMoleFive() {
	console.log('hideMoleFive');
	if (holeFive.classList.contains('up') == true) {
		holeFive.classList.remove('up');
		showMole();
	}
}
function hideMoleSix() {
	console.log('hideMoleSix');
	if (holeSix.classList.contains('up') == true) {
		holeSix.classList.remove('up');
		showMole();
	}
}

function addPoint() {
	if (holeSix.classList.contains('up') == true) {
		let score = document.getElementById('score');
		score.innerHTML = parseInt(score.innerHTML) + 1;
	}
}
