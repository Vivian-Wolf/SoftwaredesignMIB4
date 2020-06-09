"use strict";
var Quiz;
(function (Quiz) {
    class SingleQuestion extends Quiz.Question {
        constructor(_question, _answers) {
            super(_question);
            this.answers = _answers;
        }
        addNewQuestion(_question) {
            let neueFrage;
            let eingabe = prompt("Bitte richtige Antwort eingeben");
            this.answers.push(eingabe);
            this.addWrongAnswer(this.answers);
            neueFrage = new SingleQuestion(this.question, this.answers);
            return neueFrage;
        }
        answerQuestion() {
            let possibleAnswers = this.answers;
            let i = 0;
            let answeredCorrect = false;
            let randomizedAnswer;
            console.log(this.question);
            while (possibleAnswers.length > 0) {
                let j = Math.floor(Math.random() * possibleAnswers.length - 1);
                randomizedAnswer = possibleAnswers[j];
                possibleAnswers.splice(j, 1);
                console.log(i.toString() + ": " + randomizedAnswer[i]);
                i++;
            }
            console.log("Geben Sie die Nummer der richtigen Antwort an.");
            if (this.answers[0] == randomizedAnswer[parseInt(prompt("Geben Sie die Nummer der richtigen Antwort an."))])
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
    Quiz.SingleQuestion = SingleQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=SingleQuestion.js.map