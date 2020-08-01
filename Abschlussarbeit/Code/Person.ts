namespace Abschluss {
    export abstract class Person {
        public name: string;
        public lifepoints: number;
        public canBeAttacked: boolean;
        public canWalkByThemselve: boolean;
        public posX: number = 0;
        public posY: number = 0;
        public currentRoom: Room;

        constructor(_name: string, _position: Room, _availableLifePoints: number) {
            this.name = _name;
            this.currentRoom = _position;
            this.posX = this.currentRoom.posX;
            this.posY = this.currentRoom.posY;
            this.lifepoints = _availableLifePoints;
            this.canBeAttacked = false;
        }

        public abstract speak(): void;

        public walk(): void {
            let posXBackup: number = this.posX;
            let posYBackup: number = this.posY;
            if (this.canWalkByThemselve == true) {
                let randomNumber: number = Math.floor(Math.random() * 4);
                switch (randomNumber) {
                    case 0: {
                        this.posY += 1;
                        break;
                    }
                    case 1: {
                        this.posX -= 1;
                        break;
                    }
                    case 2: {
                        this.posY -= 1;
                        break;
                    }
                    case 3: {
                        this.posX += 1;
                        break;
                    }
                }
                if (this.roomDoesNotExist() == true) {
                    this.posX = posXBackup;
                    this.posY = posYBackup;
                } else {
                    this.currentRoom.personsInRoom.splice(this.currentRoom.personsInRoom.indexOf(this), 1);
                    this.currentRoom = gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
                    this.currentRoom.personsInRoom.push(this);
                }
            }
        }

        public roomDoesNotExist(): boolean {
            let roomNotThere: boolean = false;
            let foundRoom: Room = gameMap.find(i => i.posX === this.posX && i.posY === this.posY);
            if (foundRoom == undefined) {
                roomNotThere = true;
            }
            return roomNotThere;
        }
       
    }

}
