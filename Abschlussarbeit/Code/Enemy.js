"use strict";
var Abschluss;
(function (Abschluss) {
    class Enemy extends Abschluss.Person {
        constructor(_name, _position, _availableLifePoints) {
            super();
            this.name = _name;
            this.currentRoom = _position;
            this.posX = this.currentRoom.posX;
            this.posY = this.currentRoom.posY;
            this.lifepoints = _availableLifePoints;
            this.canBeAttacked = true;
        }
        speak() {
            return "Hallo";
        }
    }
    Abschluss.Enemy = Enemy;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Enemy.js.map