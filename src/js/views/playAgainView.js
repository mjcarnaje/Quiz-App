import { elements } from './base';

export const renderPlayAgain = (score) => {
	const markup = `
    <div class="playagain">
        <h1 class="heading-1 playagain__score margin-bottom-medium">
            ${score}
        </h1>
        <input
            type="text"
            class="playagain__input margin-bottom-medium"
            id="name-input"
            placeholder="Username">
        <div class="playagain__btn-container">
            <button class="btn btn__playagain save" >
                Save
            </button>
            <button class="btn btn__playagain restart">
                Play Again
            </button>
            <button class="btn btn__playagain gotohome">
                Home
            </button>
        </div>
    </div>
    `;
	elements.playAgainContaineer.insertAdjacentHTML('beforeend', markup);
};

export const getInput = () => {
	const nameValue = document.getElementById('name-input').value;
	return nameValue;
};
export const getScore = (score) => {
	const playerScore = score.score;
	return playerScore;
};

export const clearInput = () => {
	document.getElementById('name-input').value = '';
};
