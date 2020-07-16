System.register(["./Ops"], function (exports_1, context_1) {
    "use strict";
    var Ops_1;
    var __moduleName = context_1 && context_1.id;
    function findFirtstNonDigit(_s) {
        for (let i = 0; i < _s.length; i++) {
            if (_s.charAt(i) == "+" || _s.charAt(i) == "-" || _s.charAt(i) == "*" || _s.charAt(i) == "/" || _s.charAt(i) == "^" || _s.charAt(i) == "#")
                return i;
        }
        return -1;
    }
    return {
        setters: [
            function (Ops_1_1) {
                Ops_1 = Ops_1_1;
            }
        ],
        execute: function () {
            console.log("Welcome to the Calculator. Start entering calculations.");
            for (;;) {
                console.log("> ");
                let command = prompt("Welcome to the Calculator. Start entering calculations.");
                if (command.toLowerCase() == "exit")
                    break;
                let left = 0;
                let right = 0;
                let opInx = findFirtstNonDigit(command);
                if (opInx < 0)
                    console.log("No operator specified");
                let opSymbol = command[opInx];
                try {
                    left = parseInt(command.substring(0, opInx));
                    right = parseInt(command.substring(opInx + 1));
                }
                catch (exeption) {
                    console.log("Error parsing command");
                }
                console.log(`Calculating ${left} ${opSymbol} ${right} ...`);
                let result;
                switch (opSymbol) {
                    case "+":
                        result = left + right;
                        prompt("" + result);
                        break;
                    case "-":
                        result = left - right;
                        prompt("" + result);
                        break;
                    case "*":
                        result = left * right;
                        prompt("" + result);
                        break;
                    case "/":
                        result = left / right;
                        prompt("" + result);
                        break;
                    case "^":
                        result = Ops_1.Ops.power(left, right);
                        prompt("" + result);
                        break;
                    case "#":
                        result = Ops_1.Ops.greatestCommonDenominator(left, right);
                        prompt("" + result);
                        break;
                    default:
                        prompt("default");
                        break;
                }
            }
        }
    };
});
//# sourceMappingURL=main.js.map