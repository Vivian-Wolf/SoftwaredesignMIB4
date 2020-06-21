"use strict";
var Generics;
(function (Generics) {
    class Habsburg {
        conquer() {
            console.log("Angriff!");
        }
    }
    Generics.Habsburg = Habsburg;
    class Austria extends Habsburg {
        conquer() {
            console.log("Österreich-Ungarn wurde geboren.");
        }
    }
    Generics.Austria = Austria;
    class Spain extends Habsburg {
        conquer() {
            console.log("Portugal wird auch eins uns gehören.");
        }
    }
    Generics.Spain = Spain;
    class France extends Habsburg {
        conquer() {
            console.log("Oranien wird geschlagen. Wilhelm wird sterben.");
        }
    }
    Generics.France = France;
})(Generics || (Generics = {}));
//# sourceMappingURL=Habsburg.js.map