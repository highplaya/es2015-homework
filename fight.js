function hit (fighter, fighter2, point = 1) {
	var flip = Math.random() >= 0.5;

	if (flip) {
		fighter.hit(fighter2, point);
	} else {
		fighter2.hit(fighter, point);
	}

	if (!fighter.isAlive()) {
		fighter.dead();
		return fighter;
	} else if (!fighter2.isAlive()) {
		fighter2.dead();
		return fighter2;
	}

	return false;
}

function randomFightersStrike (fighters, point = 1) {
	let firstFighterIndex = 0;
	let secondFighterIndex = 0;

	while ( secondFighterIndex === firstFighterIndex ) {
		firstFighterIndex = Math.floor(Math.random() * fighters.length);
		secondFighterIndex = Math.floor(Math.random() * fighters.length);
	}

	return hit(fighters[firstFighterIndex], fighters[secondFighterIndex], point);
}

function battle (deadFighters, aliveFighters, point = 1) {
	let dead = randomFightersStrike(aliveFighters, point);

	if ( dead ) {
		deadFighters.push( aliveFighters.splice(aliveFighters.indexOf( dead ), 1) );

		console.log(`\n>>>>> Fighters left\n`);
		for(var fighter of aliveFighters) {
			console.log(`\t  ${fighter.name} (HP: ${fighter.health})`);
		}
		console.log(`\n<<<<<\n`)
	}
}

module.exports = function fight(fighters, ...points) {
	if (fighters.length < 2 ) {
		throw "More fighters are needed!";
	}

	const deadFighters = [];
	const aliveFighters = Array.from(fighters);

	for(var point of points) {
		battle(deadFighters, aliveFighters, point);
	}

	while( aliveFighters.length !== 1 ) {
		battle(deadFighters, aliveFighters);
	}

	console.log(aliveFighters[0].name + ' WINS!');
};