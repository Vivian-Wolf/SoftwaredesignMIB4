"use strict";
var Abschluss;
(function (Abschluss) {
    class StoryCharacter extends Abschluss.Person {
        constructor(_name, _position, _availableLifePoints, _canWalkByThemselve) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = false;
            this.canWalkByThemselve = _canWalkByThemselve;
        }
        speak() {
            let paragraph = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphStoryCharakter");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
            Abschluss.createBodyElements();
        }
    }
    Abschluss.StoryCharacter = StoryCharacter;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=StoryCharakter.js.map