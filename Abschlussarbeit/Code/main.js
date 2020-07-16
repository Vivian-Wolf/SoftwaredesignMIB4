"use strict";
var Abschluss;
(function (Abschluss) {
    Abschluss.gameMap = [];
    //Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
    let castleEntry;
    castleEntry = new Abschluss.Room("Eingang des Schlosses", "pächtiger, überwältigender Eingang", 0, 0);
    let secretPassage;
    secretPassage = new Abschluss.Room("Geheimgang", "düsterer, schmaler Gang", -1, 0);
    let bastille;
    bastille = new Abschluss.Room("Bastille", "hohe Gefängnismauern, in ihnen die berüchtigsten Mörder der Stadt", -1, 1);
    let castleGarden;
    castleGarden = new Abschluss.Room("Schlossgarten", "außerordentlich schöne Gewächse, vom besten Gärtner der Stadt", 0, 1);
    let mirrorHall;
    mirrorHall = new Abschluss.Room("Spiegelsaal", "tausend Spiegel, tausend Schönheiten", 1, 0);
    let kingsDressingRoom;
    kingsDressingRoom = new Abschluss.Room("Ankleidezimmer des Königs", "die privaten Gemächer des Königs", 1, 1);
    Abschluss.player = new Abschluss.Person;
    pushMaps();
    function pushMaps() {
        Abschluss.gameMap.push(castleEntry);
        Abschluss.gameMap.push(castleGarden);
        Abschluss.gameMap.push(secretPassage);
        Abschluss.gameMap.push(bastille);
        Abschluss.gameMap.push(mirrorHall);
        Abschluss.gameMap.push(kingsDressingRoom);
    }
    function changePosition(_userInput) {
        console.log("Please select the direction you want to go ( north(w), east(a), west(d), south(s)");
        // Backups the current position in case there is no room where the player is moving to
        let playerposXBackup = Abschluss.player.posX;
        let playerposYBackup = Abschluss.player.posY;
        //Debug Step
        console.log(_userInput);
        //Debug End
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
        }
        else {
            console.log("New position: " + Abschluss.player.posX + " " + Abschluss.player.posY);
        }
    }
    Abschluss.changePosition = changePosition;
    function submitForm() {
        let textInput = document.getElementById("userInput").value;
        document.getElementById("userInput").nodeValue = null;
        return textInput;
    }
    Abschluss.submitForm = submitForm;
    //changePosition(submitForm());
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map