import { elements } from './base';

export const renderPlayAgain = (score, maxQuestion) => {
	const markup = `
    <div class="playagain">
        <h1 class="heading-1 playagain__score margin-bottom-medium">
            ${score} <span class="heading-1__span">points</span>
        </h1>
        <h2 class="heading-2 margin-bottom-small">${
					score / 10
				} out ${maxQuestion} </h2>
        <div class="playagain__btn-container">
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
