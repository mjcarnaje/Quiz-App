import { elements } from '../views/base';

export default class Scores {
	constructor() {
		this.names = [];
	}

	addName(named, score) {
		const player = { named, score };

		this.names.push(player);
		return player;
	}
}
