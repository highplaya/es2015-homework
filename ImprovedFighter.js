var Fighter = require('./Fighter');

class ImprovedFighter extends Fighter {
	hit(enemy, point) {
		var doubleHit = Math.random() < 0.333;

		point = doubleHit ? point * 2 : point;

		super.hit(enemy, point);
	}
}

module.exports = ImprovedFighter;