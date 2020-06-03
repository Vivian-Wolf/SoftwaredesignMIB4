"use strict";
var Quiz;
(function (Quiz) {
    class YesNoQuestion extends Quiz.Question {
        constructor(_question, _isAnswerTrue) {
            super(_question);
            this.isAnswerTrue = _isAnswerTrue;
        }
        addNewQuestion(_question) {
            let neueFrage;
            let isAnswerTrue;
            let eingabe;
            console.log("Bitte angeben ob die Frage bejaht oder verneint werden soll. 1: Ja, 2: Nein");
            eingabe = parseInt(prompt("Bitte angeben ob die Frage bejaht oder verneint werden soll. 1: Ja, 2: Nein"));
            if (eingabe == 1)
                isAnswerTrue = true;
            neueFrage = new YesNoQuestion(this.question, isAnswerTrue);
            return neueFrage;
        }
        answerQuestion() {
            console.log(this.question);
            let answeredCorrect;
            console.log("Ist das wahr? 1: Ja, 2: Nein");
            let eingabe = parseInt(prompt("1: Ja, 2: Nein"));
            if (eingabe == 1)
                if (this.isAnswerTrue == true)
                    answeredCorrect = true;
                else
                    answeredCorrect = false;
            else if (this.isAnswerTrue == true)
                answeredCorrect = false;
            else
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
    Quiz.YesNoQuestion = YesNoQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=YesNoQuestion.js.map