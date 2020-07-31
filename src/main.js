import './scss/main.scss';
import { elements, clearContainer } from './js/views/base';

import * as gamePlayView from './js/views/gamePlayView';
import * as playAgainView from './js/views/playAgainView';
import * as homeView from './js/views/homeView';
import gameState from './js/models/gamePlay';

const state = {};
window.state = state;

window.onload = homeView.renderHomeView;
const controlStartGame = async () => {
	state.questions = new gameState();

	// Clear the Home Container
	clearContainer();

	// Get the questions and start game
	try {
		await state.questions.getQuestions();
		await state.questions.startGame();
	} catch (err) {
		console.log(err);
	}

	// Render the first question
	updateQuestion();
};

const nextQuestion = () => {
	// clear the Game Container
	clearContainer();

	// Set the next Question
	state.questions.setNewQuestion();

	// Render the next Question or the play again when there is no questions left.
	if (state.questions.remainingQuestions > 0) {
		updateQuestion();
	} else {
		playAgainView.renderPlayAgain(
			state.questions.score,
			state.questions.maxQuestions
		);
		gamePlayView.updateScore();
	}
};

// Update Question
const updateQuestion = () => {
	gamePlayView.RenderGamePlay(state.questions);
	document.querySelectorAll('.btn__choice').forEach((el) =>
		el.addEventListener('click', (e) => {
			checkAns();
			state.questions.updateScore(e);
			gamePlayView.updateScore(state.questions.score);
		})
	);
};

//* Event Listeners

eventDelegateEvent(document, 'click', '.start-btn', controlStartGame);
eventDelegateEvent(document, 'click', '.btn__next', nextQuestion);
eventDelegateEvent(document, 'click', '.restart', playAgain);
eventDelegateEvent(document, 'click', '.gotohome', goToHome);

function checkAns() {
	document.querySelectorAll('.btn__choice').forEach((button) => {
		gamePlayView.setStatusClass(button, button.dataset.correct);
	});
	gamePlayView.createNextButton();
}

function playAgain() {
	clearContainer();
	controlStartGame();
	gamePlayView.updateScore();
}

function goToHome() {
	clearContainer();
	homeView.renderHomeView();
}

function eventDelegateEvent(element, event, selector, cb) {
	element.addEventListener(event, (e) => {
		if (e.target.matches(selector)) {
			cb();
		}
	});
}
