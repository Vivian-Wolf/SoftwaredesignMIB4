"use strict";
var Abschluss;
(function (Abschluss) {
    class NormalPerson extends Abschluss.Person {
        constructor(_name, _position, _availableLifePoints) {
            super();
            this.inventory = [];
            this.name = _name;
            this.currentRoom = _position;
            this.lifepoints = _availableLifePoints;
            this.canBeAttacked = false;
        }
        speak() {
            return "Hallo";
        }
    }
    Abschluss.NormalPerson = NormalPerson;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=NormalPerson.js.map