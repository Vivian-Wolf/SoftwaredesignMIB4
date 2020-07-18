namespace Abschluss {
    export abstract class Person {
        public name: String;
        public lifepoints: number;
        public canBeAttacked: boolean;
        public posX: number = 0;
        public posY: number = 0;
        public currentRoom: Room;

        public abstract speak(): String;
    }

}
