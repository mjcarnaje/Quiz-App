import { elements } from '../views/base';

let acceptingAnswers = false;
let questions = [];
let points = 10;

export default class gameState {
	constructor() {
		this.currentQuestion = {};
	}
	async getQuestions() {
		await fetch('Questions.json')
			.then((res) => {
				return res.json();
			})
			.then((loadedQuestions) => {
				questions = loadedQuestions;
				this.startGame();
			})
			.catch((err) => {
				console.error(err);
			});
	}
	startGame() {
		this.availableQuestion = [...questions];
		this.maxQuestions = this.availableQuestion.length;
		this.questionCounter = 0;
		this.score = 0;

		this.setNewQuestion();
	}
	setNewQuestion() {
		this.questionCounter++;
		this.remainingQuestions = this.availableQuestion.length;

		// Set the next question
		const questionIndex = Math.floor(Math.random() * this.remainingQuestions);
		this.currentQuestion = this.availableQuestion[questionIndex];

		// Remove the current question
		this.availableQuestion.splice(questionIndex, 1);
		acceptingAnswers = true;
	}
	updateScore(e) {
		const selectedButton = e.target;
		const correct = selectedButton.dataset.correct;

		if (correct) {
			this.score += points;
			console.log('God is good.');
		} else {
			return this.score;
			console.log('God is good.');
		}
	}
}
