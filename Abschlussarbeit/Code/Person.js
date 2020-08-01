"use strict";
var Abschluss;
(function (Abschluss) {
    class Person {
        constructor(_name, _position, _availableLifePoints) {
            this.posX = 0;
            this.posY = 0;
            this.name = _name;
            this.currentRoom = _position;
            this.posX = this.currentRoom.posX;
            this.posY = this.currentRoom.posY;
            this.lifepoints = _availableLifePoints;
            this.canBeAttacked = false;
        }
        walk() {
            let posXBackup = this.posX;
            let posYBackup = this.posY;
            if (this.canWalkByThemselve == true) {
                let randomNumber = Math.floor(Math.random() * 4);
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
                if (this.roomDoesNotExist() == true) {
                    this.posX = posXBackup;
                    this.posY = posYBackup;
                }
                else {
                    this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
                    this.currentRoom = Abschluss.gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
                    this.currentRoom.personsInRoom.push(this);
                }
            }
        }
        roomDoesNotExist() {
            let roomNotThere = false;
            let foundRoom = Abschluss.gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            if (foundRoom == undefined) {
                roomNotThere = true;
            }
            return roomNotThere;
        }
    }
    Abschluss.Person = Person;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Person.js.map