"use strict";
var Abschluss;
(function (Abschluss) {
    class NormalPerson extends Abschluss.Person {
        constructor(_name, _position, _availableLifePoints, _canWalkByThemselve, _speakPossibilities) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = false;
            this.canWalkByThemselve = _canWalkByThemselve;
            this.speakPossibilities = _speakPossibilities;
        }
        speak() {
            let paragraph = document.createElement("P");
            let randomNumber = Math.floor(Math.random() * this.speakPossibilities.length);
            paragraph.innerText = "" + this.name + " sagt: " + this.speakPossibilities[randomNumber];
            document.body.appendChild(paragraph);
            Abschluss.createBodyElements();
        }
    }
    Abschluss.NormalPerson = NormalPerson;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=NormalPerson.js.map