namespace Abschluss {
    export class Enemy extends Person {

        constructor(_name: string, _position: Room, _availableLifePoints: number) {
            super();
            this.name = _name;
            this.currentRoom = _position;
            this.posX = this.currentRoom.posX;
            this.posY = this.currentRoom.posY;
            this.lifepoints = _availableLifePoints;
            this.canBeAttacked = true;
        }

        public speak(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphEnemy");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
        }
    }
}