"use strict";
var Quiz;
(function (Quiz) {
    class GuessQuestion extends Quiz.Question {
        constructor(_question, _answer, _tolerance) {
            super(_question);
            this.answer = _answer;
            this.tolerance = _tolerance;
        }
        addNewQuestion(_question) {
            this.answer = parseInt(prompt("Bitte richtigen Wert eingeben"));
            this.tolerance = parseInt(prompt("Bitte Toleranzbereich eingeben."));
            let neueFrage = new GuessQuestion(_question, this.answer, this.tolerance);
            return neueFrage;
        }
        answerQuestion() {
            console.log(this.question);
            let inputSave;
            inputSave = parseInt(prompt("Bitte geben Sie Ihre Antwort ein."));
            let answeredCorrect = false;
            if ((this.answer - this.tolerance) <= inputSave && inputSave <= (this.answer - this.tolerance))
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
    Quiz.GuessQuestion = GuessQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=GuessQuestion.js.map