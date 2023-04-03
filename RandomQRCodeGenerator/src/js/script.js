generateQRCode();

function generateQRCode() {
	var qrcode = document.getElementById('qrcode');
	var childDivs = document.getElementById('row1').getElementsByTagName('a');

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	for (i = 0; i < childDivs.length; i++) {
		//  var childDiv = childDivs[i];
		// console.log(childDivs[i]);
		if (randomIntFromInterval(0, 1) == 1) {
			childDivs[i].classList.add('on');
		}
        else {
            childDivs[i].classList.remove('on');
        }
	}
}
