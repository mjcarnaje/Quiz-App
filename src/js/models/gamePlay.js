import { elements } from '../views/base';

let questions = [];
let points = 10;

export default class gameState {
	constructor() {
		this.currentQuestion = {};
	}
	async getQuestions() {
		let respond = await fetch('Questions.json');
		let data = await respond.json();
		questions = await data;
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
	}
	updateScore(e) {
		const selectedButton = e.target;
		const correct = selectedButton.dataset.correct;

		if (correct) {
			this.score += points;
		} else {
			return this.score;
		}
	}
}
