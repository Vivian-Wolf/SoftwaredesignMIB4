"use strict";
var Abschluss;
(function (Abschluss) {
    class Person {
        constructor() {
            this.posX = 0;
            this.posY = 0;
        }
    }
    Abschluss.Person = Person;
    function changePosition(_userInput) {
        console.log("Please select the direction you want to go ( north(w), east(a), west(d), south(s)");
        // Backups the current position in case there is no room where the player is moving to
        let playerposXBackup = Abschluss.player.posX;
        let playerposYBackup = Abschluss.player.posY;
        switch (_userInput) {
            // Changes Player position based on input
            case "w": {
                Abschluss.player.posY += 1;
                break;
            }
            case "a": {
                Abschluss.player.posX -= 1;
                break;
            }
            case "d": {
                Abschluss.player.posX += 1;
                break;
            }
            case "s": {
                Abschluss.player.posY -= 1;
                break;
            }
            default: {
                console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
                break;
            }
        }
        if (Abschluss.findRoom() == true) {
            Abschluss.player.posX = playerposXBackup;
            Abschluss.player.posY = playerposYBackup;
            console.log("Position reset to " + Abschluss.player.posX + " " + Abschluss.player.posY);
            Abschluss.createBodyElements();
        }
        else {
            console.log("New position: " + Abschluss.player.posX + " " + Abschluss.player.posY);
        }
    }
    Abschluss.changePosition = changePosition;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Person.js.map