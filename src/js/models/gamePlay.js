import { elements } from '../views/base';

let acceptingAnswers = false;
const correctScore = 10;
let questions = [];

export default class gameState {
	constructor() {
		this.availableQuestion = [];
		this.currentQuestion = {};
		this.score = 0;
		this.questionCounter = 0;
		this.maxQuestions = 0;
	}

	getQuestions() {
		fetch('Questions.json')
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

		this.questionCounter++;
		this.setNewQuestion();
	}
	setNewQuestion() {
		const questionIndex = Math.floor(Math.random() * this.maxQuestions);
		this.currentQuestion = this.availableQuestion[questionIndex];

		this.availableQuestion.splice(questionIndex, 1);
		acceptingAnswers = true;
	}
}
