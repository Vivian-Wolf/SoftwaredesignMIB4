"use strict";
var Quiz;
(function (Quiz) {
    let punktestand = 0;
    let fragen = [];
    let i;
    while (i != 3) {
        console.log("1 eingeben: Quizfrage beantworten, 2 eingeben: Frage hinzufügen, 3 eingeben: Verlassen");
        i = parseInt(prompt("1 eingeben: Quizfrage beantworten, 2 eingeben: Frage hinzufügen, 3 eingeben: Verlassen"));
        if (i == 1) {
            let correct;
            correct = answerRandomQuestion(fragen);
            if (correct == true) {
                console.log("Richtig! Du hast einen Punkt für deine Antwort erhalten!");
                punktestand++;
            }
            else {
                console.log("Falsch!");
            }
        }
        else if (i == 2)
            customQuestionBuilder();
        else
            console.log("Um das Programm neu zu starten, laden Sie bitte die Seite neu");
    }
    function answerRandomQuestion(_fragen) {
        let wasAnswerCorrect;
        let i = Math.floor(Math.random() * _fragen.length - 1);
        wasAnswerCorrect = _fragen[i].answerQuestion();
        return wasAnswerCorrect;
    }
    function customQuestionBuilder() {
        let questionType;
        let question;
        questionType = parseInt(prompt("Fragentyp wählen: 1 = einfache Frage, 2 = Ja-/Nein-Frage, 3 = Multiple-Choice-Frage, 4 = Schätzfrage, 5 =Textfrage"));
        question = prompt("Bitte neue Frage eingeben");
        switch (questionType) {
            case 1:
                let newSingleQuestion = new Quiz.SingleQuestion(question, []);
                newSingleQuestion.addNewQuestion(question);
                fragen.push(newSingleQuestion);
                break;
            case 2:
                let newYesNoQuestion = new Quiz.YesNoQuestion(question, false);
                newYesNoQuestion.addNewQuestion(question);
                fragen.push(newYesNoQuestion);
                break;
            case 3:
                let newMultipleChoiceQuestion = new Quiz.MultipleChoiceQuestion(question, [], []);
                newMultipleChoiceQuestion.addNewQuestion(question);
                fragen.push(newMultipleChoiceQuestion);
                break;
            case 4:
                let newGuessQuestion = new Quiz.GuessQuestion(question, 0, 0);
                newGuessQuestion.addNewQuestion(question);
                fragen.push(newGuessQuestion);
                break;
            case 5:
                let newTextQuestion = new Quiz.TextQuestion(question, "");
                newTextQuestion.addNewQuestion(question);
                fragen.push(newTextQuestion);
                break;
        }
    }
})(Quiz || (Quiz = {}));
//# sourceMappingURL=main.js.map