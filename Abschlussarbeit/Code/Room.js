"use strict";
var Abschluss;
(function (Abschluss) {
    class Room {
        constructor(_name, _description, _posX, _posY) {
            this.objectsInRoom = [];
            this.personsInRoom = [];
            this.posX = 0;
            this.posY = 0;
            this.name = _name;
            this.description = _description;
            this.posX = _posX;
            this.posY = _posY;
        }
        toString() {
            let newParagraph = document.createElement("P");
            newParagraph.innerHTML = "Du befindest dich im " + this.name + ": " + this.description + " \n \n Du siehst: \n ";
            if (this.objectsInRoom.length == 0 && this.personsInRoom.length == 0) {
                newParagraph.innerHTML = "Du befindest dich im " + this.name + ": " + this.description;
                document.body.appendChild(newParagraph);
            }
            for (let i = 0; i < this.objectsInRoom.length; i++) {
                newParagraph.innerText += this.objectsInRoom[i] + " \n ";
                document.body.appendChild(newParagraph);
            }
            for (let i = 0; i < this.personsInRoom.length; i++) {
                newParagraph.innerText += "\n" + this.personsInRoom[i].name + " \n ";
                document.body.appendChild(newParagraph);
            }
        }
    }
    Abschluss.Room = Room;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Room.js.map