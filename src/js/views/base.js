export const elements = {
	//Play again(score, name, save)
	score: document.querySelector('.playagain__score'),
	name: document.getElementById('name-input'),
	save: document.querySelector('.save'),

	// Containers
	highScoreContainer: document.querySelector('.container-highscore'),
	homeContainer: document.querySelector('.home-container'),
	gamePlayContainer: document.querySelector('.container-gameplay'),
	playAgainContaineer: document.querySelector('.container-playagain'),
};

export const clearContainer = () => {
	elements.homeContainer.innerHTML = '';
	elements.gamePlayContainer.innerHTML = '';
	elements.playAgainContaineer.innerHTML = '';
	elements.highScoreContainer.innerHTML = '';
};
