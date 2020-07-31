namespace Abschluss {
    export class Player extends Person {
        public inventory: string[] = [];
        public level: number = 0;

        constructor(_name: string) {
            super();
            this.name = _name;
        }

        public speak(): void {
            if (this.currentRoom == mirrorHall && this.level == 0) {
                this.level = 1;
                story();

            }
            if (this.currentRoom == secretPassage && this.level == 3) {
                story();
            }
            if (this.currentRoom.personsInRoom.length == 1 && this.level != 1 && this.level != 3) {
                this.currentRoom.personsInRoom[0].speak();
            } else if (this.currentRoom.personsInRoom.length == 0) {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Es befindet sich keine Person im Raum.";
                document.body.appendChild(paragraph);
                createBodyElements();
            }
            else if (this.currentRoom.personsInRoom.length > 1 && this.level != 2 && this.level != 1 && this.level != 3) {
                this.createBodyElementsForSpeak();
            }

        }

        public changePosition(_userInput: string): void {
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
            if (this.posX == secretPassage.posX && this.posY == secretPassage.posY) {
                if (this.inventory.indexOf("ein Schlüssel") == -1) {
                    this.posX = playerposXBackup;
                    this.posY = playerposYBackup;
                    let paragraphResetPosition: HTMLElement = document.createElement("p");
                    paragraphResetPosition.innerText = "Der Geheimgang kann nur mit einem Schlüssel begangen werden.";
                    document.body.appendChild(paragraphResetPosition);
                }
            }
            this.currentRoom = gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            this.look();
            if (this.currentRoom.personsInRoom.indexOf(guardEntry) >= 0 && this.level == 4) {
                guardEntry.attack();
            }
            if (this.currentRoom.personsInRoom.indexOf(guardGarden) >= 0 && this.level == 4) {
                guardGarden.attack();
            }
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

            if (_personToAttack == firstEnemy && this.level == 1) {
                if (firstEnemy.lifepoints <= 37.5) {
                    this.level = 2;
                    story();
                }
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

                let userInput: HTMLElement = document.getElementById("userInput");
                let inputLabel: HTMLElement = document.getElementById("label");
                form.removeChild(inputLabel);
                form.removeChild(userInput);
                document.body.removeChild(form);
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
                createBodyElements();
            } else if (_enemy.lifepoints <= 0 && _enemy != king) {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Sieg! " + _enemy.name + " wurde getötet.";
                document.body.appendChild(paragraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(_enemy), 1);
                createBodyElements();
            } else {
                this.level = 5;
                story();
            }
        }

        public useItem(): void {
            console.log("Item wird benutzt!");
        }

        public createBodyElementsForSpeak(): void {
            createBodyElements();

            let inputLabel: HTMLElement = document.getElementById("label");
            inputLabel.innerText = "Mit wem möchtest du sprechen?:";

            let inputField: HTMLElement = document.getElementById("userInput");
            inputField.removeAttribute("onchange");
            inputField.setAttribute("onchange", "Abschluss.checkIfPlayerCanSpeakToPerson(Abschluss.submitCharInput())");
        }

    }

}