System.register([], function (exports_1, context_1) {
    "use strict";
    var Ops;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Ops = class Ops {
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
            };
            exports_1("Ops", Ops);
        }
    };
});
//# sourceMappingURL=Ops.js.map