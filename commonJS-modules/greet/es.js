/**
 * http://usejsdoc.org/
 */

var messages=require('./greet-messages.json');

function greet() {
	console.log(messages['es']);
}

module.exports = greet;