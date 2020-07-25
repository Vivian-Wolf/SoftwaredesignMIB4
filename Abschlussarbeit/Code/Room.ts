namespace Abschluss {
    export class Room {
        public name: string;
        public description: string;
        public objectsInRoom: string[] = [];
        public personsInRoom: Person[] = [];
        public posX: number = 0;
        public posY: number = 0;

        constructor(_name: string, _description: string, _posX: number, _posY: number) {
            this.name = _name;
            this.description = _description;
            this.posX = _posX;
            this.posY = _posY;
        }

        toString(): void {
            let newParagraph: HTMLElement = document.createElement("P");
            newParagraph.innerHTML = "Du befindest dich im " + this.name + ": " + this.description + " \n \n Du siehst: \n ";
            if (this.objectsInRoom.length == 0 && this.personsInRoom.length == 0) {
                newParagraph.innerHTML = "Du befindest dich im " + this.name + ": " + this.description;
                document.body.appendChild(newParagraph);
            }
            for (let i: number = 0; i < this.objectsInRoom.length; i++) {
                newParagraph.innerText += this.objectsInRoom[i] + " \n ";
                document.body.appendChild(newParagraph);
            }
            for (let i: number = 0; i < this.personsInRoom.length; i++) {
                newParagraph.innerText += "\n" + this.personsInRoom[i].name ;
                document.body.appendChild(newParagraph);
            }
        }
    }

}