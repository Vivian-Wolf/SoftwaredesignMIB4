"use strict";
var Abschluss;
(function (Abschluss) {
    class NormalPerson extends Abschluss.Person {
        constructor(_name, _position, _availableLifePoints) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = false;
        }
        speak() {
            let paragraph = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphNormalPerson");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
            Abschluss.createBodyElements();
        }
    }
    Abschluss.NormalPerson = NormalPerson;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=NormalPerson.js.map