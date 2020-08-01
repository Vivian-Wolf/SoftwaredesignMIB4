"use strict";
var Abschluss;
(function (Abschluss) {
    class Enemy extends Abschluss.Person {
        constructor(_name, _position, _availableLifePoints) {
            super(_name, _position, _availableLifePoints);
            this.canBeAttacked = true;
        }
        speak() {
            let paragraph = document.createElement("P");
            paragraph.setAttribute("id", "speakParagraphEnemy");
            paragraph.innerText = "" + this.name + " sagt: ";
            document.body.appendChild(paragraph);
            Abschluss.createBodyElements();
        }
        attack() {
            let randomNumber;
            randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber == 1) {
                this.wonBattle();
            }
            else {
                this.lostBattle();
            }
        }
        lostBattle() {
            let paragraph = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle verloren.";
            document.body.appendChild(paragraph);
            Abschluss.player.lifepoints -= 20;
            if (Abschluss.player.lifepoints > 0) {
                let newParagraph = document.createElement("P");
                newParagraph.innerText = "Dir bleiben noch " + Abschluss.player.lifepoints + " Lebenspunkte.";
                document.body.appendChild(newParagraph);
                Abschluss.createBodyElements();
            }
            else {
                let newParagraph = document.createElement("P");
                newParagraph.innerText = "Du bist auf tragische Weise im Battle gestorben. Deine Taten werden zukünftig lediglich in Legenden erzählt.";
                document.body.appendChild(newParagraph);
                document.body.removeChild(Abschluss.form);
            }
        }
        wonBattle() {
            let paragraph = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle gewonnen.";
            document.body.appendChild(paragraph);
            this.lifepoints -= 20;
            if (this.lifepoints > 0) {
                let newParagraph = document.createElement("P");
                newParagraph.innerText = " " + this.name + " verbleiben noch " + this.lifepoints + " Lebenspunkte.";
                document.body.appendChild(newParagraph);
            }
            else {
                let newParagraph = document.createElement("P");
                newParagraph.innerText = "Sieg! " + this.name + " wurde getötet.";
                document.body.appendChild(newParagraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
            }
            Abschluss.createBodyElements();
        }
    }
    Abschluss.Enemy = Enemy;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Enemy.js.map