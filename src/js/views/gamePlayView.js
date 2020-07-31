import { elements } from './base';

export const updateScore = (score) => {
	if (!score) {
		score = 0;
		return score;
	}
	return (document.querySelector('.score__num').textContent = score);
};

export const setStatusClass = (element, correct) => {
	if (correct) {
		element.classList.add('correct');
		element.classList.add('disable-pointer');
	} else {
		element.classList.add('wrong');
		element.classList.add('disable-pointer');
	}
};

export const createNextButton = () => {
	const nextBtn = '<button class="btn btn__next">Next Question</button>';
	document.querySelector('.gameplay').insertAdjacentHTML('beforeend', nextBtn);
};

export const RenderGamePlay = (questions) => {
	const {
		questionCounter,
		maxQuestions,
		score,
		currentQuestion: { question, choices },
	} = questions;

	const markup = `
    <div class="gameplay">
        <div class="progress">
            <div class="progress__done" id="progress" style="width: 
            ${progressBar(questionCounter, maxQuestions)};">
            ${progressBar(questionCounter, maxQuestions)}
            </div>
		</div>
		<div class="header-container">
			<h2 class="heading-2 question-num">Question ${questionCounter} <span>/ ${maxQuestions}</span></h2>
			<div class="score">
				<h2 class="heading-2 score__text" style="line-height: 1;">Score</h2>
				<h3 class="heading-2 score__num" style="line-height: 1;">${score}</div>
		</div>
        <h3 class="heading-3 margin-bottom-small" id="question">
			${question}
			
        </h3>
		<div class="answer-buttons">
			${createChoices(choices)}
		</div>
    </div>
    `;

	elements.gamePlayContainer.insertAdjacentHTML('beforeend', markup);
};
const createChoices = (choices) => {
	const markup = choices
		.map((el) => {
			if (el.correct) {
				return `<button class="btn btn__choice" data-correct="${el.correct}">${el.text}</button>`;
			}
			return `<button class="btn btn__choice">${el.text}</button>`;
		})
		.join(' ');

	return markup;
};

const progressBar = (count, max) => {
	const width = `${parseFloat((count / max) * 100).toFixed(1)}%`;
	return width;
};
