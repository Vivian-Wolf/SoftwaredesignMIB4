"use strict";
var Abschluss;
(function (Abschluss) {
    Abschluss.gameMap = [];
    //Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south
    let castleEntry;
    castleEntry = new Abschluss.Room("Eingang des Schlosses", "pächtiger, überwältigender Eingang", 0, 0);
    castleEntry.objectsInRoom.push("eine Perücke", "ein paar Pferdezügel", "ein Armulet");
    Abschluss.secretPassage = new Abschluss.Room("Geheimgang", "düsterer, schmaler Gang", -1, 0);
    Abschluss.secretPassage.objectsInRoom.push("eine Zange", "ein Kettenhemd");
    Abschluss.bastille = new Abschluss.Room("Bastille", "hohe Gefängnismauern, in ihnen die berüchtigsten Mörder der Stadt", -1, 1);
    Abschluss.bastille.objectsInRoom.push("Knochen", "Fesseln", "einen Finger");
    let castleGarden;
    castleGarden = new Abschluss.Room("Schlossgarten", "außerordentlich schöne Gewächse, vom besten Gärtner der Stadt", 0, 1);
    castleGarden.objectsInRoom.push("eine Blume", "ein Dolch", "Dornen");
    Abschluss.mirrorHall = new Abschluss.Room("Spiegelsaal", "tausend Spiegel, tausend Schönheiten", 1, 0);
    Abschluss.mirrorHall.objectsInRoom.push("ein Spiegel");
    let kingsDressingRoom;
    kingsDressingRoom = new Abschluss.Room("Ankleidezimmer des Königs", "die privaten Gemächer des Königs", 1, 1);
    kingsDressingRoom.objectsInRoom.push("eine Kerze", "ein Schlüssel");
    Abschluss.player = new Abschluss.Player("Lord Mercier");
    Abschluss.player.currentRoom = castleEntry;
    Abschluss.player.lifepoints = 100;
    Abschluss.prisoners = new Abschluss.Enemy("Gefangene", Abschluss.bastille, 40);
    Abschluss.firstEnemy = new Abschluss.Enemy("Marie Lorean", Abschluss.bastille, 75);
    Abschluss.guardGarden = new Abschluss.Enemy("Garde", castleGarden, 60);
    Abschluss.guardEntry = new Abschluss.Enemy("Garde", castleEntry, 100);
    Abschluss.king = new Abschluss.NormalPerson("König", Abschluss.mirrorHall, 10);
    Abschluss.detective = new Abschluss.NormalPerson("Dedektiv des Königs", Abschluss.mirrorHall, 200);
    let mistress = new Abschluss.NormalPerson("Geliebte des Königs", kingsDressingRoom, 50);
    //export let testPerson: NormalPerson = new NormalPerson("TestPerson", mirrorHall, 200);
    //mirrorHall.personsInRoom.push(testPerson);
    pushMaps();
    function pushMaps() {
        Abschluss.gameMap.push(castleEntry);
        Abschluss.gameMap.push(castleGarden);
        Abschluss.gameMap.push(Abschluss.secretPassage);
        Abschluss.gameMap.push(Abschluss.bastille);
        Abschluss.gameMap.push(Abschluss.mirrorHall);
        Abschluss.gameMap.push(kingsDressingRoom);
    }
    pushPersons();
    function pushPersons() {
        Abschluss.bastille.personsInRoom.push(Abschluss.prisoners);
        castleGarden.personsInRoom.push(Abschluss.guardGarden);
        castleEntry.personsInRoom.push(Abschluss.guardEntry);
        Abschluss.mirrorHall.personsInRoom.push(Abschluss.king);
        kingsDressingRoom.personsInRoom.push(mistress);
        Abschluss.secretPassage.personsInRoom.push(Abschluss.detective);
    }
    let paragraph = document.createElement("P");
    paragraph.innerText = "Herzlich Willkommen in Versailles " + Abschluss.player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal.";
    document.body.appendChild(paragraph);
    Abschluss.form = document.createElement("form");
    Abschluss.form.setAttribute("id", "form");
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
                Abschluss.form.removeChild(inputLabel);
                Abschluss.form.removeChild(userInput);
                document.body.removeChild(Abschluss.form);
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
                Abschluss.player.look();
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
            case "i": {
                Abschluss.player.showInventory();
                createBodyElements();
                break;
            }
            case "a": {
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "w": {
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "d": {
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "s": {
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "e": {
                Abschluss.player.speak();
                break;
            }
            case "p": {
                document.body.removeChild(Abschluss.form);
                break;
            }
            default: {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Diese Aktion steht nicht zur Verfügung. Um alle Aktionen sehen zu können, drücke c .";
                document.body.appendChild(paragraph);
                createBodyElements();
                break;
            }
        }
    }
    Abschluss.processUserInput = processUserInput;
    function showCommands() {
        let paragraph = document.createElement("P");
        paragraph.innerText = "Folgende Kommandos stehen zur Verfügung: \n kommandos (c), umschauen (l), nach Norden (w) / Süden (s) / Osten (d) / Westen (a) gehen, Inventar anzeigen (i), Item aufnehmen (t), Item zurücklegen (d), Item benutzen (u), attack (a), mit Person sprechen (e),  Spiel beenden (q)";
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
        Abschluss.player.takeItem(_itemToPick);
    }
    Abschluss.takeItemFromRoom = takeItemFromRoom;
    function createBodyElementsForItemDrop() {
        createBodyElements();
        let inputLabel = document.getElementById("label");
        inputLabel.innerText = "Welches Item soll ausgewählt werden?:";
        let inputField = document.getElementById("userInput");
        inputField.setAttribute("onchange", "Abschluss.dropItemFromInventory(Abschluss.submitCharInput())");
    }
    function dropItemFromInventory(_itemToDrop) {
        Abschluss.player.dropItem(_itemToDrop);
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
        Abschluss.form.appendChild(inputLabel);
        Abschluss.form.appendChild(userInput);
        document.body.appendChild(Abschluss.form);
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
            let paragraph = document.createElement("P");
            paragraph.innerText = "Die Person, die du attackieren möchtest, befindet sich nicht im Raum.";
            document.body.appendChild(paragraph);
            createBodyElements();
        }
        else {
            if (Abschluss.player.currentRoom.personsInRoom[personIsPartOfRoom].canBeAttacked == true) {
                Abschluss.player.attack(Abschluss.player.currentRoom.personsInRoom[personIsPartOfRoom]);
            }
            else {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Die Person, die du attackieren möchtest, ist nicht dein Feind. Du kannst diese Person nicht attackieren.";
                document.body.appendChild(paragraph);
                createBodyElements();
            }
        }
    }
    Abschluss.checkIfPersonCanBeAttacked = checkIfPersonCanBeAttacked;
    function findPersonInRoom(_personToFind) {
        let indexOfFoundPerson = -1;
        let personsToCheck = Abschluss.player.currentRoom.personsInRoom;
        for (let i = 0; i < Abschluss.player.currentRoom.personsInRoom.length; i++) {
            if (personsToCheck[i].name == _personToFind) {
                indexOfFoundPerson = i;
            }
        }
        return indexOfFoundPerson;
    }
    Abschluss.findPersonInRoom = findPersonInRoom;
    function checkIfPlayerCanSpeakToPerson(_personToSpeakWith) {
        let personIsPartOfRoom = findPersonInRoom(_personToSpeakWith);
        if (personIsPartOfRoom == -1) {
            let paragraph = document.createElement("P");
            paragraph.innerText = "Die Person, mit der du sprechen möchtest befindet sich nicht im Raum.";
            document.body.appendChild(paragraph);
            createBodyElements();
        }
        else {
            Abschluss.player.currentRoom.personsInRoom[personIsPartOfRoom].speak();
        }
    }
    Abschluss.checkIfPlayerCanSpeakToPerson = checkIfPlayerCanSpeakToPerson;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map