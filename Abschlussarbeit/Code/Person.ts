namespace Abschluss {
    export abstract class Person {
        public name: string;
        public lifepoints: number;
        public canBeAttacked: boolean;
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
    }

}
