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
    Abschluss.player = new Abschluss.Player("Lord Mercier", castleEntry, 100);
    Abschluss.prisoners = new Abschluss.NormalPerson("Gefangene", Abschluss.bastille, 40, false, ["Wer anderen die Freiheit verweigert, verdient sie nicht für sich selbst", "Lasst die Revolution herrschen.", "Und eines Tages bin ich wieder frei und sag mir, wer Dich dann noch retten kann."]);
    Abschluss.firstEnemy = new Abschluss.Enemy("Marie Lorean", Abschluss.bastille, 75, false);
    Abschluss.guardGarden = new Abschluss.Enemy("Königsgarde", castleGarden, 60, true);
    Abschluss.guardEntry = new Abschluss.Enemy("Königsgarde", castleEntry, 100, true);
    Abschluss.king = new Abschluss.StoryCharacter("König", Abschluss.mirrorHall, 10, false);
    Abschluss.detective = new Abschluss.StoryCharacter("Dedektiv des Königs", Abschluss.secretPassage, 200, false);
    let mistress = new Abschluss.NormalPerson("Geliebte des Königs", kingsDressingRoom, 50, true, ["Hier wird es nur eine Herrin geben und keinen Herrn.", "Charme und Perfektion vertragen sich schlecht miteinander. Charme setzt kleine Fehler voraus.", "Gäbe es die Königin nicht, wäre ich Königin."]);
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
        Abschluss.bastille.personsInRoom.push(Abschluss.firstEnemy);
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
                letCharactersWalk();
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "w": {
                letCharactersWalk();
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "d": {
                letCharactersWalk();
                Abschluss.player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "s": {
                letCharactersWalk();
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
        paragraph.innerText = "Folgende Kommandos stehen zur Verfügung: \n kommandos (c), umschauen (l), nach Norden (w) / Süden (s) / Osten (d) / Westen (a) gehen, Inventar anzeigen (i), Item aufnehmen (t), Item zurücklegen (g), attack (q), mit Person sprechen (e),  Spiel beenden (p)";
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
    function letCharactersWalk() {
        for (let i = 0; i < Abschluss.gameMap.length; i++) {
            for (let j = 0; j < Abschluss.gameMap[i].personsInRoom.length; j++) {
                Abschluss.gameMap[i].personsInRoom[j].walk();
            }
        }
    }
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