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
                let paragraph = document.createElement("P");
                paragraph.innerText = "Dir bleiben noch " + Abschluss.player.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
                Abschluss.createBodyElements();
            }
            else {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Du bist auf tragische Weise im Battle gestorben. Deine Taten werden zukünftig lediglich in Legenden erzählt.";
                document.body.appendChild(paragraph);
            }
        }
        wonBattle() {
            let paragraph = document.createElement("P");
            paragraph.innerText = "Du wurdest von " + this.name + " angegriffen. Du hast das Battle gewonnen.";
            document.body.appendChild(paragraph);
            this.lifepoints -= 20;
            if (this.lifepoints > 0) {
                let paragraph = document.createElement("P");
                paragraph.innerText = " " + this.name + " verbleiben noch " + this.lifepoints + " Lebenspunkte.";
                document.body.appendChild(paragraph);
            }
            else {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Sieg! " + this.name + " wurde getötet.";
                document.body.appendChild(paragraph);
                this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
            }
            Abschluss.createBodyElements();
        }
    }
    Abschluss.Enemy = Enemy;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Enemy.js.map