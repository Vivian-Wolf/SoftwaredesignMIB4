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
                Abschluss.createBodyElements();
                Abschluss.player.level = 3;
                break;
            }
            //   case 3: {
            //   }
        }
    }
    Abschluss.story = story;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=story.js.map