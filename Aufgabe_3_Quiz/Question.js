"use strict";
var Quiz;
(function (Quiz) {
    class Question {
        constructor(_question) {
            this.question = _question;
        }
        addWrongAnswer(_answers) {
            let wrongAnswer;
            let auswahl;
            wrongAnswer = prompt("Falsche Antwort eingeben");
            _answers.push(wrongAnswer);
            while (auswahl != 1) {
                auswahl = parseInt(prompt("Weitere Antwortmöglichkeiten eingeben? 1: Ja, 2: Nein"));
                if (auswahl == 1) {
                    wrongAnswer = prompt("Falsche Antwort eingeben");
                    _answers.push(wrongAnswer);
                    auswahl = 2;
                }
                else
                    break;
            }
            return _answers;
        }
    }
    Quiz.Question = Question;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=Question.js.map