namespace Quiz {
    export class GuessQuestion extends Question {
        answer: number;
        tolerance: number;

        constructor(_question: string, _answer: number, _tolerance: number) {
            super(_question);
            this.answer = _answer;
            this.tolerance = _tolerance;
        }

        addNewQuestion(_question: string): GuessQuestion {
            this.answer = parseInt(prompt("Bitte richtigen Wert eingeben"));
            this.tolerance = parseInt(prompt("Bitte Toleranzbereich eingeben."));
            let neueFrage: GuessQuestion = new GuessQuestion(_question, this.answer, this.tolerance);
            return neueFrage;
        }

        answerQuestion(): boolean {
            console.log(this.question);
            let inputSave: number;
            inputSave = parseInt(prompt("Bitte geben Sie Ihre Antwort ein."));
            let answeredCorrect: boolean = false;
            if ((this.answer - this.tolerance) <= inputSave && inputSave <= (this.answer - this.tolerance))
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
}