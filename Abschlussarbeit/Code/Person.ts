namespace Abschluss {
    export class Person {
        public name: String;
        public lifepoints: number;
        canBeAttacked: boolean;
        posX: number = 0;
        posY: number = 0;
    }

    export function changePosition(_userInput: String): void {
        // Backups the current position in case there is no room where the player is moving to
        let playerposXBackup: number = player.posX;
        let playerposYBackup: number = player.posY;
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
            createBodyElements();
        }
        else {
            console.log("New position: " + player.posX + " " + player.posY);
        }
    }
}
