"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class StandardType extends type_1.Type {
    constructor(name, isOptional, validator) {
        super(isOptional);
        this.typeName = name;
        this.validator = validator;
    }
    getTypeName() {
        return this.typeName;
    }
    checkConformity(input) {
        return this.validator(input);
    }
    exhaustivelyCheckConformity(input) {
        return this.checkConformity(input);
    }
}
StandardType.NUMBER = new StandardType("number", false, (input) => (typeof input === "number"));
StandardType.OPTIONAL_NUMBER = new StandardType("number", true, (input) => (typeof input === "number"));
StandardType.BOOLEAN = new StandardType("boolean", false, (input) => (typeof input === "boolean"));
StandardType.OPTIONAL_BOOLEAN = new StandardType("boolean", true, (input) => (typeof input === "boolean"));
StandardType.STRING = new StandardType("string", false, (input) => (typeof input === "string"));
StandardType.OPTIONAL_STRING = new StandardType("string", true, (input) => (typeof input === "string"));
exports.StandardType = StandardType;
//# sourceMappingURL=standard-type.js.map