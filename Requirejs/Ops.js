define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Ops {
        static power(_a, _exp) {
            let result = 1;
            for (let i = 0; i < _exp; i++) {
                result *= _a;
            }
            return result;
        }
        static greatestCommonDenominator(_a, _b) {
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
    exports.Ops = Ops;
});
//# sourceMappingURL=Ops.js.map