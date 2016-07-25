const Fighter = require('./Fighter');
const WeakFighter = require('./WeakFighter');
const ImprovedFighter = require('./ImprovedFighter');
const utils = require('./utils');
const fight = require('./fight');

const apiUrl = 'http://jsonplaceholder.typicode.com/users';
const f = new Fighter('fighter');
const wf = new WeakFighter('weakFighter');
const imf = new ImprovedFighter('improvedFighter');

utils.getNames(apiUrl).then((names) => {
	// console.log(names);
}).catch((error) => {
	// console.log(error);
});


fight(f, wf);
fight(wf, imf);
fight(f, imf);