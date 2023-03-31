const switchOne = document.getElementById('switchOne');
const switchTwo = document.getElementById('switchTwo');
const switchThree = document.getElementById('switchThree');

function switchOneClick() {
	if (switchTwo.checked == 1) {
		if (switchTwo.checked == 1) {
			switchTwo.checked = 0;
		}
	} else {
		switchThree.checked = 0;
	}
}
function switchTwoClick() {
	if (switchThree.checked == 1) {
		if (switchOne.checked == 1) {
			switchThree.checked = 0;
		} else {
			switchOne.checked = 0;
		}
	}
}
function switchThreeClick() {
	if (switchOne.checked == 1) {
		switchOne.checked = 0;
	}
}
