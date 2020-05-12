"use strict";
var Vorlesung_Uebung;
(function (Vorlesung_Uebung) {
    console.log("Hallo");
    console.error("Error-Meldung");
    // debugger;
    console.info("Information");
    console.warn("Warnung");
    console.log("Dies", "ist", "kein", "Array");
    console.group("Simple");
    let x = 10;
    let y = "Hallo";
    let a = [123, 321, 34];
    let o = { firstname: "Egzon", lastname: "Demaj", age: 25 };
    console.log(x, y, a, o);
    let h = document.querySelector("h1");
    console.log(h);
    console.groupEnd();
    //count
    console.groupCollapsed("Counter");
    for (let i = 0; i < 10; i++)
        console.count("Counter");
    console.groupEnd();
    //table
    console.groupCollapsed("Personen");
    let studies = [];
    studies.push(o);
    studies.push({ firstname: "Manuel", lastname: "Pross", age: 24 });
    studies.push({ firstname: "Rudolf", lastname: "von Östereich-Ungarn", age: 161 });
    studies.push({ firstname: "Louis", lastname: "XIV aus dem Haus Bourbon", age: 304 });
    console.table(studies);
    console.groupEnd();
    //Timer
    console.groupCollapsed("Timer");
    console.time("Timer");
    window.setTimeout(endTimer, 1000);
    function endTimer() {
        console.timeEnd("Timer");
    }
    console.groupEnd();
    console.assert(false, "Das sieht man");
    console.assert(true, "Das sieht man nicht");
})(Vorlesung_Uebung || (Vorlesung_Uebung = {}));
//# sourceMappingURL=main.js.map