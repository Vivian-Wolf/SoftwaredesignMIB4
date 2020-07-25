namespace Abschluss {
    export class NormalPerson extends Person {
        public inventory: string[] = [];

        constructor(_name: string, _position: Room, _availableLifePoints: number) {
            super();
            this.name = _name;
            this.currentRoom = _position;
            this.lifepoints = _availableLifePoints;
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