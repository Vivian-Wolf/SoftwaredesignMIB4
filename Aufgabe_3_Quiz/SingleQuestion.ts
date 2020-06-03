namespace Quiz {
    export class SingleQuestion extends Question {
        answers: string [];

        constructor(_question: string, _answers: string []) {
            super(_question);
            this.answers = _answers;
        }

        addNewQuestion(_question: string): SingleQuestion {
            let neueFrage: SingleQuestion;
            let eingabe: string = prompt("Bitte richtige Antwort eingeben");

            this.answers.push(eingabe);
            this.addWrongAnswer(this.answers);
            neueFrage = new SingleQuestion(this.question, this.answers);

            return neueFrage;
        }

        answerQuestion(): boolean {
            let possibleAnswers: string [];
            let i: number = 0;
            let answeredCorrect: boolean = false;
            let randomizedAnswer: string;

            console.log(this.question);
            
            while (randomizedAnswer.length > 0) {
            let j: number = Math.floor(Math.random() * possibleAnswers.length - 1);
            randomizedAnswer = possibleAnswers[j];
            possibleAnswers.splice(j, 1);
            console.log (i.toString() + ": " + randomizedAnswer[i]);
            i++;
            }
            console.log("Geben Sie die Nummer der richtigen Antwort an.");
            if (this.answers[0] == randomizedAnswer[parseInt(prompt("Geben Sie die Nummer der richtigen Antwort an."))])
                answeredCorrect = true;
            return answeredCorrect;
        }
    }
}