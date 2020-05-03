namespace Lektion_2 {

    // Lektion 2 Übungen
    // Deklaration und Definiton von Variablen
        //Variablen werden am Anfang klein geschreiben, keine Lehrzeichen, keine Sonderzeichen, außer $ und _ , darf nicht mit Zahl anfangen
    let newBoolean: boolean = false;
    let anyKindOfNumber: number;
    let thisIsAString: string = "Hello World";
    let sentence: string;

    // mit ${variable} können Variablen direkt verwendet werden ohne ein + dazwischen schreiben zu müssen
    anyKindOfNumber = 3;
    sentence = "This is a example for ${thisIsAString}. The counter is set to ${sentence}";
    console.log(sentence);
    thisIsAString = "Hello again" + anyKindOfNumber;
    console.log(thisIsAString); 
}