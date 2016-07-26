const Fighter = require('./Fighter');
const WeakFighter = require('./WeakFighter');
const ImprovedFighter = require('./ImprovedFighter');
const utils = require('./utils');
const fight = require('./fight');

const apiUrl = 'http://jsonplaceholder.typicode.com/users';

const f = new Fighter('Fighter', 5, 300);
const wf = new WeakFighter('Weak Fighter');
const imf = new ImprovedFighter('Improved Fighter');



const fighters = [];

for(let i = 0; i < 3; i++) {
	for(let j = 0; j < 5; j++) {
		if(i === 0) fighters.push( new Fighter('Fighter ' + i + j) );
		if(i === 1) fighters.push( new ImprovedFighter('Improved Fighter ' + i + j, 100, 20) );
		if(i === 2) fighters.push( new WeakFighter('WeakFighter ' + i + j) );
	}
}

// utils.getNames(apiUrl).then((persons) => {
// 	for(var fighter of fighters) {
// 		fighter.name = persons[Math.floor(Math.random() * persons.length)].name;
// 	}
// 	fight(fighters);
// }).catch((error) => {
// 	console.log(error);
// });

fight(fighters);
// fight([f, wf, imf], 3, 5 , 2, 3, 2, 3, 3, 5, 4);