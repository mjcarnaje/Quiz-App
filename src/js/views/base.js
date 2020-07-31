export const elements = {
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
