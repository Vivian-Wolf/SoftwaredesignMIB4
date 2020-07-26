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

        public attack(): void {
            let randomNumber: number;
            randomNumber = Math.floor(Math.random() * 3) + 1;

            if (randomNumber == 1) {
                this.wonBattle();
            }
            else {
                this.lostBattle();
            }
        }

        public lostBattle(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle verloren.";
            document.body.appendChild(paragraph);

            player.lifepoints -= 20;

            if (player.lifepoints > 0) {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Dir bleiben noch " + player.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
                createBodyElements();
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Du bist auf tragische Weise im Battle gestorben. Deine Taten werden zukünftig lediglich in Legenden erzählt.";
                document.body.appendChild(paragraph);
            }
        }

        public wonBattle(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle gewonnen.";
            document.body.appendChild(paragraph);

            this.lifepoints -= 20;

            if (this.lifepoints > 0) {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = " " + this.name + " verbleiben noch " + this.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Sieg! " + this.name + " wurde getötet.";
                document.body.appendChild(paragraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
            }
            createBodyElements();
        }
    }
}