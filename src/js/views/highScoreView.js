import { elements } from './base';

const createNewPlayer = (name, score) => {
	const markup = `
    <h3 class="heading-3">${name} &mdash; ${score}</h3>
    `;
};

export const renderHighScoreView = (player, score) => {
	const markup = `
    <div class="highscore">
        <h1 class="heading-1 heading-1__highscore">High Score</h1>
        <div class="namesHighScore margin-bottom-medium">
            ${createNewPlayer(player, score)}
        </div>
        <button class="btn btn__home gotohome">Home</button>
    </div> 
    `;
	elements.highScoreContainer.insertAdjacentHTML('beforeend', markup);
};
