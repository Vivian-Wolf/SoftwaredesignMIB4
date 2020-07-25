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
            let paragraph = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphEnemy");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
        }
    }
    Abschluss.Enemy = Enemy;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Enemy.js.map