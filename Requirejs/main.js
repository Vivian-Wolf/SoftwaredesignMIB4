define(["require", "exports", "./Ops"], function (require, exports, Ops_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    function findFirtstNonDigit(_s) {
        for (let i = 0; i < _s.length; i++) {
            if (_s.charAt(i) == "+" || _s.charAt(i) == "-" || _s.charAt(i) == "*" || _s.charAt(i) == "/" || _s.charAt(i) == "^" || _s.charAt(i) == "#")
                return i;
        }
        return -1;
    }
});
//# sourceMappingURL=main.js.map