"use strict";
var Abschluss;
(function (Abschluss) {
    class Player extends Abschluss.Person {
        constructor(_name) {
            super();
            this.inventory = [];
            this.name = _name;
        }
        speak() {
            return "Hallo";
        }
        changePosition(_userInput) {
            // Backups the current position in case there is no room where the player is moving to
            let playerposXBackup = this.posX;
            let playerposYBackup = this.posY;
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
            this.currentRoom = Abschluss.gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            this.look();
        }
        findRoom() {
            let roomNotThere = false;
            let foundRoom = Abschluss.gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            if (foundRoom == undefined) {
                roomNotThere = true;
            }
            else {
                roomNotThere = false;
            }
            return roomNotThere;
        }
        look() {
            let newParagraph = document.createElement("P"); // Create a <p> element
            newParagraph.innerHTML = "Du befindest dich im " + this.currentRoom.name + ": " + this.currentRoom.description + " \n \n Du siehst: \n ";
            if (this.currentRoom.objectsInRoom.length == 0) {
                newParagraph.innerHTML = "Du befindest dich im " + this.currentRoom.name + ": " + this.currentRoom.description;
                document.body.appendChild(newParagraph);
            }
            for (let i = 0; i < this.currentRoom.objectsInRoom.length; i++) {
                newParagraph.innerText += this.currentRoom.objectsInRoom[i] + " \n ";
                document.body.appendChild(newParagraph);
            } // Insert text
        }
        showInventory() {
            let inventoryParagraph = document.createElement("P");
            if (this.inventory.length == 0) {
                inventoryParagraph.innerText = "Dein Inventar ist zur Zeit leer.";
            }
            else {
                inventoryParagraph.innerText = "Dein Inventar beinhaltet: " + this.inventory[0];
                for (let i = 1; i < this.inventory.length; i++) {
                    inventoryParagraph.innerText += this.inventory[i];
                }
            }
        }
        takeItem(_userInput) {
            let itemToPick;
            let indexOfItemToPick;
            itemToPick = _userInput;
            indexOfItemToPick = this.findPositionOfItemToPick(itemToPick);
            if (indexOfItemToPick > -1) {
                this.inventory.push(_userInput);
                this.currentRoom.objectsInRoom.splice(indexOfItemToPick, 1);
            }
            else {
                let paragraph = document.createElement("P"); // Create a <p> element
                paragraph.innerText = "Dieses Item befindet sich nicht im aktuellen Raum."; // Insert text
                document.body.appendChild(paragraph);
            }
            this.look();
            Abschluss.createBodyElements();
        }
        dropItem(_userInput) {
            let itemToDrop;
            let indexOfItemToDrop;
            itemToDrop = _userInput;
            indexOfItemToDrop = this.findPositionOfItemToPick(itemToDrop);
            if (indexOfItemToDrop > -1) {
                this.currentRoom.objectsInRoom.push(_userInput);
                this.inventory.splice(indexOfItemToDrop, 1);
            }
            else {
                let paragraph = document.createElement("P"); // Create a <p> element
                paragraph.innerText = "Dieses Item befindet sich nicht in deinem Inventar."; // Insert text
                document.body.appendChild(paragraph);
            }
            this.look();
            Abschluss.createBodyElements();
        }
        findPositionOfItemToPick(_itemToCheck) {
            let indexOfObjetInTheRoom;
            let currentPosition;
            currentPosition = this.currentRoom;
            indexOfObjetInTheRoom = currentPosition.objectsInRoom.indexOf(_itemToCheck);
            return indexOfObjetInTheRoom;
        }
        attack() {
            console.log("Attack!");
        }
        useItem() {
            console.log("Item wird benutzt!");
        }
    }
    Abschluss.Player = Player;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Player.js.map