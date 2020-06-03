namespace Quiz {
    export class TextQuestion extends Question {
        answer: string;

        constructor(_question: string, _answer: string) {
            super(_question);
            this.answer = _answer;
        }

        addNewQuestion(_question: string): TextQuestion {
            let rightAnswer: string;
            rightAnswer = prompt("Bitte richtige Antwort eingeben.");
            let neueFrage: TextQuestion = new TextQuestion(_question, rightAnswer);
            return neueFrage;
        }
        
        answerQuestion(): boolean {
            console.log(this.question);
            let inputSave: string;
            inputSave = prompt("Bitte geben Sie Ihre Antwort ein (achten Sie dabei auf Groß- und Kleinschreibung).");
            let answeredCorrect: boolean = false;
            if (this.answer == inputSave)
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
}