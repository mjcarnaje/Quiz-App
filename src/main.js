import './scss/main.scss';
import { elements, clearContainer } from './js/views/base';

import * as gamePlayView from './js/views/gamePlayView';
import * as playAgainView from './js/views/playAgainView';
import * as homeView from './js/views/homeView';
import * as highScoreView from './js/views/highScoreView';
import gameState from './js/models/gamePlay';
import Scores from './js/models/highScore';

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
		playAgainView.renderPlayAgain(state.questions.score);
	}
};

// Update Question
const updateQuestion = () => {
	gamePlayView.RenderGamePlay(state.questions);
	document.querySelectorAll('.btn__choice').forEach((el) =>
		el.addEventListener('click', (e) => {
			gamePlayView.checksAnswer();
			state.questions.updateScore(e);
			gamePlayView.updateScore(state.questions.score);
			console.log(state.questions.score);
		})
	);
};

state.player = new Scores();

const saveScore = () => {
	const name = playAgainView.getInput();
	const score = playAgainView.getScore(state.questions);
	state.player.addName(name, score);
};

//* Event Listeners

// When the start button and high score button is clicked
elements.homeContainer.addEventListener('click', (e) => {
	if (e.target.matches('.start-btn')) {
		controlStartGame();
	} else if (e.target.matches('.high-score-btn')) {
		clearContainer();
		highScoreView.renderHighScoreView();
	}
});

// When home button is clicked in highScoreContainer
elements.highScoreContainer.addEventListener('click', (e) => {
	if (e.target.matches('.gotohome')) {
		clearContainer();
		homeView.renderHomeView('Michael', 'Score');
	}
});

// When the next question button is clicked
elements.gamePlayContainer.addEventListener('click', (e) => {
	if (e.target.matches('.btn__next')) {
		nextQuestion();
	}
});

// When play again button or home button is clicked
elements.playAgainContaineer.addEventListener('click', (e) => {
	if (e.target.matches('.restart')) {
		clearContainer();
		controlStartGame();
		setTimeout(() => {
			gamePlayView.updateScore(state.questions.score);
		}, 20);
	} else if (e.target.matches('.gotohome')) {
		clearContainer();
		homeView.renderHomeView();
	} else if (e.target.matches('.save')) {
		saveScore();
	}
});
