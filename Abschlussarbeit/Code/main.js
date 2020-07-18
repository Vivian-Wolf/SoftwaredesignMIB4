"use strict";
var Abschluss;
(function (Abschluss) {
    Abschluss.gameMap = [];
    //Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
    let castleEntry;
    castleEntry = new Abschluss.Room("Eingang des Schlosses", "pächtiger, überwältigender Eingang", 0, 0);
    castleEntry.objectsInRoom.push("eine Perücke", "ein paar Pferdezügel", "ein Armulet");
    let secretPassage;
    secretPassage = new Abschluss.Room("Geheimgang", "düsterer, schmaler Gang", -1, 0);
    secretPassage.objectsInRoom.push("eine Zange", "ein Kettenhemd");
    let bastille;
    bastille = new Abschluss.Room("Bastille", "hohe Gefängnismauern, in ihnen die berüchtigsten Mörder der Stadt", -1, 1);
    bastille.objectsInRoom.push("Knochen", "Fesseln", "einen Finger");
    let castleGarden;
    castleGarden = new Abschluss.Room("Schlossgarten", "außerordentlich schöne Gewächse, vom besten Gärtner der Stadt", 0, 1);
    castleGarden.objectsInRoom.push("eine Blume", "ein Dolch", "Dornen");
    let mirrorHall;
    mirrorHall = new Abschluss.Room("Spiegelsaal", "tausend Spiegel, tausend Schönheiten", 1, 0);
    mirrorHall.objectsInRoom.push("ein Spiegel");
    let kingsDressingRoom;
    kingsDressingRoom = new Abschluss.Room("Ankleidezimmer des Königs", "die privaten Gemächer des Königs", 1, 1);
    kingsDressingRoom.objectsInRoom.push("eine Kerze", "ein Schlüssel");
    pushMaps();
    function pushMaps() {
        Abschluss.gameMap.push(castleEntry);
        Abschluss.gameMap.push(castleGarden);
        Abschluss.gameMap.push(secretPassage);
        Abschluss.gameMap.push(bastille);
        Abschluss.gameMap.push(mirrorHall);
        Abschluss.gameMap.push(kingsDressingRoom);
    }
    let player = new Abschluss.Player("Lord Mercier");
    player.currentRoom = castleEntry;
    let para = document.createElement("P"); // Create a <p> element
    para.innerText = "Herzlich Willkommen in Versailles " + player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal."; // Insert text
    document.body.appendChild(para); //Add to body  
    let form = document.createElement("form");
    form.setAttribute("id", "form");
    let elementsCreated = 0;
    createBodyElements();
    function createBodyElements() {
        for (let i = 0; i < 2; i++)
            if (elementsCreated == 0) {
                createInputFieldWithLabel();
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
    function submitCharInput() {
        let textInput = document.getElementById("userInput").value;
        return textInput;
    }
    Abschluss.submitCharInput = submitCharInput;
    function processUserInput(_userInput) {
        switch (_userInput) {
            case "c": {
                showCommands();
                createBodyElements();
                break;
            }
            case "l": {
                player.look();
                createBodyElements();
                break;
            }
            case "t": {
                createBodyElementsForItemPicker();
                break;
            }
            case "g": {
                createBodyElementsForItemDrop();
                break;
            }
            case "q": {
                player.attack();
                createBodyElements();
                break;
            }
            case "u": {
                player.useItem();
                createBodyElements();
                break;
            }
            case "i": {
                player.showInventory();
                createBodyElements();
                break;
            }
            case "a": {
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "w": {
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "d": {
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "s": {
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "e": {
                player.speak();
                createBodyElements();
                break;
            }
            case "p": {
                break;
            }
            default: {
                console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
                createBodyElements();
                break;
            }
        }
    }
    Abschluss.processUserInput = processUserInput;
    function showCommands() {
        let paragraph = document.createElement("P"); // Create a <p> element
        paragraph.innerText = "Folgende Kommandos stehen zur Verfügung: \n kommandos (c), umschauen (l), nach Norden (w) / Süden (s) / Osten (d) / Westen (a) gehen, Inventar anzeigen (i), Item aufnehmen (t), Item zurücklegen (d), Item benutzen (u), attack (a), mit Person sprechen (e),  Spiel beenden (q)"; // Insert text
        document.body.appendChild(paragraph);
    }
    function createBodyElementsForItemPicker() {
        createBodyElements();
        let inputLabel = document.getElementById("label");
        inputLabel.innerText = "Welches Item soll ausgewählt werden?:";
        let inputField = document.getElementById("userInput");
        inputField.setAttribute("onchange", "Abschluss.player.takeItem(Abschluss.submitCharInput())");
    }
    function createBodyElementsForItemDrop() {
        createBodyElements();
        let inputLabel = document.getElementById("label");
        inputLabel.innerText = "Welches Item soll ausgewählt werden?:";
        let inputField = document.getElementById("userInput");
        inputField.setAttribute("onchange", "Abschluss.player.dropItem(Abschluss.submitCharInput())");
    }
    function createInputFieldWithLabel() {
        let userInput = document.createElement("input");
        userInput.setAttribute("name", "userInput");
        userInput.setAttribute("type", "text");
        userInput.setAttribute("id", "userInput");
        userInput.setAttribute("onchange", "Abschluss.processUserInput(Abschluss.submitCharInput())");
        let inputLabel = document.createElement("label");
        inputLabel.innerText = "What would you like to do?:";
        inputLabel.setAttribute("id", "label");
        inputLabel.setAttribute("for", "userInput");
        form.appendChild(inputLabel);
        form.appendChild(userInput);
        document.body.appendChild(form);
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map