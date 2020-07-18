namespace Abschluss {
    export class NormalPerson extends Person {
        public inventory: String[] = [];

        constructor(_name: String, _position: Room, _availableLifePoints: number) {
            super();
            this.name = _name;
            this.currentRoom = _position;
            this.lifepoints = _availableLifePoints;
            this.canBeAttacked = false;
        }
        public speak(): String {
            return "Hallo";
        }
    }
}