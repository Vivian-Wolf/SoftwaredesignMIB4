"use strict";
var Quiz;
(function (Quiz) {
    let punktestand = 0;
    let fragen;
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
        let neueFrage;
        let question;
        questionType = parseInt(prompt("Fragentyp wählen: 1 = einfache Frage, 2 = Ja-/Nein-Frage, 3 = Multiple-Choice-Frage, 4 = Schätzfrage, 5 =Textfrage"));
        question = prompt("Bitte neue Frage eingeben");
        switch (questionType) {
            case 1:
                neueFrage = Quiz.SingleQuestion.addNewQuestion();
                break;
            case 2:
                neueFrage = Quiz.YesNoQuestion.addNewQuestion();
                break;
            case 3:
                neueFrage = Quiz.MultipleChoiceQuestion.addNewQuestion();
                break;
            case 4:
                neueFrage = Quiz.GuessQuestion.addNewQuestion();
                break;
            case 5:
                neueFrage = Quiz.TextQuestion.addNewQuestion();
                break;
        }
        fragen.push(neueFrage);
    }
})(Quiz || (Quiz = {}));
//# sourceMappingURL=main.js.map