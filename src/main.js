import './scss/main.scss';
import { elements } from './js/views/base';

import * as gamePlayView from './js/views/gamePlayView';
import gameState from './js/models/gamePlay';

const state = {};
window.state = state;
const controlStartGame = () => {
	state.questions = new gameState();

	// Clear the Home Container
	gamePlayView.clearContainer();

	// Get the question
	state.questions.getQuestions();

	// Render Gameplay
	setTimeout(() => {
		gamePlayView.RenderGamePlay(state.questions);
	}, 50);
};

elements.startButton.addEventListener('click', controlStartGame);
