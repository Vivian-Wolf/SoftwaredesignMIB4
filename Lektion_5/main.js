"use strict";
var Lektion_5;
(function (Lektion_5) {
    class Person {
        constructor(_nameDerPerson, _alterDerPerson) {
            this.name = _nameDerPerson;
            this.alter = _alterDerPerson;
        }
        vergleichPersonen() {
            if (this.alter > 200)
                return "Damn " + this.name + " ist steinalt!";
            else
                return this.name + " ist zu jung, um eine Legende zu sein.";
        }
    }
    //Vererbung
    class Koenig extends Person {
        constructor(_name, _alter, _gebiet) {
            super(_name, _alter);
            this.territorium = _gebiet;
        }
    }
    class Female extends Person {
        vergleichPersonen() {
            return "Herzlichen Glückwunsch. Es ist eine Frau.";
        }
    }
    class Male extends Person {
        vergleichPersonen() {
            return "Herzlichen Glückwunsch. Es ist ein Mann.";
        }
    }
    //Instanz erzeugen
    let myself = new Person("", 0);
    myself.name = "Ludwig II";
    myself.alter = 175;
    //Verkürzte Schreibweise
    let cousine = new Person("Elisabeth von Österreich-Ungarn", 183);
    //Ausgabe
    console.log(myself.name + " ist " + myself.alter + " Jahre alt und ist mit der " + cousine.alter + " Jahre alten " + cousine.name + " verwandt.");
    //console.log(myself.vergleichPersonen(cousine));
    //Array bei dem Person durch König ersetzt wird
    let wallOfEmperor;
    wallOfEmperor = [myself, cousine, new Person("Ludwig XIV", 382), new Person("Willhelm III", 370), new Person("Marie Antoinette", 265)];
    wallOfEmperor[2] = new Koenig(wallOfEmperor[2].name, wallOfEmperor[2].alter, "Frankreich");
    wallOfEmperor[3] = new Koenig(wallOfEmperor[3].name, wallOfEmperor[3].alter, "Niederlande");
    console.log(wallOfEmperor);
    //Array mit Male und Female
    let nichtAlleGeschlechterInEinemArray;
    nichtAlleGeschlechterInEinemArray = [myself, new Female("Johanna I. von Kastilien", 541), new Male("Heinrich VII", 467)];
    let i = 0;
    while (i < 3) {
        let personenVergleichString = nichtAlleGeschlechterInEinemArray[i].vergleichPersonen();
        console.log(personenVergleichString);
        i++;
    }
})(Lektion_5 || (Lektion_5 = {}));
//# sourceMappingURL=main.js.map