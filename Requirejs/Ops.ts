
export class Ops {
    static power(_a: number, _exp: number): number {
        let result: number = 1;
        for (let i: number = 0; i < _exp; i++) {
            result *= _a;
        }
        return result;
    }

    static greatestCommonDenominator(_a: number, _b: number): number {
        if (_a < _b) {
            let tmp: number = _a;
            _a = _b;
            _b = tmp;
        }
        while (_b > 0) {
            let c: number = _a % _b;
            _a = _b;
            _b = c;
        }
        return _a;
    }
}
