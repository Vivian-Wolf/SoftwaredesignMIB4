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
    Abschluss.player.name = "Lord Mercier";
    pushMaps();
    function pushMaps() {
        Abschluss.gameMap.push(castleEntry);
        Abschluss.gameMap.push(castleGarden);
        Abschluss.gameMap.push(secretPassage);
        Abschluss.gameMap.push(bastille);
        Abschluss.gameMap.push(mirrorHall);
        Abschluss.gameMap.push(kingsDressingRoom);
    }
    let para = document.createElement("P"); // Create a <p> element
    para.innerText = "Herzlich Willkommen in Versailles " + Abschluss.player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal."; // Insert text
    document.body.appendChild(para); //Add to body  
    let form = document.createElement("form");
    form.setAttribute("id", "form");
    let elementsCreated = 0;
    createBodyElements();
    function createBodyElements() {
        for (let i = 0; i < 2; i++)
            if (elementsCreated == 0) {
                let userInput = document.createElement("input");
                userInput.setAttribute("name", "userInput");
                userInput.setAttribute("type", "text");
                userInput.setAttribute("id", "userInput");
                userInput.setAttribute("onkeyup", "Abschluss.changePosition(Abschluss.submitForm())");
                let inputLabel = document.createElement("label");
                inputLabel.innerText = "What would you like to do?:";
                inputLabel.setAttribute("id", "label");
                inputLabel.setAttribute("for", "userInput");
                form.appendChild(inputLabel);
                form.appendChild(userInput);
                document.body.appendChild(form);
                elementsCreated++;
                if (i == 0) {
                    break;
                }
            }
            else {
                let userInput = document.getElementById("userInput");
                let inputLabel = document.getElementById("label");
                form.removeChild(inputLabel);
                form.removeChild(userInput);
                document.body.removeChild(form);
                elementsCreated = 0;
            }
    }
    Abschluss.createBodyElements = createBodyElements;
    function submitForm() {
        let textInput = document.getElementById("userInput").value;
        return textInput;
    }
    Abschluss.submitForm = submitForm;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map