namespace Abschluss {

    export let gameMap: Room[] = [];

    //Positions: X + 1 = west, X - 1 = east, Y + 1 = north, Y -1 = south

    let castleEntry: Room;
    castleEntry = new Room("Eingang des Schlosses", "pächtiger, überwältigender Eingang", 0, 0);

    let secretPassage: Room;
    secretPassage = new Room("Geheimgang", "düsterer, schmaler Gang", -1, 0);

    let bastille: Room;
    bastille = new Room("Bastille", "hohe Gefängnismauern, in ihnen die berüchtigsten Mörder der Stadt", -1, 1);

    let castleGarden: Room;
    castleGarden = new Room("Schlossgarten", "außerordentlich schöne Gewächse, vom besten Gärtner der Stadt", 0, 1);

    let mirrorHall: Room;
    mirrorHall = new Room("Spiegelsaal", "tausend Spiegel, tausend Schönheiten", 1, 0);

    let kingsDressingRoom: Room;
    kingsDressingRoom = new Room("Ankleidezimmer des Königs", "die privaten Gemächer des Königs", 1, 1);

    export let player: Person = new Person;
    player.name = "Lord Mercier";

    pushMaps();

    function pushMaps(): void {
        gameMap.push(castleEntry);
        gameMap.push(castleGarden);
        gameMap.push(secretPassage);
        gameMap.push(bastille);
        gameMap.push(mirrorHall);
        gameMap.push(kingsDressingRoom);
    }


    let para: HTMLElement = document.createElement("P");               // Create a <p> element
    para.innerText = "Herzlich Willkommen in Versailles " + player.name + "! \n \n Ihre Majestät, der König, erwartet Sie im Spiegelsaal.";               // Insert text
    document.body.appendChild(para); //Add to body  

    let form: HTMLElement = document.createElement("form");
    form.setAttribute("id", "form");

    let elementsCreated: number = 0;
    createBodyElements();

    export function createBodyElements(): void {

        for (let i: number = 0; i < 2; i++)

            if (elementsCreated == 0) {

                let userInput: HTMLElement = document.createElement("input");
                userInput.setAttribute("name", "userInput");
                userInput.setAttribute("type", "text");
                userInput.setAttribute("id", "userInput");
                userInput.setAttribute("onkeyup", "Abschluss.changePosition(Abschluss.submitForm())");

                let inputLabel: HTMLElement = document.createElement("label");
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
                let userInput: HTMLElement = document.getElementById("userInput");
                let inputLabel: HTMLElement = document.getElementById("label");
                form.removeChild(inputLabel);
                form.removeChild(userInput);
                document.body.removeChild(form);
                elementsCreated = 0;
            }
    }



    export function submitForm(): string {
        let textInput: string = (<HTMLInputElement>document.getElementById("userInput")).value;

        return textInput;
    }

}

