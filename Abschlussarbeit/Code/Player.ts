namespace Abschluss {
    export class Player extends Person {
        public inventory: String[] = [];

        constructor(_name: String) {
            super();
            this.name = _name;
        }

        public speak(): String {
            return "Hallo";
        }

        public changePosition(_userInput: String): void {
            // Backups the current position in case there is no room where the player is moving to
            let playerposXBackup: number = this.posX;
            let playerposYBackup: number = this.posY;
            switch (_userInput) {
                // Changes Player position based on input
                case "w": {
                    this.posY += 1;
                    break;
                }
                case "a": {
                    this.posX -= 1;
                    break;
                }
                case "d": {
                    this.posX += 1;
                    break;
                }
                case "s": {
                    this.posY -= 1;
                    break;
                }
                default: {
                    break;
                }
            }
            if (this.findRoom() == true) {
                this.posX = playerposXBackup;
                this.posY = playerposYBackup;
                console.log("Position reset to " + this.posX + " " + this.posY);
            }
            else {
                console.log("New position: " + this.posX + " " + this.posY);
            }
            this.currentRoom = gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            this.look();
        }

        public findRoom(): boolean {
            let roomNotThere: boolean = false;
            let foundRoom: Room = gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            if (foundRoom == undefined) {
                roomNotThere = true;
            }
            else {
                roomNotThere = false;
            }
            return roomNotThere;
        }

        public look(): void {
            this.currentRoom.toString();
        }

        public showInventory(): void {
            let inventoryParagraph: HTMLElement = document.createElement("P");
            if (this.inventory.length == 0) {
                inventoryParagraph.innerText = "Dein Inventar ist zur Zeit leer.";
            }
            else {
                inventoryParagraph.innerText = "Dein Inventar beinhaltet: " + this.inventory[0];
                for (let i: number = 1; i < this.inventory.length; i++) {
                    inventoryParagraph.innerText += this.inventory[i];
                }
            }
            document.body.appendChild(inventoryParagraph);
        }
        public takeItem(_userInput: string): void {
            let itemToPick: string;
            let indexOfItemToPick: number;

            itemToPick = _userInput;
            indexOfItemToPick = this.findPositionOfItemToPick(itemToPick);

            if (indexOfItemToPick > -1) {
                this.inventory.push(_userInput);
                this.currentRoom.objectsInRoom.splice(indexOfItemToPick, 1);
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Dieses Item befindet sich nicht im aktuellen Raum.";
                document.body.appendChild(paragraph);
            }
            this.look();
            createBodyElements();
        }

        public dropItem(_userInput: string): void {
            let itemToDrop: string;
            let indexOfItemToDrop: number;

            itemToDrop = _userInput;
            indexOfItemToDrop = this.findPositionOfItemToDrop(itemToDrop);

            if (indexOfItemToDrop > -1) {
                this.currentRoom.objectsInRoom.push(_userInput);
                this.inventory.splice(indexOfItemToDrop, 1);
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Dieses Item befindet sich nicht in deinem Inventar.";
                document.body.appendChild(paragraph);
            }
            this.look();
            createBodyElements();

        }

        public findPositionOfItemToPick(_itemToCheck: string): number {
            let indexOfObjetInTheRoom: number;

            indexOfObjetInTheRoom = this.currentRoom.objectsInRoom.indexOf(_itemToCheck);

            return indexOfObjetInTheRoom;
        }

        public findPositionOfItemToDrop(_itemToCheck: string): number {
            let indexOfObjetInTheInventory: number;

            indexOfObjetInTheInventory = this.inventory.indexOf(_itemToCheck);

            return indexOfObjetInTheInventory;
        }

        public attack(_personToAttack: Person): void {
            let randomNumber: number;
            randomNumber = Math.floor(Math.random() * 3) + 1;

            if (randomNumber == 1) {
                this.lostBattle();
            }
            else {
                this.wonBattle(_personToAttack);
            }
        }

        public lostBattle(): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Du hast das Battle verloren.";
            document.body.appendChild(paragraph);

            this.lifepoints -= 20;

            if (this.lifepoints > 0) {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Dir bleiben noch " + this.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
                createBodyElements();
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Du bist auf tragische Weise im Battle gestorben. Deine Taten werden zukünftig lediglich in Legenden erzählt.";
                document.body.appendChild(paragraph);
            }
        }

        public wonBattle(_enemy: Person): void {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Du hast das Battle gewonnen.";
            document.body.appendChild(paragraph);

            _enemy.lifepoints -= 20;

            if (_enemy.lifepoints > 0) {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = " " + _enemy.name + " verbleiben noch " + _enemy.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Sieg! " + _enemy.name + " wurde getötet.";
                document.body.appendChild(paragraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(_enemy), 1);
            }
            createBodyElements();
        }

        public useItem(): void {
            console.log("Item wird benutzt!");
        }

    }

}