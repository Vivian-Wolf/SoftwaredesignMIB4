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
    }
    Abschluss.Room = Room;
    function findRoom() {
        let roomNotThere = false;
        //Finding fitting Map
        console.log(Abschluss.player.posX, Abschluss.player.posY);
        let foundRoom = Abschluss.gameMap.find(i => i.posX === Abschluss.player.posX && i.posY === Abschluss.player.posY);
        if (foundRoom == undefined) {
            console.log("No room in that direction");
            roomNotThere = true;
        }
        else {
            let newParagraph = document.createElement("P"); // Create a <p> element
            newParagraph.innerText = "Du befindest dich im " + foundRoom.name + ": " + foundRoom.description; // Insert text
            document.body.appendChild(newParagraph); //Add to body  
            console.log(foundRoom.name + ": " + foundRoom.description);
            Abschluss.createBodyElements();
            roomNotThere = false;
        }
        return roomNotThere;
    }
    Abschluss.findRoom = findRoom;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Room.js.map