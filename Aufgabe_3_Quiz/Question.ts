namespace Quiz {
    export abstract class Question {
        public question: string;

        constructor(_question: string) {
            this.question = _question;
        }

        abstract answerQuestion(): boolean;
        abstract addNewQuestion(_question: string): Question;
        
        addWrongAnswer(_answers: string[]): string[] {
            let wrongAnswer: string;
            let auswahl: number;
            wrongAnswer = prompt("Falsche Antwort eingeben");
            _answers.push(wrongAnswer);
            while (auswahl != 1) {
                auswahl = parseInt(prompt("Weitere Antwortmöglichkeiten eingeben? 1: Ja, 2: Nein"));
                if (auswahl == 1) {
                    wrongAnswer = prompt("Falsche Antwort eingeben");
                    _answers.push(wrongAnswer);
                    auswahl = 2;
                } else
                    break;
            }
            return _answers;
        }
    }
}