"use strict";
var Abschluss;
(function (Abschluss) {
    class Player extends Abschluss.Person {
        constructor(_name) {
            super();
            this.inventory = [];
            this.level = 1;
            this.name = _name;
        }
        speak() {
            if (this.currentRoom == Abschluss.mirrorHall && this.level == 0) {
                this.level = 1;
                Abschluss.story();
            }
            if (this.currentRoom == Abschluss.secretPassage && this.level == 3) {
                Abschluss.story();
            }
            if (this.currentRoom.personsInRoom.length == 1 && this.level != 1 && this.level != 3) {
                this.currentRoom.personsInRoom[0].speak();
            }
            else if (this.currentRoom.personsInRoom.length == 0) {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Es befindet sich keine Person im Raum.";
                document.body.appendChild(paragraph);
                Abschluss.createBodyElements();
            }
            else if (this.currentRoom.personsInRoom.length > 1 && this.level != 2 && this.level != 1 && this.level != 3) {
                this.createBodyElementsForSpeak();
            }
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
                    break;
                }
            }
            if (this.findRoom() == true) {
                this.posX = playerposXBackup;
                this.posY = playerposYBackup;
                console.log("Position reset to " + this.posX + " " + this.posY);
            }
            if (this.posX == Abschluss.secretPassage.posX && this.posY == Abschluss.secretPassage.posY) {
                if (this.inventory.indexOf("ein Schlüssel") == -1) {
                    this.posX = playerposXBackup;
                    this.posY = playerposYBackup;
                    let paragraphResetPosition = document.createElement("p");
                    paragraphResetPosition.innerText = "Der Geheimgang kann nur mit einem Schlüssel begangen werden.";
                    document.body.appendChild(paragraphResetPosition);
                }
            }
            this.currentRoom = Abschluss.gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            this.look();
            if (this.currentRoom.personsInRoom.indexOf(Abschluss.guardEntry) >= 0 && this.level == 4) {
                Abschluss.guardEntry.attack();
            }
            if (this.currentRoom.personsInRoom.indexOf(Abschluss.guardGarden) >= 0 && this.level == 4) {
                Abschluss.guardGarden.attack();
            }
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
            this.currentRoom.toString();
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
            document.body.appendChild(inventoryParagraph);
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
                let paragraph = document.createElement("P");
                paragraph.innerText = "Dieses Item befindet sich nicht im aktuellen Raum.";
                document.body.appendChild(paragraph);
            }
            this.look();
            Abschluss.createBodyElements();
        }
        dropItem(_userInput) {
            let itemToDrop;
            let indexOfItemToDrop;
            itemToDrop = _userInput;
            indexOfItemToDrop = this.findPositionOfItemToDrop(itemToDrop);
            if (indexOfItemToDrop > -1) {
                this.currentRoom.objectsInRoom.push(_userInput);
                this.inventory.splice(indexOfItemToDrop, 1);
            }
            else {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Dieses Item befindet sich nicht in deinem Inventar.";
                document.body.appendChild(paragraph);
            }
            this.look();
            Abschluss.createBodyElements();
        }
        findPositionOfItemToPick(_itemToCheck) {
            let indexOfObjetInTheRoom;
            indexOfObjetInTheRoom = this.currentRoom.objectsInRoom.indexOf(_itemToCheck);
            return indexOfObjetInTheRoom;
        }
        findPositionOfItemToDrop(_itemToCheck) {
            let indexOfObjetInTheInventory;
            indexOfObjetInTheInventory = this.inventory.indexOf(_itemToCheck);
            return indexOfObjetInTheInventory;
        }
        attack(_personToAttack) {
            let randomNumber;
            randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber == 1) {
                this.lostBattle();
            }
            else {
                this.wonBattle(_personToAttack);
            }
            if (_personToAttack == Abschluss.firstEnemy && this.level == 1) {
                if (Abschluss.firstEnemy.lifepoints <= 37.5) {
                    this.level = 2;
                    Abschluss.story();
                }
            }
        }
        lostBattle() {
            let paragraph = document.createElement("P");
            paragraph.innerText = "Du hast das Battle verloren.";
            document.body.appendChild(paragraph);
            this.lifepoints -= 20;
            if (this.lifepoints > 0) {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Dir bleiben noch " + this.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
                Abschluss.createBodyElements();
            }
            else {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Du bist auf tragische Weise im Battle gestorben. Deine Taten werden zukünftig lediglich in Legenden erzählt.";
                document.body.appendChild(paragraph);
                let userInput = document.getElementById("userInput");
                let inputLabel = document.getElementById("label");
                Abschluss.form.removeChild(inputLabel);
                Abschluss.form.removeChild(userInput);
                document.body.removeChild(Abschluss.form);
            }
        }
        wonBattle(_enemy) {
            let paragraph = document.createElement("P");
            paragraph.innerText = "Du hast das Battle gewonnen.";
            document.body.appendChild(paragraph);
            _enemy.lifepoints -= 20;
            if (_enemy.lifepoints > 0) {
                let paragraph = document.createElement("P");
                paragraph.innerText = " " + _enemy.name + " verbleiben noch " + _enemy.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
                Abschluss.createBodyElements();
            }
            else if (_enemy.lifepoints <= 0 && _enemy != Abschluss.king) {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Sieg! " + _enemy.name + " wurde getötet.";
                document.body.appendChild(paragraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(_enemy), 1);
                Abschluss.createBodyElements();
            }
            else {
                this.level = 5;
                Abschluss.story();
            }
        }
        useItem() {
            console.log("Item wird benutzt!");
        }
        createBodyElementsForSpeak() {
            Abschluss.createBodyElements();
            let inputLabel = document.getElementById("label");
            inputLabel.innerText = "Mit wem möchtest du sprechen?:";
            let inputField = document.getElementById("userInput");
            inputField.removeAttribute("onchange");
            inputField.setAttribute("onchange", "Abschluss.checkIfPlayerCanSpeakToPerson(Abschluss.submitCharInput())");
        }
    }
    Abschluss.Player = Player;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Player.js.map