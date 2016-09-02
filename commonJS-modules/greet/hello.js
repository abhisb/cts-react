/**
 * http://usejsdoc.org/
 */

var en = require('./en');
var es = require('./es');

function greet(locale) {
	if (locale === 'en') {
		en();
	}
	if (locale === 'es') {
		es();
	}
}



function func() {
	console.log('....');
}

module.exports = greet;