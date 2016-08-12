// pow function

var a = prompt('Введите число', '');
var	b = prompt('Введите степень', '');

function pow (a, b){
	var c;
	if (b == 0){
		(c = 1);
	} else if (b == 1){
		(c = a);
	} else {
		var i = 2;
		var c = a;
		while (i <= b) {
			c = c * a;
			i++;
		}
	}
	return c;
}

var result = pow (a, b);
console.log('result is: ', result);