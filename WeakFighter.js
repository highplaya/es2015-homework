var ImprovedFighter = require('./ImprovedFighter');

class WeakFighter extends ImprovedFighter {
	setDamage(damage) {
		this.protect(damage);
	}

	protect(damage){
		super.setDamage(damage/2);
	}
}
module.exports = WeakFighter;