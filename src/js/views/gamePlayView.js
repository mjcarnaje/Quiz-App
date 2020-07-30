import { elements } from './base';
let scoreTotal = 0;

const createChoices = (question) => {
	let choices = [];
	for (const choice of question) {
		if (choice.correct) {
			choices.push(
				`<button class="btn btn__choice" data-correct="${choice.correct}">${choice.text}</button>`
			);
		} else {
			choices.push(`<button class="btn btn__choice">${choice.text}</button>`);
		}
	}
	return choices.join(' ');
};

export const RenderGamePlay = (question) => {
	const qC = question.questionCounter;
	const mQ = question.maxQuestions;
	const cQ = question.currentQuestion;
	const cQQ = question.currentQuestion.question;
	const cQC = question.currentQuestion.choices;
	const score = question.score;

	const markup = `
    <div class="gameplay">
        <div class="progress">
            <div class="progress__done" id="progress" style="width: 
            ${progressBar(qC, mQ)};">
            ${progressBar(qC, mQ)}
            </div>
		</div>
		<div class="header-container">
			<h2 class="heading-2 question-num">Question ${qC} <span>/ ${mQ}</span></h2>
			<div class="score">
				<h2 class="heading-2 score__text" style="line-height: 1;">Score</h2>
				<h3 class="heading-2 score__num" style="line-height: 1;">${scoreTotal}</div>
		</div>
        <h3 class="heading-3 margin-bottom-small" id="question">
			${cQQ}
			
        </h3>
		<div class="answer-buttons">
			${createChoices(cQC)}
		</div>
    </div>
    `;

	elements.gamePlayContainer.insertAdjacentHTML('beforeend', markup);
};
export const checksAnswer = () => {
	// Loop over the btn choices element
	Array.from(document.querySelectorAll('.btn__choice')).forEach((button) => {
		setStatusClass(button, button.dataset.correct);
	});
	createNextButton();
};

export const updateScore = (score) => {
	scoreTotal = +score;
	return (document.querySelector('.score__num').innerHTML = scoreTotal);
};

const createNextButton = () => {
	const nextBtn = '<button class="btn btn__next">Next Question</button>';
	document.querySelector('.gameplay').insertAdjacentHTML('beforeend', nextBtn);
};

const setStatusClass = (element, correct) => {
	if (correct) {
		element.classList.add('correct');
		element.classList.add('disable-pointer');
	} else {
		element.classList.add('wrong');
		element.classList.add('disable-pointer');
	}
};

const progressBar = (questionCounter, maxQuestion) => {
	const width = `${parseFloat((questionCounter / maxQuestion) * 100).toFixed(
		1
	)}%`;
	return width;
};
