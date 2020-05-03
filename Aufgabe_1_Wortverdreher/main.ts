namespace Aufgabe_1 {
    
    let sentence: string = prompt("Gib einen Satz ein", "Die Maus frisst Käse");
    let wordArray: string[];
    let result1: string;
    let result2: string;
    let result3: string;

    wordArray = substring(sentence, "whitespace");

    function functionWordArray(string: string[]): string {
        let array: string[] = string;
        let result: string;
        for (let i: number = 0; i < array.length; i++) {
            stringReverse(wordArray[i], "char");
        }
        result = array.join("");
        return result;
    }
    function substring(string: string, attribute: string): string[] {
        let eingabeString: string = string;
        let eingabeAttribut: string = attribute;
        let splitArray: string[];
        if (eingabeAttribut == "whitespace")
            splitArray = eingabeString.split("");
        if (eingabeAttribut == "char")
            splitArray = eingabeString.split("");
        return splitArray;
    }

    function stringReverse(stringR: string, attribute: string): string {
        let stringReverse: string = stringR;
        let eingabeAttribut: string = attribute;
        let splitArray: string[];
        if (eingabeAttribut == "whitespace") {
            splitArray = stringReverse.split("");
            splitArray = splitArray.reverse();
            stringReverse = splitArray.join("");
        }
        if (eingabeAttribut == "char") {
            splitArray = stringReverse.split("");
            splitArray = splitArray.reverse();
            stringReverse = splitArray.join("");
        }
        return stringReverse;
    }

    result1 = functionWordArray(wordArray);
    result2 = stringReverse(sentence, "whitespace");
    result3 = stringReverse(sentence, "char");

    console.log(result1);
    console.log(result2);
    console.log(result3);
}