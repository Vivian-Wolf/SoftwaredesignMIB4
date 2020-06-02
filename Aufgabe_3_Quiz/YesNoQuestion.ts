namespace Quiz {
    export class YesNoQuestion extends Question {
        isAnswerTrue: boolean;

        constructor(_question: string, _isAnswerTrue: boolean) {
            super (_question);
        }


    }
}