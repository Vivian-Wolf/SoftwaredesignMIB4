//Lektion 2 Übungen
namespace Lektion_2 {

    // Deklaration und Definiton von Variablen

    //Variablen werden am Anfang klein geschreiben, keine Lehrzeichen, keine Sonderzeichen, außer $ und _ , darf nicht mit Zahl anfangen
    let newBoolean: boolean = false;
    let anyKindOfNumber: number;
    let thisIsAString: string = "Hello World";
    let sentence: string;
    let sentenceArray: string[];

    // mit ${variable} können Variablen direkt verwendet werden ohne ein + dazwischen schreiben zu müssen
    anyKindOfNumber = 3;
    sentence = `This is a example for ${thisIsAString}. The counter is set to ${anyKindOfNumber}`;
    console.log(sentence);
    thisIsAString = "Hello again " + anyKindOfNumber + newBoolean;
    console.log(thisIsAString);

    //Initialisierung Array
    sentenceArray = [sentence, thisIsAString];
    console.log(sentenceArray.length);

    //Klassen
    class MyPerson {
        name: string;
        age: number;
        constructor(yourName: string, yourAge: number) {
            this.name = yourName;
            this.age = yourAge;
        }
    }

    let newPerson: MyPerson;
    newPerson = new MyPerson("Maria", 13);
    console.log(newPerson);

    //If/else
    anyKindOfNumber = parseInt(prompt());
    let newNumber: number = parseInt(prompt());
    if (anyKindOfNumber > 3 && newNumber == 6)
        console.log("Du hast gewonnen!!!!");
    else
        console.log("Nope. Leider verloren.");

    //Switch
    switch (anyKindOfNumber) {
        case 1:
            console.log("Damn das war eine EINS");
            break;
        case 2:
            console.log("Zwei sind besser als 0");
            break;
        case 6:
            console.log("Deshalb gewinnst du noch lange nicht im Lotto.");
            break;
        default:
            console.log(`Das Lesen der Zahl ${anyKindOfNumber} fällt mir sichtlich schwerer als gedacht.`);
            break;
    }

    //While
    let counter: number = 1;
    while (counter < 11) {
        console.log(counter);
        counter++;
    }

    sentenceArray = ["Dieser", "Array", "hat", "nicht", "meine", "vollständige", "Aufmerksamkeit"];
    counter = 0;
    while (counter < sentenceArray.length) {
        console.log(sentenceArray[counter]);
        counter++;
    }

    let testArray: number[] = [1, 2, 3, 4, 5, 6, 7];
    let index: number = 2;
    testArray.splice(index, 1);
    console.log(testArray);
}