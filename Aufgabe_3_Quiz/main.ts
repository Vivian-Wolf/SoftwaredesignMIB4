namespace Quiz {
    
    let punktestand: number = 0;
    let fragen: Question [];
    let i: number;

    while (i != 3) {
        console.log("1 eingeben: Quizfrage beantworten, 2 eingeben: Frage hinzufügen, 3 eingeben: Verlassen");
        i = parseInt(prompt("1 eingeben: Quizfrage beantworten, 2 eingeben: Frage hinzufügen, 3 eingeben: Verlassen"));
        if (i == 1) {
            let correct: boolean;
            correct = answerRandomQuestion(fragen);
            if (correct == true)
                punktestand++;
            else
                console.log(correct);
        } else if (i == 2)
            customQuestionBuilder();
        else
            console.log("Um das Programm neu zu starten, laden Sie bitte die Seite neu");    
    }

    function answerRandomQuestion(_fragen: Question[]): boolean {
        let wasAnswerCorrect: boolean;
        let i: number = Math.floor(Math.random() * _fragen.length - 1);
        wasAnswerCorrect = _fragen[i].answerQuestion();
        return wasAnswerCorrect;
    }

    function customQuestionBuilder(): void {
        let questionType: number;
        let neueFrage: Question;
        let question: string;

        questionType = parseInt(prompt("Fragentyp wählen: 1 = einfache Frage, 2 = Ja-/Nein-Frage, 3 = Multiple-Choice-Frage, 4 = Schätzfrage, 5 =Textfrage"));
        question = prompt("Bitte neue Frage eingeben");

        switch (questionType){
            case 1:
                neueFrage = SingleQuestion.addNewQuestion;
                break;
        }

    }
}