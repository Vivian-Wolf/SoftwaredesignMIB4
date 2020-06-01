"use strict";
var Quiz;
(function (Quiz) {
    class GuessQuestion {
        constructor(_rightAnswer, _radius) {
            this.rightAnswer = _rightAnswer;
            this.guessRadius = _radius;
            this.upperBorder = _rightAnswer * (1 + _radius);
            this.lowerBorder = _rightAnswer * (1 - _radius);
        }
    }
    let newQuestion = new GuessQuestion(12, 0.3);
    console.log(newQuestion.upperBorder + " ; " + newQuestion.lowerBorder);
})(Quiz || (Quiz = {}));
//# sourceMappingURL=main.js.map