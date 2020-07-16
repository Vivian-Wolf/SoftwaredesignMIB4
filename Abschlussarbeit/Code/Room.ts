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

    export function findRoom(): boolean {
        let roomNotThere: boolean = false;
        //Finding fitting Map
        console.log(player.posX, player.posY);
        let foundRoom: Room = gameMap.find(i => i.posX === player.posX && i.posY === player.posY);
        if (foundRoom == undefined) {
            console.log("No room in that direction");
            roomNotThere = true;
        }
        else {
            console.log(foundRoom.name + ": " + foundRoom.description);
            roomNotThere = false;
        }
        return roomNotThere;
    }

}