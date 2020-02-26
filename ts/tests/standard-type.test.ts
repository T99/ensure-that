/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:02 PM -- June 13th, 2019.
 *	Project: typit
 */

import { StandardType } from "../standard-type";
import { TEST_VALUES } from "./test-values";

/**
 * Tests for the Typit standard types.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.4.0
 * @since v0.4.0
 */

describe("Number Type", () => {
	
	test("Number", () => {
		
		expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.BASIC)).toBeTruthy();
		
	});
	
	test("Boolean", () => {
		
		expect(StandardType.NUMBER.checkConformity(TEST_VALUES.BOOLEAN.BASIC)).toBeFalsy();
		
	});
	
	test("String", () => {
		
		expect(StandardType.NUMBER.checkConformity(TEST_VALUES.STRING.BASIC)).toBeFalsy();
		
	});
	
	test("Undefined", () => {
		
		expect(StandardType.NUMBER.checkConformity(TEST_VALUES.SPECIAL.UNDEFINED)).toBeFalsy();
		
	});
	
	test("Null", () => {
		
		expect(StandardType.NUMBER.checkConformity(TEST_VALUES.SPECIAL.NULL)).toBeFalsy();
		
	});
	
	describe("Special Numeric Values", () => {
		
		test("Zero", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.ZERO)).toBeTruthy();
			
		});
		
		test("Positive Infinity", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.POSITIVE_INFINITY)).toBeTruthy();
			
		});
		
		test("Negative Infinity", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.NEGATIVE_INFINITY)).toBeTruthy();
			
		});
		
		test("Max Safe Integer", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.MAX_SAFE_INTEGER)).toBeTruthy();
			
		});
		
		test("Min Safe Integer", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.MIN_SAFE_INTEGER)).toBeTruthy();
			
		});
		
		test("Max Value", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.MAX_VALUE)).toBeTruthy();
			
		});
		
		test("Min Value", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.MIN_VALUE)).toBeTruthy();
			
		});
		
		test("NaN", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.NUMBERS.NAN)).toBeTruthy();
			
		});
		
	});
	
	describe("Special Boolean Values", () => {
		
		test("True", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.BOOLEAN.TRUE)).toBeFalsy();
			
		});
		
		test("False", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.BOOLEAN.FALSE)).toBeFalsy();
			
		});
		
	});
	
	describe("Special String Values", () => {
		
		test("Empty String", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.STRING.EMPTY)).toBeFalsy();
			
		});
		
		test("Numeric String", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.STRING.NUMERIC)).toBeFalsy();
			
		});
		
		test("Symbol String", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.STRING.SYMBOLS)).toBeFalsy();
			
		});
		
		test("Long String", () => {
			
			expect(StandardType.NUMBER.checkConformity(TEST_VALUES.STRING.LONG)).toBeFalsy();
			
		});
		
	});
	
});

describe("Boolean Type", () => {
	
	test("Number", () => {
		
		expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.BASIC)).toBeFalsy();
		
	});
	
	test("Boolean", () => {
		
		expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.BOOLEAN.BASIC)).toBeTruthy();
		
	});
	
	test("String", () => {
		
		expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.STRING.BASIC)).toBeFalsy();
		
	});
	
	test("Undefined", () => {
		
		expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.SPECIAL.UNDEFINED)).toBeFalsy();
		
	});
	
	test("Null", () => {
		
		expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.SPECIAL.NULL)).toBeFalsy();
		
	});
	
	describe("Special Numeric Values", () => {
		
		test("Zero", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.ZERO)).toBeFalsy();
			
		});
		
		test("Positive Infinity", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.POSITIVE_INFINITY)).toBeFalsy();
			
		});
		
		test("Negative Infinity", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.NEGATIVE_INFINITY)).toBeFalsy();
			
		});
		
		test("Max Safe Integer", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.MAX_SAFE_INTEGER)).toBeFalsy();
			
		});
		
		test("Min Safe Integer", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.MIN_SAFE_INTEGER)).toBeFalsy();
			
		});
		
		test("Max Value", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.MAX_VALUE)).toBeFalsy();
			
		});
		
		test("Min Value", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.MIN_VALUE)).toBeFalsy();
			
		});
		
		test("NaN", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.NUMBERS.NAN)).toBeFalsy();
			
		});
		
	});
	
	describe("Special Boolean Values", () => {
		
		test("True", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.BOOLEAN.TRUE)).toBeTruthy();
			
		});
		
		test("False", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.BOOLEAN.FALSE)).toBeTruthy();
			
		});
		
	});
	
	describe("Special String Values", () => {
		
		test("Empty String", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.STRING.EMPTY)).toBeFalsy();
			
		});
		
		test("Numeric String", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.STRING.NUMERIC)).toBeFalsy();
			
		});
		
		test("Symbol String", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.STRING.SYMBOLS)).toBeFalsy();
			
		});
		
		test("Long String", () => {
			
			expect(StandardType.BOOLEAN.checkConformity(TEST_VALUES.STRING.LONG)).toBeFalsy();
			
		});
		
	});
	
});

describe("String Type", () => {
	
	test("Number", () => {
		
		expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.BASIC)).toBeFalsy();
		
	});
	
	test("Boolean", () => {
		
		expect(StandardType.STRING.checkConformity(TEST_VALUES.BOOLEAN.BASIC)).toBeFalsy();
		
	});
	
	test("String", () => {
		
		expect(StandardType.STRING.checkConformity(TEST_VALUES.STRING.BASIC)).toBeTruthy();
		
	});
	
	test("Undefined", () => {
		
		expect(StandardType.STRING.checkConformity(TEST_VALUES.SPECIAL.UNDEFINED)).toBeFalsy();
		
	});
	
	test("Null", () => {
		
		expect(StandardType.STRING.checkConformity(TEST_VALUES.SPECIAL.NULL)).toBeFalsy();
		
	});
	
	describe("Special Numeric Values", () => {
		
		test("Zero", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.ZERO)).toBeFalsy();
			
		});
		
		test("Positive Infinity", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.POSITIVE_INFINITY)).toBeFalsy();
			
		});
		
		test("Negative Infinity", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.NEGATIVE_INFINITY)).toBeFalsy();
			
		});
		
		test("Max Safe Integer", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.MAX_SAFE_INTEGER)).toBeFalsy();
			
		});
		
		test("Min Safe Integer", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.MIN_SAFE_INTEGER)).toBeFalsy();
			
		});
		
		test("Max Value", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.MAX_VALUE)).toBeFalsy();
			
		});
		
		test("Min Value", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.MIN_VALUE)).toBeFalsy();
			
		});
		
		test("NaN", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.NUMBERS.NAN)).toBeFalsy();
			
		});
		
	});
	
	describe("Special Boolean Values", () => {
		
		test("True", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.BOOLEAN.TRUE)).toBeFalsy();
			
		});
		
		test("False", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.BOOLEAN.FALSE)).toBeFalsy();
			
		});
		
	});
	
	describe("Special String Values", () => {
		
		test("Empty String", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.STRING.EMPTY)).toBeTruthy();
			
		});
		
		test("Numeric String", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.STRING.NUMERIC)).toBeTruthy();
			
		});
		
		test("Symbol String", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.STRING.SYMBOLS)).toBeTruthy();
			
		});
		
		test("Long String", () => {
			
			expect(StandardType.STRING.checkConformity(TEST_VALUES.STRING.LONG)).toBeTruthy();
			
		});
		
	});
	
});

test.todo("Optional Number Type");

test.todo("Optional Boolean Type");

test.todo("Optional String Type");