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
                    console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
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
            let newParagraph: HTMLElement = document.createElement("P");               // Create a <p> element
            newParagraph.innerHTML = "Du befindest dich im " + this.currentRoom.name + ": " + this.currentRoom.description + " \n \n Du siehst: \n ";
            if (this.currentRoom.objectsInRoom.length == 0) {
                newParagraph.innerHTML = "Du befindest dich im " + this.currentRoom.name + ": " + this.currentRoom.description;
                document.body.appendChild(newParagraph);
            }
            for (let i: number = 0; i < this.currentRoom.objectsInRoom.length; i++) {
                newParagraph.innerText += this.currentRoom.objectsInRoom[i] + " \n ";
                document.body.appendChild(newParagraph);
            }               // Insert text
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
                let paragraph: HTMLElement = document.createElement("P");               // Create a <p> element
                paragraph.innerText = "Dieses Item befindet sich nicht im aktuellen Raum.";               // Insert text
                document.body.appendChild(paragraph);
            }
            this.look();
            createBodyElements();
        }

        public dropItem(_userInput: string): void {
            let itemToDrop: string;
            let indexOfItemToDrop: number;

            itemToDrop = _userInput;
            indexOfItemToDrop = this.findPositionOfItemToPick(itemToDrop);

            if (indexOfItemToDrop > -1) {
                this.currentRoom.objectsInRoom.push(_userInput);
                this.inventory.splice(indexOfItemToDrop, 1);
            } else {
                let paragraph: HTMLElement = document.createElement("P");               // Create a <p> element
                paragraph.innerText = "Dieses Item befindet sich nicht in deinem Inventar.";               // Insert text
                document.body.appendChild(paragraph);
            }
            this.look();
            createBodyElements();

        }

        public findPositionOfItemToPick(_itemToCheck: string): number {
            let indexOfObjetInTheRoom: number;
            let currentPosition: Room;

            currentPosition = this.currentRoom;
            indexOfObjetInTheRoom = currentPosition.objectsInRoom.indexOf(_itemToCheck);

            return indexOfObjetInTheRoom;
        }

        public attack(): void {
            console.log("Attack!");
        }

        public useItem(): void {
            console.log("Item wird benutzt!");
        }

    }

}