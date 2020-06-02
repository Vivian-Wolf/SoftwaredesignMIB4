namespace Quiz {
    export abstract class Question {
        public question: string;

        constructor (_question: string) {
            this.question = _question;
        }

       // abstract answerQuestion(): boolean;
       // abstract addNewQuestion(_question: string): Question;
       // abstract addWrongAnswer(answers: string []): string [];
    }
}