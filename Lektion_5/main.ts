namespace Lektion_5 {
    class Person {
        name: string;
        alter: number;

        constructor(_nameDerPerson: string, _alterDerPerson: number) {
            this.name = _nameDerPerson;
            this.alter = _alterDerPerson;
        }

        vergleichPersonen(): string {
            if (this.alter > 200)
                return "Damn " + this.name + " ist steinalt!";
            else
                return this.name + " ist zu jung, um eine Legende zu sein.";
        }

    }

    //Vererbung
    class Koenig extends Person {
        territorium: string;

        constructor(_name: string, _alter: number, _gebiet: string) {
            super(_name, _alter);
            this.territorium = _gebiet;
        }
    }

    class Female extends Person {
        vergleichPersonen(): string {
            return "Herzlichen Glückwunsch. Es ist eine Frau.";
        }
    }

    class Male extends Person {
        vergleichPersonen(): string {
            return "Herzlichen Glückwunsch. Es ist ein Mann.";
        }
    }

    //Instanz erzeugen
    let myself: Person = new Person("", 0);
    myself.name = "Ludwig II";
    myself.alter = 175;
    //Verkürzte Schreibweise
    let cousine: Person = new Person("Elisabeth von Österreich-Ungarn", 183);

    //Ausgabe
    console.log(myself.name + " ist " + myself.alter + " Jahre alt und ist mit der " + cousine.alter + " Jahre alten " + cousine.name + " verwandt.");
    //console.log(myself.vergleichPersonen(cousine));

    //Array bei dem Person durch König ersetzt wird
    let wallOfEmperor: Person[];
    wallOfEmperor = [myself, cousine, new Person("Ludwig XIV", 382), new Person("Willhelm III", 370), new Person("Marie Antoinette", 265)];
    wallOfEmperor[2] = new Koenig(wallOfEmperor[2].name, wallOfEmperor[2].alter, "Frankreich");
    wallOfEmperor[3] = new Koenig(wallOfEmperor[3].name, wallOfEmperor[3].alter, "Niederlande");
    console.log(wallOfEmperor);

    //Array mit Male und Female
    let nichtAlleGeschlechterInEinemArray: Person [];
    nichtAlleGeschlechterInEinemArray = [myself, new Female("Johanna I. von Kastilien", 541), new Male("Heinrich VII", 467)];
    
    let i: number = 0;

    while (i < 3) {
        let personenVergleichString: string = nichtAlleGeschlechterInEinemArray[i].vergleichPersonen();
        console.log(personenVergleichString);
        i++;
    }
}

namespace AbstractKlassen {
    abstract class Person {
        name: string;
        alter: number;

        constructor(_nameDerPerson: string, _alterDerPerson: number) {
            this.name = _nameDerPerson;
            this.alter = _alterDerPerson;
        }

        altersAbfrage(): string {
            if (this.alter > 200)
                return "Damn " + this.name + " ist steinalt!";
            else
                return this.name + " ist zu jung, um eine Legende zu sein.";
        }

        abstract grabrede(): string;

    }

    //Vererbung der abstrakten Klasse
    class Koenig extends Person {
        territorium: string;

        constructor(_name: string, _alter: number, _gebiet: string) {
            super(_name, _alter);
            this.territorium = _gebiet;
        }

        grabrede(): string {
            return this.name + " war der Herrscher von " + this.territorium + " und so geht er nun dahin. Auf das er herrschen werde im Himmel, wie auf Erden.";
        }
    }

    class Maler extends Person {
        grabrede(): string {
            return this.name + " hat die Kunstgeschichte verändert. Sein Pinsel war das Schwert, die Leinwand sein Krieg.";
        }
    }

    class Dichter extends Person {
        grabrede(): string {
            return "An " + this.name + ": Im Morgentau gehst du dahin, liebst noch immer wie der Wind. Kannst nun gehen, kannst nun sein, deine Seele ist nun endlich rein.";
        }
    }

    let ludwig: Koenig = new Koenig("Ludwig XIV", 382, "Frankreich");
    let hundertwasser: Maler = new Maler("Friedenreich Hundertwasser", 92);
    let heine: Dichter = new Dichter("Heinrich Heine", 223);

    console.log(ludwig.grabrede());
    console.log(hundertwasser.grabrede());
    console.log(heine.grabrede());
}