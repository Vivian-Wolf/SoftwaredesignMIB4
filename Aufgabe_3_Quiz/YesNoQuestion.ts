namespace Quiz {
    export class YesNoQuestion extends Question {
        isAnswerTrue: boolean;

        constructor(_question: string, _isAnswerTrue: boolean) {
            super(_question);
            this.isAnswerTrue = _isAnswerTrue;
        }

        addNewQuestion(_question: string): YesNoQuestion {
            let neueFrage: YesNoQuestion;
            let isAnswerTrue: boolean;
            let eingabe: number;

            console.log("Bitte angeben ob die Frage bejaht oder verneint werden soll. 1: Ja, 2: Nein");
            eingabe = parseInt(prompt("Bitte angeben ob die Frage bejaht oder verneint werden soll. 1: Ja, 2: Nein"));
            if (eingabe == 1)
                isAnswerTrue = true;
            neueFrage = new YesNoQuestion(this.question, isAnswerTrue);
            return neueFrage;
        }

        answerQuestion(): boolean {
            console.log(this.question);
            let answeredCorrect: boolean;
            console.log("Ist das wahr? 1: Ja, 2: Nein");
            let eingabe: number = parseInt(prompt("1: Ja, 2: Nein"));
            if (eingabe == 1)
                if (this.isAnswerTrue == true)
                    answeredCorrect = true;
                else
                    answeredCorrect = false;
            else
                if (this.isAnswerTrue == true)
                    answeredCorrect = false;
                else
                    answeredCorrect = true;
            return answeredCorrect;
        }
    }
}