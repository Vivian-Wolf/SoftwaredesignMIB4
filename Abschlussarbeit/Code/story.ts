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
                speechSecondLevel.innerText += ` Bitte! Verschone mich. Ich bin unschuldig. Ich kann es beweisen. \n${player.name} sagt: Sprich. \n ${firstEnemy.name} sagt: Ich wurde getäuscht. Das Gift wurde in meinen Mantel gesteckt, um die Revolution zu schwächen. \n ${player.name} sagt: Wie willst du das beweisen? \n ${firstEnemy.name} sagt: Suche den Detektiv auf. Er wird dir Beweise liefern.` ;
                createBodyElements();
                player.level = 3;
                break;
            }
         //   case 3: {

         //   }

        }
    }
}