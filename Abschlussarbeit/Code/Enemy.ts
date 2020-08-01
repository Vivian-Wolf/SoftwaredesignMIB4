namespace Abschluss {
    export class Enemy extends Person {

        constructor(_name: string, _position: Room, _availableLifePoints: number, _canWalkByThemselve: boolean) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = true;
            this.canWalkByThemselve = _canWalkByThemselve;
        }

        public speak(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphEnemy");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
            createBodyElements();
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

        public walk(): void {
            let posXBackup: number = this.posX;
            let posYBackup: number = this.posY;
            if (this.canWalkByThemselve == true) {
                let randomNumber: number = Math.floor(Math.random() * 4);
                switch (randomNumber) {
                    case 0: {
                        this.posY += 1;
                        break;
                    }
                    case 1: {
                        this.posX -= 1;
                        break;
                    }
                    case 2: {
                        this.posY -= 1;
                        break;
                    }
                    case 3: {
                        this.posX += 1;
                        break;
                    }
                }
                if (this == guardEntry || this == guardGarden) {
                    if (gameMap.find(i => i.posX === this.posX && i.posY === this.posY) == secretPassage) {
                        this.posX = posXBackup;
                        this.posY = posYBackup;
                    }
                }
                if (this.roomDoesNotExist() == true) {
                    this.posX = posXBackup;
                    this.posY = posYBackup;
                }
                else {
                    this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
                    this.currentRoom = gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
                    this.currentRoom.personsInRoom.push(this);
                }
            }
        }

        private lostBattle(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle verloren.";
            document.body.appendChild(paragraph);

            player.lifepoints -= 20;

            if (player.lifepoints > 0) {
                let newParagraph: HTMLElement = document.createElement("P");
                newParagraph.innerText = "Dir bleiben noch " + player.lifepoints + " Lebenspunkte.";
                document.body.appendChild(newParagraph);
                createBodyElements();
            } else {
                let newParagraph: HTMLElement = document.createElement("P");
                newParagraph.innerText = "Du bist auf tragische Weise im Battle gestorben. Deine Taten werden zukünftig lediglich in Legenden erzählt.";
                document.body.appendChild(newParagraph);
                document.body.removeChild(form);
            }
        }

        private wonBattle(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle gewonnen.";
            document.body.appendChild(paragraph);

            this.lifepoints -= 20;

            if (this.lifepoints > 0) {
                let newParagraph: HTMLElement = document.createElement("P");
                newParagraph.innerText = " " + this.name + " verbleiben noch " + this.lifepoints + " Lebenspunkte.";
                document.body.appendChild(newParagraph);
            } else {
                let newParagraph: HTMLElement = document.createElement("P");
                newParagraph.innerText = "Sieg! " + this.name + " wurde getötet.";
                document.body.appendChild(newParagraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
            }
            createBodyElements();
        }
    }
}