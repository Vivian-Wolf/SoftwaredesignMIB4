namespace Abschluss {

    export let gameMap: Room[] = [];

    //Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south

    let castleEntry: Room;
    castleEntry = new Room("Eingang des Schlosses", "pächtiger, überwältigender Eingang", 0, 0);
    castleEntry.objectsInRoom.push("eine Perücke", "ein paar Pferdezügel", "ein Armulet");

    let secretPassage: Room;
    secretPassage = new Room("Geheimgang", "düsterer, schmaler Gang", -1, 0);
    secretPassage.objectsInRoom.push("eine Zange", "ein Kettenhemd");

    let bastille: Room;
    bastille = new Room("Bastille", "hohe Gefängnismauern, in ihnen die berüchtigsten Mörder der Stadt", -1, 1);
    bastille.objectsInRoom.push("Knochen", "Fesseln", "einen Finger");

    let castleGarden: Room;
    castleGarden = new Room("Schlossgarten", "außerordentlich schöne Gewächse, vom besten Gärtner der Stadt", 0, 1);
    castleGarden.objectsInRoom.push("eine Blume", "ein Dolch", "Dornen");

    let mirrorHall: Room;
    mirrorHall = new Room("Spiegelsaal", "tausend Spiegel, tausend Schönheiten", 1, 0);
    mirrorHall.objectsInRoom.push("ein Spiegel");

    let kingsDressingRoom: Room;
    kingsDressingRoom = new Room("Ankleidezimmer des Königs", "die privaten Gemächer des Königs", 1, 1);
    kingsDressingRoom.objectsInRoom.push("eine Kerze", "ein Schlüssel");

    pushMaps();

    function pushMaps(): void {
        gameMap.push(castleEntry);
        gameMap.push(castleGarden);
        gameMap.push(secretPassage);
        gameMap.push(bastille);
        gameMap.push(mirrorHall);
        gameMap.push(kingsDressingRoom);
    }

    let player: Player = new Player("Lord Mercier");
    player.currentRoom = castleEntry;

    let para: HTMLElement = document.createElement("P");
    para.innerText = "Herzlich Willkommen in Versailles " + player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal.";
    document.body.appendChild(para);

    let form: HTMLElement = document.createElement("form");
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

    export function submitCharInput(): string {
        let textInput: string = (<HTMLInputElement>document.getElementById("userInput")).value;
        return textInput;
    }

    export function processUserInput(_userInput: String): void {
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
                let paragraph: HTMLElement = document.createElement("P");               // Create a <p> element
                paragraph.innerText = "Diese Aktion steht nicht zur Verfügung.";               // Insert text
                document.body.appendChild(paragraph);
                createBodyElements();
                break;
            }
        }
    }

    function showCommands(): void {
        let paragraph: HTMLElement = document.createElement("P");               // Create a <p> element
        paragraph.innerText = "Folgende Kommandos stehen zur Verfügung: \n kommandos (c), umschauen (l), nach Norden (w) / Süden (s) / Osten (d) / Westen (a) gehen, Inventar anzeigen (i), Item aufnehmen (t), Item zurücklegen (d), Item benutzen (u), attack (a), mit Person sprechen (e),  Spiel beenden (q)";               // Insert text
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

    export function dropItemFromInventory(_itemToPick: string): void {
        player.dropItem(_itemToPick);
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
}

