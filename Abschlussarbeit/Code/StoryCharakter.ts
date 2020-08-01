namespace Abschluss {
    export class StoryCharacter extends Person {

        constructor(_name: string, _position: Room, _availableLifePoints: number, _canWalkByThemselve: boolean) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = false;
            this.canWalkByThemselve = _canWalkByThemselve;
        }
        public speak(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphStoryCharakter");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
            createBodyElements();
        }
    }
}