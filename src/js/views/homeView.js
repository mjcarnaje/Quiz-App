import { element, elements } from './base';

export const renderHomeView = () => {
	const markup = `
    <div class="home">
		<h1 class="heading-1">
			Quiz App
		</h1>
        <div class="button-container">
            <button class="btn btn__home start-btn">
                Start Game
            </button>
            <button class="btn btn__home high-score-btn">
                High Score
            </button>
        </div>
	</div>
    `;
	elements.homeContainer.insertAdjacentHTML('beforeend', markup);
};
