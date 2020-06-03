namespace Quiz {
    export class MultipleChoiceQuestion extends Question {
        answers: string[];
        rightAnswers: number[];

        constructor(_question: string, _rightAnswers: number[], _answers: string[]) {
            super(_question);
            this.rightAnswers = _rightAnswers;
            this.answers = _answers;
        }

        addNewQuestion(_question: string): MultipleChoiceQuestion {
            let neueFrage: MultipleChoiceQuestion;
            let answers: string[];
            let rightAnswer: number = 0;
            let eingabe: number = 0;

            while (eingabe != 1) {
                console.log("(Weitere) Richtige Antwortmöglichkeiten eingeben? 1: Ja, 2: Nein");
                answers.push(prompt("Bitte richtige Antwort eingeben"));
                rightAnswer++;
            }
            this.addWrongAnswer(answers);

            neueFrage = new MultipleChoiceQuestion(this.question, this.rightAnswers, answers);
            return neueFrage;
        }

        answerQuestion(): boolean {
            let possibleAnswers: string[] = this.answers;
            let i: number = 0;
            let answeredCorrect: boolean = false;
            let randomizedAnswers: string[];

            console.log(this.question);

            while (randomizedAnswers.length > 0) {
                let j: number = Math.floor(Math.random() * possibleAnswers.length - 1);
                randomizedAnswers[i] = possibleAnswers[j];
                possibleAnswers.splice(j, 1);
                console.log(i.toString() + ": " + randomizedAnswers[i]);
                i++;
            }
            console.log("Geben Sie die Nummer der richtigen Antwort ein und trennen Sie sie mit ',' voneinander. Wenn keine Antwort richtig ist geben Sie '-' ein.");
            let eingabe: string = prompt("Geben Sie die Nummer der richtigen Antwort ein und trennen Sie sie mit ',' voneinander. Wenn keine Antwort richtig ist geben Sie '-' ein.");
            if (eingabe == "-" && this.rightAnswers.length == 0)
                answeredCorrect = true;
            else if (eingabe == "-" && this.rightAnswers.length != 0)
                answeredCorrect = false;
            else {
                let eingabeSplitted: string[] = eingabe.split(",");
                let j: number;
                while (eingabeSplitted.length > 0) {
                    j = parseInt(eingabeSplitted[0]);
                    eingabeSplitted.splice(0, 1);
                    if (this.answers.indexOf(randomizedAnswers[j]) <= this.rightAnswers.length - 1)
                        answeredCorrect = true;
                    else
                        answeredCorrect = false;
                }
            }
            return answeredCorrect;
        }
    }
}