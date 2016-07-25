class Fighter {
	constructor(name = 'NoName', power = 5, health = 100) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;
		console.log(`-${damage} to ${this.name} (HP: ${this.health})`);
	}

	hit(enemy, point = 1) {
		enemy.setDamage(this.power * point);
	}

	dead() {
		console.log(`${this.name} is dead`);
	}

	isAlive() {
		return this.health > 0;
	}
}

module.exports = Fighter;