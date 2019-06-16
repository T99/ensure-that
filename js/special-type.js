"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class SpecialType extends type_1.Type {
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
SpecialType.ANY = new SpecialType("any", false, (input) => true);
SpecialType.OPTIONAL_ANY = new SpecialType("any", true, (input) => true);
SpecialType.VOID = new SpecialType("void", false, (input) => false);
SpecialType.OPTIONAL_VOID = new SpecialType("void", true, (input) => false);
SpecialType.UNDEFINED = new SpecialType("undefined", false, (input) => input === undefined);
SpecialType.OPTIONAL_UNDEFINED = new SpecialType("undefined", true, (input) => input === undefined);
SpecialType.NULL = new SpecialType("null", false, (input) => input === null);
SpecialType.OPTIONAL_NULL = new SpecialType("null", true, (input) => input === null);
exports.SpecialType = SpecialType;
//# sourceMappingURL=special-type.js.map