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
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Room.js.map