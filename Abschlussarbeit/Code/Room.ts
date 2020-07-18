namespace Abschluss {
    export class Room {
        public name: String;
        public description: String;
        public objectsInRoom: String[] = [];
        public personsInRoom: Person[] = [];
        public posX: number = 0;
        public posY: number = 0;

        constructor(_name: String, _description: String, _posX: number, _posY: number) {
            this.name = _name;
            this.description = _description;
            this.posX = _posX;
            this.posY = _posY;
        }
    }

}