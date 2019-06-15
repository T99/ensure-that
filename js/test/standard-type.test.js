"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standard_type_1 = require("../standard-type");
const test_values_1 = require("./test-values");
describe("Number Type", () => {
    test("Number", () => {
        expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.BASIC)).toBeTruthy();
    });
    test("Boolean", () => {
        expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.BASIC)).toBeFalsy();
    });
    test("String", () => {
        expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.STRING.BASIC)).toBeFalsy();
    });
    test("Undefined", () => {
        expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.SPECIAL.UNDEFINED)).toBeFalsy();
    });
    test("Null", () => {
        expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.SPECIAL.NULL)).toBeFalsy();
    });
    describe("Special Numeric Values", () => {
        test("Zero", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.ZERO)).toBeTruthy();
        });
        test("Positive Infinity", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.POSITIVE_INFINITY)).toBeTruthy();
        });
        test("Negative Infinity", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.NEGATIVE_INFINITY)).toBeTruthy();
        });
        test("Max Safe Integer", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MAX_SAFE_INTEGER)).toBeTruthy();
        });
        test("Min Safe Integer", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MIN_SAFE_INTEGER)).toBeTruthy();
        });
        test("Max Value", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MAX_VALUE)).toBeTruthy();
        });
        test("Min Value", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MIN_VALUE)).toBeTruthy();
        });
        test("NaN", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.NUMBERS.NAN)).toBeTruthy();
        });
    });
    describe("Special Boolean Values", () => {
        test("True", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.TRUE)).toBeFalsy();
        });
        test("False", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.FALSE)).toBeFalsy();
        });
    });
    describe("Special String Values", () => {
        test("Empty String", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.STRING.EMPTY)).toBeFalsy();
        });
        test("Numeric String", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.STRING.NUMERIC)).toBeFalsy();
        });
        test("Symbol String", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.STRING.SYMBOLS)).toBeFalsy();
        });
        test("Long String", () => {
            expect(standard_type_1.StandardType.NUMBER.checkConformity(test_values_1.TEST_VALUES.STRING.LONG)).toBeFalsy();
        });
    });
});
describe("Boolean Type", () => {
    test("Number", () => {
        expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.BASIC)).toBeFalsy();
    });
    test("Boolean", () => {
        expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.BASIC)).toBeTruthy();
    });
    test("String", () => {
        expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.STRING.BASIC)).toBeFalsy();
    });
    test("Undefined", () => {
        expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.SPECIAL.UNDEFINED)).toBeFalsy();
    });
    test("Null", () => {
        expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.SPECIAL.NULL)).toBeFalsy();
    });
    describe("Special Numeric Values", () => {
        test("Zero", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.ZERO)).toBeFalsy();
        });
        test("Positive Infinity", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.POSITIVE_INFINITY)).toBeFalsy();
        });
        test("Negative Infinity", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.NEGATIVE_INFINITY)).toBeFalsy();
        });
        test("Max Safe Integer", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MAX_SAFE_INTEGER)).toBeFalsy();
        });
        test("Min Safe Integer", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MIN_SAFE_INTEGER)).toBeFalsy();
        });
        test("Max Value", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MAX_VALUE)).toBeFalsy();
        });
        test("Min Value", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MIN_VALUE)).toBeFalsy();
        });
        test("NaN", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.NUMBERS.NAN)).toBeFalsy();
        });
    });
    describe("Special Boolean Values", () => {
        test("True", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.TRUE)).toBeTruthy();
        });
        test("False", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.FALSE)).toBeTruthy();
        });
    });
    describe("Special String Values", () => {
        test("Empty String", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.STRING.EMPTY)).toBeFalsy();
        });
        test("Numeric String", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.STRING.NUMERIC)).toBeFalsy();
        });
        test("Symbol String", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.STRING.SYMBOLS)).toBeFalsy();
        });
        test("Long String", () => {
            expect(standard_type_1.StandardType.BOOLEAN.checkConformity(test_values_1.TEST_VALUES.STRING.LONG)).toBeFalsy();
        });
    });
});
describe("String Type", () => {
    test("Number", () => {
        expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.BASIC)).toBeFalsy();
    });
    test("Boolean", () => {
        expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.BASIC)).toBeFalsy();
    });
    test("String", () => {
        expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.STRING.BASIC)).toBeTruthy();
    });
    test("Undefined", () => {
        expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.SPECIAL.UNDEFINED)).toBeFalsy();
    });
    test("Null", () => {
        expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.SPECIAL.NULL)).toBeFalsy();
    });
    describe("Special Numeric Values", () => {
        test("Zero", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.ZERO)).toBeFalsy();
        });
        test("Positive Infinity", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.POSITIVE_INFINITY)).toBeFalsy();
        });
        test("Negative Infinity", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.NEGATIVE_INFINITY)).toBeFalsy();
        });
        test("Max Safe Integer", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MAX_SAFE_INTEGER)).toBeFalsy();
        });
        test("Min Safe Integer", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MIN_SAFE_INTEGER)).toBeFalsy();
        });
        test("Max Value", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MAX_VALUE)).toBeFalsy();
        });
        test("Min Value", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.MIN_VALUE)).toBeFalsy();
        });
        test("NaN", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.NUMBERS.NAN)).toBeFalsy();
        });
    });
    describe("Special Boolean Values", () => {
        test("True", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.TRUE)).toBeFalsy();
        });
        test("False", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.BOOLEAN.FALSE)).toBeFalsy();
        });
    });
    describe("Special String Values", () => {
        test("Empty String", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.STRING.EMPTY)).toBeTruthy();
        });
        test("Numeric String", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.STRING.NUMERIC)).toBeTruthy();
        });
        test("Symbol String", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.STRING.SYMBOLS)).toBeTruthy();
        });
        test("Long String", () => {
            expect(standard_type_1.StandardType.STRING.checkConformity(test_values_1.TEST_VALUES.STRING.LONG)).toBeTruthy();
        });
    });
});
test.todo("Optional Number Type");
test.todo("Optional Boolean Type");
test.todo("Optional String Type");
//# sourceMappingURL=standard-type.test.js.map