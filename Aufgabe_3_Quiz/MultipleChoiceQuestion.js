"use strict";
var Quiz;
(function (Quiz) {
    class MultipleChoiceQuestion extends Quiz.Question {
        constructor(_question, _rightAnswers, _answers) {
            super(_question);
            this.rightAnswers = _rightAnswers;
            this.answers = _answers;
        }
        addNewQuestion(_question) {
            let neueFrage;
            let answers;
            let rightAnswer = 0;
            let eingabe = 0;
            while (eingabe != 1) {
                console.log("(Weitere) Richtige Antwortmöglichkeiten eingeben? 1: Ja, 2: Nein");
                answers.push(prompt("Bitte richtige Antwort eingeben"));
                rightAnswer++;
            }
            this.addWrongAnswer(answers);
            neueFrage = new MultipleChoiceQuestion(this.question, this.rightAnswers, answers);
            return neueFrage;
        }
    }
    Quiz.MultipleChoiceQuestion = MultipleChoiceQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=MultipleChoiceQuestion.js.map