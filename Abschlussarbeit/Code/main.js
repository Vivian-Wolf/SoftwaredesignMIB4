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
    player.lifepoints = 100;
    let prisoners = new Abschluss.Enemy("Gefangene", bastille, 40);
    bastille.personsInRoom.push(prisoners);
    let guardGarden = new Abschluss.Enemy("Garde", castleGarden, 60);
    castleGarden.personsInRoom.push(guardGarden);
    let guardEntry = new Abschluss.Enemy("Garde", castleEntry, 100);
    castleEntry.personsInRoom.push(guardEntry);
    let king = new Abschluss.NormalPerson("König", mirrorHall, 200);
    mirrorHall.personsInRoom.push(king);
    let mistress = new Abschluss.NormalPerson("Geliebte des Königs", kingsDressingRoom, 50);
    kingsDressingRoom.personsInRoom.push(mistress);
    let para = document.createElement("P");
    para.innerText = "Herzlich Willkommen in Versailles " + player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal.";
    document.body.appendChild(para);
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
                createBodyElementsForAttack();
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
                let paragraph = document.createElement("P"); // Create a <p> element
                paragraph.innerText = "Diese Aktion steht nicht zur Verfügung."; // Insert text
                document.body.appendChild(paragraph);
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
        inputField.removeAttribute("onchange");
        inputField.setAttribute("onchange", "Abschluss.takeItemFromRoom(Abschluss.submitCharInput())");
    }
    function takeItemFromRoom(_itemToPick) {
        player.takeItem(_itemToPick);
    }
    Abschluss.takeItemFromRoom = takeItemFromRoom;
    function createBodyElementsForItemDrop() {
        createBodyElements();
        let inputLabel = document.getElementById("label");
        inputLabel.innerText = "Welches Item soll ausgewählt werden?:";
        let inputField = document.getElementById("userInput");
        inputField.setAttribute("onchange", "Abschluss.dropItemFromInventory(Abschluss.submitCharInput())");
    }
    function dropItemFromInventory(_itemToPick) {
        player.dropItem(_itemToPick);
    }
    Abschluss.dropItemFromInventory = dropItemFromInventory;
    function createInputFieldWithLabel() {
        let userInput = document.createElement("input");
        userInput.setAttribute("name", "userInput");
        userInput.setAttribute("type", "text");
        userInput.setAttribute("id", "userInput");
        userInput.setAttribute("onchange", "Abschluss.processUserInput(Abschluss.submitCharInput())");
        let inputLabel = document.createElement("label");
        inputLabel.innerText = "Was möchtest du tun?:";
        inputLabel.setAttribute("id", "label");
        inputLabel.setAttribute("for", "userInput");
        form.appendChild(inputLabel);
        form.appendChild(userInput);
        document.body.appendChild(form);
    }
    function createBodyElementsForAttack() {
        createBodyElements();
        let inputLabel = document.getElementById("label");
        inputLabel.innerText = "Welche Person soll attackiert werden?:";
        let inputField = document.getElementById("userInput");
        inputField.removeAttribute("onchange");
        inputField.setAttribute("onchange", "Abschluss.checkIfPersonCanBeAttacked(Abschluss.submitCharInput())");
    }
    function checkIfPersonCanBeAttacked(_personToAttack) {
        let personIsPartOfRoom = findPersonInRoom(_personToAttack);
        if (personIsPartOfRoom == -1) {
            let paragraph = document.createElement("P"); // Create a <p> element
            paragraph.innerText = "Die Person, die du attackieren möchtest befindet sich nicht im Raum."; // Insert text
            document.body.appendChild(paragraph);
            createBodyElements();
        }
        else {
            if (player.currentRoom.personsInRoom[personIsPartOfRoom].canBeAttacked == true) {
                player.attack(player.currentRoom.personsInRoom[personIsPartOfRoom]);
            }
            else {
                let paragraph = document.createElement("P"); // Create a <p> element
                paragraph.innerText = "Die Person, die du attackieren möchtest ist nicht dein Feind. Du kannst diese Person nicht attackieren."; // Insert text
                document.body.appendChild(paragraph);
                createBodyElements();
            }
        }
    }
    Abschluss.checkIfPersonCanBeAttacked = checkIfPersonCanBeAttacked;
    function findPersonInRoom(_personToFind) {
        let indexOfFoundPerson = -1;
        let personIsInRoom = false;
        let personsToCheck = player.currentRoom.personsInRoom;
        for (let i = 0; i < player.currentRoom.personsInRoom.length; i++) {
            if (personsToCheck[i].name == _personToFind) {
                personIsInRoom = true;
                indexOfFoundPerson = i;
            }
        }
        return indexOfFoundPerson;
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map