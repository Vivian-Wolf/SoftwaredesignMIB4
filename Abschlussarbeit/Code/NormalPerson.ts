namespace Abschluss {
    export class NormalPerson extends Person {

        constructor(_name: string, _position: Room, _availableLifePoints: number) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = false;
        }
        public speak(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphNormalPerson");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
            createBodyElements();
        }
    }
}