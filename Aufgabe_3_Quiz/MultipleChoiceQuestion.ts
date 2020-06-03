namespace Quiz {
    export class MultipleChoiceQuestion extends Question {
        answers: string[];
        rightAnswers: number[];

        constructor(_question: string, _rightAnswers: number [], _answers: string[]) {
            super(_question);
            this.rightAnswers = _rightAnswers;
            this.answers = _answers;
        }

        addNewQuestion(_question: string): MultipleChoiceQuestion {
        let neueFrage: MultipleChoiceQuestion;
        let answers: string [];
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
    }
}