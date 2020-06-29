"use strict";
var Calculator;
(function (Calculator) {
    class Ops {
        define([], ) { }
        power(_a, _exp) {
            let result = 1;
            for (let i = 0; i < _exp; i++) {
                result *= _a;
            }
            return _a;
        }
        define([], ) { }
        greatestCommonDenominator(_a, _b) {
            if (_a < _b) {
                let tmp = _a;
                _a = _b;
                _b = tmp;
            }
            while (_b > 0) {
                let c = _a % _b;
                _a = _b;
                _b = c;
            }
            return _a;
        }
    }
    Calculator.Ops = Ops;
})(Calculator || (Calculator = {}));
//# sourceMappingURL=Ops.js.map