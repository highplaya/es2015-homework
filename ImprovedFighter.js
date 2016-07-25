var Fighter = require('./Fighter');

class ImprovedFighter extends Fighter {
	doubleHit(enemy, point = 1) {
		super.hit(enemy, point * 2);
	}
}

module.exports = ImprovedFighter;