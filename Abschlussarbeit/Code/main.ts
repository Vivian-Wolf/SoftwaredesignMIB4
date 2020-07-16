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

    pushMaps();

    function pushMaps(): void {
        gameMap.push(castleEntry);
        gameMap.push(castleGarden);
        gameMap.push(secretPassage);
        gameMap.push(bastille);
        gameMap.push(mirrorHall);
        gameMap.push(kingsDressingRoom);
    }

    export function changePosition(_userInput: String): void {
        console.log("Please select the direction you want to go ( north(w), east(a), west(d), south(s)");
        // Backups the current position in case there is no room where the player is moving to
        let playerposXBackup: number = player.posX;
        let playerposYBackup: number = player.posY;

        //Debug Step
        console.log(_userInput);
        //Debug End

        switch (_userInput) {
            // Changes Player position based on input
            case "w": {
                player.posY += 1;
                break;
            }
            case "a": {
                player.posX -= 1;
                break;
            }
            case "d": {
                player.posX += 1;
                break;
            }
            case "s": {
                player.posY -= 1;
                break;
            }
            default: {
                console.log("Please select the direction you want to go ( north(n), east(e), west(w), south(s)");
                break;
            }
        }

        if (findRoom() == true) {
            player.posX = playerposXBackup;
            player.posY = playerposYBackup;
            console.log("Position reset to " + player.posX + " " + player.posY);
        }
        else {
            console.log("New position: " + player.posX + " " + player.posY);
        }
    }

    export function submitForm(): string {
        let textInput: string = (<HTMLInputElement>document.getElementById("userInput")).value;
        document.getElementById("userInput").nodeValue = null;
        return textInput;
    }

    //changePosition(submitForm());

}

