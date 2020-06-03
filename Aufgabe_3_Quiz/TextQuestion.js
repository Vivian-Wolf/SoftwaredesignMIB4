"use strict";
var Quiz;
(function (Quiz) {
    class TextQuestion extends Quiz.Question {
        constructor(_question, _answer) {
            super(_question);
            this.answer = _answer;
        }
        addNewQuestion(_question) {
            let rightAnswer;
            rightAnswer = prompt("Bitte richtige Antwort eingeben.");
            let neueFrage = new TextQuestion(_question, rightAnswer);
            return neueFrage;
        }
        answerQuestion() {
            console.log(this.question);
            let inputSave;
            inputSave = prompt("Bitte geben Sie Ihre Antwort ein (achten Sie dabei auf Groß- und Kleinschreibung).");
            let answeredCorrect = false;
            if (this.answer == inputSave)
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
    Quiz.TextQuestion = TextQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=TextQuestion.js.map