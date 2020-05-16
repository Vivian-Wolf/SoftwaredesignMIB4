"use strict";
var Aufgabe_2_Niels;
(function (Aufgabe_2_Niels) {
    let subject = ["Harry", "Hermine", "Dumbledore", "Hagrid", "Snape"];
    // subject ist singular, verbs und objects sind plural
    let verbs = ["braut", "zerstört", "ertränkt", "lebt", "stirbt"];
    let objects = ["Zaubertränke", "Dementoren", "den Grimm", "Lupin", "Hogwards"];
    let wordDictionary = [subject, verbs, objects];
    let i = 0;
    while (i < 5) {
        console.log(getSentence());
        i++;
    }
    function getSentence() {
        let sentence = "";
        wordDictionary.forEach(function (item) {
            sentence += chooseStringfromArray(item);
            //  chooseStringfromArray folgt nicht der camelCase notation, richtig waere chooseStringFromArray
        });
        return sentence;
    }
    function chooseStringfromArray(words) {
        //  words folgt nicht dem styleguide fuer diesen kurs, richtig waere _words (da die variable bei der funktionsdeklaration mit deklariert wird)
        let ranString;
        //  ranString ist nicht direkt eindeutig, besser waere randString
        ranString = words.splice(getRandomNumber(subject.length), 1)[0] + " ";
        return ranString;
    }
    function getRandomNumber(max) {
        //  max folg nicht dem styleguide fuer diesen kurs, gleiches wie letzte funktion
        return Math.floor(Math.random() * Math.floor(max));
    }
})(Aufgabe_2_Niels || (Aufgabe_2_Niels = {}));
var Aufgabe_2_Vivian;
(function (Aufgabe_2_Vivian) {
    let subject = ["der Zerfall", "das Meer", "das Auge", "die Stadt", "das Trauma", "der Weltuntergang", "die Kunst", "die Leere", "die Erinnerung", "die Flucht", "die Gesellschaft", "mein Bruder", "die Ewigkeit", "die Demokratie"];
    // variablen im singular benannt obwohl mehrere worte in jedem array drin sind, plural waere besser
    let verb = ["vernichtet", "schießt", "läuft", "sieht", "erscheint", "wütet", "stiehlt", "vergeht", "blutet", "hypnotisiert", "beseitigt", "selektiert", "betrügt", "analysiert"];
    let object = ["ohne eine Zukunft", "auf den Zerfall hin", "im Traum", "in den Gedanken", "sich durch die Tortur", "durch den Tag", "durch einen Ozean des Grauens", ".", "sich durch eine innere Leere", "ohne Gewissen", "im Durchschnitt drei Mal", "mit verzweifelten Seelen"];
    getVerse();
    function getVerse() {
        let i;
        let vers;
        console.log("Zufallsgedicht:");
        while (subject.length > 0) {
            i = Math.floor(Math.random() * 2) + 1;
            if (i == 1) {
                //B
                //  was bedeutet der kommentar hier?
                i = Math.floor(Math.random() * subject.length);
                vers = subject[i] + " ";
                subject.splice(i, 1);
                i = Math.floor(Math.random() * verb.length);
                vers += verb[i] + " ";
                verb.splice(i, 1);
                i = Math.floor(Math.random() * object.length);
                if (object[i] == ".")
                    vers += object[i];
                else {
                    if (subject.length == 0)
                        vers += object[i] + ".";
                    else
                        vers += object[i] + ",";
                }
                object.splice(i, 1);
                console.log(vers);
            }
            else {
                //A
                //  wozu der kommentar hier?
                i = Math.floor(Math.random() * verb.length);
                vers = verb[i] + " ";
                verb.splice(i, 1);
                i = Math.floor(Math.random() * subject.length);
                vers += subject[i] + " ";
                subject.splice(i, 1);
                i = Math.floor(Math.random() * object.length);
                if (object[i] == ".")
                    vers += "?";
                else
                    vers += object[i] + "?";
                object.splice(i, 1);
                console.log(vers);
                //  der code im namespace Aufgabe_2_Vivian ist nicht nachvollziehbar was genau weswegen gemacht wird, sinnvollere kommentare waeren hier angebracht damit der code besser lesbar ist und klar ist was wo weshalb passiert
            }
        }
    }
})(Aufgabe_2_Vivian || (Aufgabe_2_Vivian = {}));
//# sourceMappingURL=main.js.map