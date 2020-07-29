import { elements } from './base';

export const clearContainer = () => {
	elements.homeContainer.innerHTML = '';
};

const createNextButton = (maxQuestion, questionCounter) => {
	if (maxQuestion > questionCounter) {
		return '<button class="btn btn__next">Next Question</button>';
	}
	return '<button class="btn btn__next hide">Next Question</button>';
};

const createChoices = (question) => {
	let choices = [];
	for (const choice of question) {
		if (choice.correct) {
			choices.push(
				`<button class="btn btn__choice" data-correct="${choice.correct}">${choice.text}</button>`
			);
		} else {
			choices.push(
				`<button class="btn btn__choice" data-correct="${choice.correct}">${choice.text}</button>`
			);
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

	const markup = `
    <div class="gameplay">
        <div class="progress">
            <div class="progress__done" id="progress" style="width: 
            ${progressBar(qC, mQ)};">
            ${progressBar(qC, mQ)}
            </div>
        </div>
		<h2 class="heading-2 question-num margin-bottom-small">
            Question ${qC} <span>/ ${mQ}</span>
        </h2>
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

const checksAnswer = (e) => {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;

	Array.from(elements.answersContainer.children).forEach((choice) => {
		setStatusClass(choice, choice.dataset.correct);
	});
};

const setStatusClass = (element, correct) => {
	clearStatusClass(element);
	if (correct) {
		element.classList.add('correct');
	} else {
		element.classList.add('wrong');
	}
};

const clearStatusClass = (element) => {
	element.classList.remove('correct');
	element.classList.remove('wrong');
};

const progressBar = (questionCounter, maxQuestion) => {
	const width = `${parseFloat((questionCounter / maxQuestion) * 100).toFixed(
		1
	)}%`;
	return width;
};
