function hit (fighter, improvedFighter, point = 1) {
	var flip = Math.random() >= 0.5;

	if (flip) {
		fighter.hit(improvedFighter, point);
	} else {
		improvedFighter.hit(fighter, point);
	}

	if (!fighter.isAlive()) {
		fighter.dead();
		return true;
	} else if (!improvedFighter.isAlive()) {
		improvedFighter.dead();
		return true;
	}

	return false;
}

module.exports = function fight(fighter, improvedFighter, ...points) {
	for(var point of points) {
		if( hit(fighter, improvedFighter, point) ) break;
	}

	while(fighter.isAlive() && improvedFighter.isAlive()){
		hit(fighter, improvedFighter);
	}
};