/**
 * http://usejsdoc.org/
 */

var messages=require('./greet-messages.json');

function greet() {
	console.log(messages['en']);
}

module.exports = greet;