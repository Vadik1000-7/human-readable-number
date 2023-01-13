module.exports = function toReadable (number) {
	let result = '';

	if (number === 0) {
		return 'zero';
	}

	if (number > 99) {
		result += numSimple(Math.floor(number / 100)) + ' hundred';
	}

	(number > 100 && (number % 100)) ? result += ' ' : result;

	if ((number % 100) <= 20) {
		result += numSimple(number % 100);
	} else if ((number % 100) > 20) {
		result += numDes(Math.floor(number % 100 / 10));
		if (number % 10) {
			result += ' ' + numSimple(number % 10);
		}
	}

	return result;
}

function numSimple(num) {
	switch (num) {
		case 1:
			return 'one';
		case 2:
			return 'two';
		case 3:
			return 'three';
		case 4:
			return 'four';
		case 5:
			return 'five';
		case 6:
			return 'six';
		case 7:
			return 'seven';
		case 8:
			return 'eight';
		case 9:
			return 'nine';
		case 10:
			return 'ten';
		case 11:
			return 'eleven';
		case 12:
			return 'twelve';
		case 13:
			return 'thirteen';
		case 14:
			return 'fourteen';
		case 15:
			return 'fifteen';
		case 16:
			return 'sixteen';
		case 17:
			return 'seventeen';
		case 18:
			return 'eighteen';
		case 19:
			return 'nineteen';
		case 20:
			return 'twenty';
		default:
			return '';
	}
}

function numDes(num) {
	switch (num) {
		case 2:
			return 'twenty';
		case 3:
			return 'thirty';
		case 4:
			return 'forty';
		case 5:
			return 'fifty';
		case 6:
			return 'sixty';
		case 7:
			return 'seventy';
		case 8:
			return 'eighty';
		case 9:
			return 'ninety';
		default:
			return '';
	}
}