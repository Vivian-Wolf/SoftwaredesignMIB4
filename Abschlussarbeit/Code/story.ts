namespace Abschluss {
    export function story(): void {
        switch (player.level) {
            case 1: {
                king.speak();
                let speech: HTMLElement = document.getElementById("speakParagraphNormalPerson");
                speech.innerText += " " + player.name + " ein Glück sind Sie endlich hier. " + firstEnemy.name + " hat Hochverrat begangen. Er muss ermordet werden. Diskret. Ich denke, Sie verstehen, was ich meine.";
                break;
            }
            case 2: {
                firstEnemy.speak();
                let speechSecondLevel: HTMLElement = document.getElementById("speakParagraphEnemy");
                speechSecondLevel.innerText += ` Bitte! Verschone mich. Ich bin unschuldig. Ich kann es beweisen. \n${player.name} sagt: Sprich. \n ${firstEnemy.name} sagt: Ich wurde getäuscht. Das Gift wurde in meinen Mantel gesteckt, um die Revolution zu schwächen. \n ${player.name} sagt: Wie willst du das beweisen? \n ${firstEnemy.name} sagt: Suche den Detektiv auf. Er wird dir Beweise liefern.`;
                player.level = 3;
                bastille.personsInRoom.splice(findPersonInRoom(firstEnemy.name), 1);
                firstEnemy = new NormalPerson(firstEnemy.name, firstEnemy.currentRoom, firstEnemy.lifepoints);
                bastille.personsInRoom.push(firstEnemy);
                break;
            }
            case 3: {
                let speechDetective: HTMLElement = document.createElement("p");
                speechDetective.innerText = `${firstEnemy.name} sagt: Das Land ist verloren. Der König, er hat die Bürger des Landes gegen sich gerichtet. Marie Lorean wollte ihn nicht töten. Er wollte die Revolution stoppen, nachdem sich auch die niedrigen Adelleute gegen ihn gewandt haben. Diese Schlacht ist verloren. Der einzige Weg den König jetzt noch zu retten, ist ihn selbst dem heiligen Vater zu überlassen.`;
                document.body.appendChild(speechDetective);
                createBodyElements();
                mirrorHall.personsInRoom.splice(findPersonInRoom(king.name), 1);
                king = new Enemy(king.name, king.currentRoom, king.lifepoints);
                mirrorHall.personsInRoom.push(king);
                player.level = 4;
                break;
            }
            case 5: {
                let paragraph: HTMLElement = document.createElement("P");
                paragraph.innerText = "Die Revolution nimmt ihren Gang. Ein neuer Staat wurde geboren.";
                document.body.appendChild(paragraph);

                let userInput: HTMLElement = document.getElementById("userInput");
                let inputLabel: HTMLElement = document.getElementById("label");
                form.removeChild(inputLabel);
                form.removeChild(userInput);
                document.body.removeChild(form);
                
                break;
            }

        }
    }
}