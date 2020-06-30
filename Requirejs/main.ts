import { Ops } from "./Ops";

console.log("Welcome to the Calculator. Start entering calculations.");

for (; ;) {
    console.log("> ");
    let command: string = prompt("Welcome to the Calculator. Start entering calculations.");
    if (command.toLowerCase() == "exit")
        break;
    let left: number = 0;
    let right: number = 0;
    let opInx: number = findFirtstNonDigit(command);
    if (opInx < 0)
        console.log("No operator specified");
    let opSymbol: string = command[opInx];
    try {
        left = parseInt(command.substring(0, opInx));
        right = parseInt(command.substring(opInx + 1));
    } catch (exeption) {
        console.log("Error parsing command");
    }
    console.log(`Calculating ${left} ${opSymbol} ${right} ...`);

    let result: number;
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
            result = Ops.power(left, right);
            prompt("" + result);
            break;
        case "#":
            result = Ops.greatestCommonDenominator(left, right);
            prompt("" + result);
            break;
        default:
            prompt("default");
            break;
    }
}

function findFirtstNonDigit(_s: string): number {
    for (let i: number = 0; i < _s.length; i++) {
        if (_s.charAt(i) == "+" || _s.charAt(i) == "-" || _s.charAt(i) == "*" || _s.charAt(i) == "/" || _s.charAt(i) == "^" || _s.charAt(i) == "#")
            return i;
    }
    return -1;
}

