module.exports = function toReadable (n) {
    let x = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let x1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let xx = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let num = n.toString().split('');
	let result = '';
	if (n === 0) {return 'zero'};
	num.length === 1 ? num.unshift('0', '0') : num.length === 2 ? num.unshift('0') : result += `${x[num[0]]} hundred`;
	result += num[1] == 1 ? ` ${x1[num[2]]}` : ` ${xx[num[1]]}`;
    result = result.trim();
    result += num[1] != 1 ? ` ${x[num[2]]}` : '';
	return result.trim();
}
