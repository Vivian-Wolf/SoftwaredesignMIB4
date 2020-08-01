namespace Abschluss {
    export class NormalPerson extends Person {

        public speakPossibilities: string[];

        constructor(_name: string, _position: Room, _availableLifePoints: number, _canWalkByThemselve: boolean, _speakPossibilities: string[]) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = false;
            this.canWalkByThemselve = _canWalkByThemselve;
            this.speakPossibilities = _speakPossibilities;
        }
        public speak(): void {
            let paragraph: HTMLElement = document.createElement("P");
            let randomNumber: number = Math.floor(Math.random() * this.speakPossibilities.length);
            paragraph.innerText = "" + this.name + " sagt: " + this.speakPossibilities[randomNumber];
            document.body.appendChild(paragraph);
            createBodyElements();
        }
    }
}