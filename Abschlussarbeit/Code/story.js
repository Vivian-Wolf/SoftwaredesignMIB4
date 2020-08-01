"use strict";
var Abschluss;
(function (Abschluss) {
    function story() {
        switch (Abschluss.player.level) {
            case 1: {
                Abschluss.king.speak();
                let speech = document.getElementById("speakParagraphNormalPerson");
                speech.innerText += " " + Abschluss.player.name + " ein Glück sind Sie endlich hier. " + Abschluss.firstEnemy.name + " hat Hochverrat begangen. Er muss ermordet werden. Diskret. Ich denke, Sie verstehen, was ich meine.";
                break;
            }
            case 2: {
                Abschluss.firstEnemy.speak();
                let speechSecondLevel = document.getElementById("speakParagraphEnemy");
                speechSecondLevel.innerText += ` Bitte! Verschone mich. Ich bin unschuldig. Ich kann es beweisen. \n${Abschluss.player.name} sagt: Sprich. \n ${Abschluss.firstEnemy.name} sagt: Ich wurde getäuscht. Das Gift wurde in meinen Mantel gesteckt, um die Revolution zu schwächen. \n ${Abschluss.player.name} sagt: Wie willst du das beweisen? \n ${Abschluss.firstEnemy.name} sagt: Suche den Detektiv auf. Er wird dir Beweise liefern.`;
                Abschluss.player.level = 3;
                Abschluss.bastille.personsInRoom.splice(Abschluss.findPersonInRoom(Abschluss.firstEnemy.name), 1);
                Abschluss.firstEnemy = new Abschluss.NormalPerson(Abschluss.firstEnemy.name, Abschluss.firstEnemy.currentRoom, Abschluss.firstEnemy.lifepoints);
                Abschluss.bastille.personsInRoom.push(Abschluss.firstEnemy);
                break;
            }
            case 3: {
                let speechDetective = document.createElement("p");
                speechDetective.innerText = `${Abschluss.detective.name} sagt: Das Land ist verloren. Der König, er hat die Bürger des Landes gegen sich gerichtet. Marie Lorean wollte ihn nicht töten. Er wollte die Revolution stoppen, nachdem sich auch die niedrigen Adelleute gegen ihn gewandt haben. Diese Schlacht ist verloren. Der einzige Weg den König jetzt noch zu retten, ist ihn selbst dem heiligen Vater zu überlassen.`;
                document.body.appendChild(speechDetective);
                Abschluss.createBodyElements();
                Abschluss.mirrorHall.personsInRoom.splice(Abschluss.findPersonInRoom(Abschluss.king.name), 1);
                Abschluss.king = new Abschluss.Enemy(Abschluss.king.name, Abschluss.king.currentRoom, Abschluss.king.lifepoints);
                Abschluss.mirrorHall.personsInRoom.push(Abschluss.king);
                Abschluss.player.level = 4;
                break;
            }
            case 5: {
                let paragraph = document.createElement("P");
                paragraph.innerText = "Die Revolution nimmt ihren Gang. Ein neuer Staat wurde geboren.";
                document.body.appendChild(paragraph);
                document.body.removeChild(Abschluss.form);
                break;
            }
        }
    }
    Abschluss.story = story;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=story.js.map