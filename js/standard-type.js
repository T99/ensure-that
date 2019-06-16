"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class StandardType extends type_1.Type {
    constructor(name, validator) {
        super();
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
StandardType.NUMBER = new StandardType("number", (input) => (typeof input === "number"));
StandardType.BOOLEAN = new StandardType("boolean", (input) => (typeof input === "boolean"));
StandardType.STRING = new StandardType("string", (input) => (typeof input === "string"));
exports.StandardType = StandardType;
//# sourceMappingURL=standard-type.js.map