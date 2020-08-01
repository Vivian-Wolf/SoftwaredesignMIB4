namespace Abschluss {

    export let gameMap: Room[] = [];

    //Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south

    let castleEntry: Room;
    castleEntry = new Room("Eingang des Schlosses", "pächtiger, überwältigender Eingang", 0, 0);
    castleEntry.objectsInRoom.push("eine Perücke", "ein paar Pferdezügel", "ein Armulet");

    export let secretPassage: Room;
    secretPassage = new Room("Geheimgang", "düsterer, schmaler Gang", -1, 0);
    secretPassage.objectsInRoom.push("eine Zange", "ein Kettenhemd");

    export let bastille: Room;
    bastille = new Room("Bastille", "hohe Gefängnismauern, in ihnen die berüchtigsten Mörder der Stadt", -1, 1);
    bastille.objectsInRoom.push("Knochen", "Fesseln", "einen Finger");

    let castleGarden: Room;
    castleGarden = new Room("Schlossgarten", "außerordentlich schöne Gewächse, vom besten Gärtner der Stadt", 0, 1);
    castleGarden.objectsInRoom.push("eine Blume", "ein Dolch", "Dornen");

    export let mirrorHall: Room;
    mirrorHall = new Room("Spiegelsaal", "tausend Spiegel, tausend Schönheiten", 1, 0);
    mirrorHall.objectsInRoom.push("ein Spiegel");

    let kingsDressingRoom: Room;
    kingsDressingRoom = new Room("Ankleidezimmer des Königs", "die privaten Gemächer des Königs", 1, 1);
    kingsDressingRoom.objectsInRoom.push("eine Kerze", "ein Schlüssel");

    export let player: Player = new Player("Lord Mercier", castleEntry, 100);

    export let prisoners: NormalPerson = new NormalPerson("Gefangene", bastille, 40, false, ["Wer anderen die Freiheit verweigert, verdient sie nicht für sich selbst", "Lasst die Revolution herrschen.", "Und eines Tages bin ich wieder frei und sag mir, wer Dich dann noch retten kann."]);
    export let firstEnemy: Person = new Enemy("Marie Lorean", bastille, 75, false);
    export let guardGarden: Enemy = new Enemy("Königsgarde", castleGarden, 60, true);
    export let guardEntry: Enemy = new Enemy("Königsgarde", castleEntry, 100, true);
    export let king: StoryCharacter = new StoryCharacter("König", mirrorHall, 10, false);
    export let detective: StoryCharacter = new StoryCharacter("Dedektiv des Königs", secretPassage, 200, false);
    let mistress: NormalPerson = new NormalPerson("Geliebte des Königs", kingsDressingRoom, 50, true, ["Hier wird es nur eine Herrin geben und keinen Herrn.", "Charme und Perfektion vertragen sich schlecht miteinander. Charme setzt kleine Fehler voraus.", "Gäbe es die Königin nicht, wäre ich Königin."]);

    pushMaps();

    function pushMaps(): void {
        gameMap.push(castleEntry);
        gameMap.push(castleGarden);
        gameMap.push(secretPassage);
        gameMap.push(bastille);
        gameMap.push(mirrorHall);
        gameMap.push(kingsDressingRoom);
    }

    pushPersons();

    function pushPersons(): void {
        bastille.personsInRoom.push(prisoners);
        bastille.personsInRoom.push(firstEnemy);
        castleGarden.personsInRoom.push(guardGarden);
        castleEntry.personsInRoom.push(guardEntry);
        mirrorHall.personsInRoom.push(king);
        kingsDressingRoom.personsInRoom.push(mistress);
        secretPassage.personsInRoom.push(detective);
    }

    let paragraph: HTMLElement = document.createElement("P");
    paragraph.innerText = "Herzlich Willkommen in Versailles " + player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal.";
    document.body.appendChild(paragraph);

    let instructions: HTMLElement = document.createElement("P");
    instructions.innerText = "Bewege Dich mit w, a, s, d nach Norden, Westen, Süden, Osten \n Mit der Eingabe von c erscheinen alle zur Verfügung stehenden Befehle.";
    instructions.setAttribute("id", "instructions");
    document.body.appendChild(instructions);

    export let form: HTMLElement = document.createElement("form");
    form.setAttribute("id", "form");

    let elementsCreated: number = 0;
    createBodyElements();

    export function createBodyElements(): void {

        for (let i: number = 0; i < 2; i++)

            if (elementsCreated == 0) {
                createInputFieldWithLabel();
                elementsCreated++;

                if (i == 0) {
                    break;
                }
            }
            else {
                let userInput: HTMLElement = document.getElementById("userInput");
                let inputLabel: HTMLElement = document.getElementById("label");
                form.removeChild(inputLabel);
                form.removeChild(userInput);
                document.body.removeChild(form);
                elementsCreated = 0;
            }
    }

    function createInputFieldWithLabel(): void {
        let userInput: HTMLElement = document.createElement("input");
        userInput.setAttribute("name", "userInput");
        userInput.setAttribute("type", "text");
        userInput.setAttribute("id", "userInput");
        userInput.setAttribute("onchange", "Abschluss.processUserInput(Abschluss.submitCharInput())");

        let inputLabel: HTMLElement = document.createElement("label");
        inputLabel.innerText = "Was möchtest du tun?:";
        inputLabel.setAttribute("id", "label");
        inputLabel.setAttribute("for", "userInput");

        form.appendChild(inputLabel);
        form.appendChild(userInput);
        document.body.appendChild(form);
    }

    export function submitCharInput(): string {
        let textInput: string = (<HTMLInputElement>document.getElementById("userInput")).value;
        return textInput;
    }

    export function processUserInput(_userInput: string): void {
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
            case "i": {
                player.showInventory();
                createBodyElements();
                break;
            }
            case "a": {
                letCharactersWalk();
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "w": {
                letCharactersWalk();
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "d": {
                letCharactersWalk();
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "s": {
                letCharactersWalk();
                player.changePosition(submitCharInput());
                createBodyElements();
                break;
            }
            case "e": {
                player.speak();
                break;
            }
            case "p": {
                document.body.removeChild(form);
                break;
            }
            default: {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Diese Aktion steht nicht zur Verfügung. Um alle Aktionen sehen zu können, drücke c .";
                document.body.appendChild(paragraph);
                createBodyElements();
                break;
            }
        }
    }

    function showCommands(): void {
        let paragraph: HTMLElement = document.createElement("P");
        paragraph.innerText = "Folgende Kommandos stehen zur Verfügung: \n kommandos (c), umschauen (l), nach Norden (w) / Süden (s) / Osten (d) / Westen (a) gehen, Inventar anzeigen (i), Item aufnehmen (t), Item zurücklegen (g), attack (q), mit Person sprechen (e),  Spiel beenden (p)";
        document.body.appendChild(paragraph);
    }

    function createBodyElementsForItemPicker(): void {
        createBodyElements();

        let inputLabel: HTMLElement = document.getElementById("label");
        inputLabel.innerText = "Welches Item soll ausgewählt werden?:";

        let inputField: HTMLElement = document.getElementById("userInput");
        inputField.removeAttribute("onchange");
        inputField.setAttribute("onchange", "Abschluss.takeItemFromRoom(Abschluss.submitCharInput())");
    }

    export function takeItemFromRoom(_itemToPick: string): void {
        player.takeItem(_itemToPick);
    }

    function createBodyElementsForItemDrop(): void {
        createBodyElements();

        let inputLabel: HTMLElement = document.getElementById("label");
        inputLabel.innerText = "Welches Item soll ausgewählt werden?:";

        let inputField: HTMLElement = document.getElementById("userInput");
        inputField.setAttribute("onchange", "Abschluss.dropItemFromInventory(Abschluss.submitCharInput())");
    }

    export function dropItemFromInventory(_itemToDrop: string): void {
        player.dropItem(_itemToDrop);
    }

    function createBodyElementsForAttack(): void {
        createBodyElements();

        let inputLabel: HTMLElement = document.getElementById("label");
        inputLabel.innerText = "Welche Person soll attackiert werden?:";

        let inputField: HTMLElement = document.getElementById("userInput");
        inputField.removeAttribute("onchange");
        inputField.setAttribute("onchange", "Abschluss.checkIfPersonCanBeAttacked(Abschluss.submitCharInput())");
    }

    export function checkIfPersonCanBeAttacked(_personToAttack: string): void {

        let personIsPartOfRoom: number = findPersonInRoom(_personToAttack);

        if (personIsPartOfRoom == -1) {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Die Person, die du attackieren möchtest, befindet sich nicht im Raum.";
            document.body.appendChild(paragraph);
            createBodyElements();
        } else {
            if (player.currentRoom.personsInRoom[personIsPartOfRoom].canBeAttacked == true) {
                player.attack(player.currentRoom.personsInRoom[personIsPartOfRoom]);
            } else {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Die Person, die du attackieren möchtest, ist nicht dein Feind. Du kannst diese Person nicht attackieren.";
                document.body.appendChild(paragraph);
                createBodyElements();
            }
        }
    }

    function letCharactersWalk(): void {
        for (let i: number = 0; i < gameMap.length; i++) {
            for (let j: number = 0; j < gameMap[i].personsInRoom.length; j++) {
                gameMap[i].personsInRoom[j].walk();
            }
        }
    }

    export function findPersonInRoom(_personToFind: string): number {
        let indexOfFoundPerson: number = -1;
        let personsToCheck: Person[] = player.currentRoom.personsInRoom;

        for (let i: number = 0; i < player.currentRoom.personsInRoom.length; i++) {
            if (personsToCheck[i].name == _personToFind) {
                indexOfFoundPerson = i;
            }
        }
        return indexOfFoundPerson;
    }

    export function checkIfPlayerCanSpeakToPerson(_personToSpeakWith: string): void {
        let personIsPartOfRoom: number = findPersonInRoom(_personToSpeakWith);

        if (personIsPartOfRoom == -1) {
            let paragraph: HTMLElement = document.createElement("P");
            paragraph.innerText = "Die Person, mit der du sprechen möchtest befindet sich nicht im Raum.";
            document.body.appendChild(paragraph);
            createBodyElements();
        } else {
            player.currentRoom.personsInRoom[personIsPartOfRoom].speak();
        }
    }
}

