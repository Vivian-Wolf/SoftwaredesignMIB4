namespace Generics {
    export class Habsburg {
        king: string;
        age: number;

        conquer(): void {
            console.log("Angriff!");
        }
    }

    export class Austria extends Habsburg {

        conquer(): void {
            console.log("Österreich-Ungarn wurde geboren.");
        }
    }

    export class Spain extends Habsburg {

        conquer(): void {
            console.log("Portugal wird auch eins uns gehören.");
        }
    }

    export class France extends Habsburg {

        conquer(): void {
            console.log("Oranien wird geschlagen. Wilhelm wird sterben.");
        }
    }
}