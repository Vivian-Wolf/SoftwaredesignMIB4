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
    }
    Abschluss.Person = Person;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Person.js.map