"use strict";
var Aufgabe_1;
(function (Aufgabe_1) {
    let sentence = prompt("Gib einen Satz ein", "Die Maus frisst Käse");
    let wordArray;
    let result1;
    let result2;
    let result3;
    wordArray = substring(sentence, "whitespace");
    function functionWordArray(string) {
        let array = string;
        let result;
        for (let i = 0; i < array.length; i++) {
            stringReverse(wordArray[i], "char");
        }
        result = array.join("");
        return result;
    }
    function substring(string, attribute) {
        let eingabeString = string;
        let eingabeAttribut = attribute;
        let splitArray;
        if (eingabeAttribut == "whitespace")
            splitArray = eingabeString.split("");
        if (eingabeAttribut == "char")
            splitArray = eingabeString.split("");
        return splitArray;
    }
    function stringReverse(stringR, attribute) {
        let stringReverse = stringR;
        let eingabeAttribut = attribute;
        let splitArray;
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
})(Aufgabe_1 || (Aufgabe_1 = {}));
//# sourceMappingURL=main.js.map