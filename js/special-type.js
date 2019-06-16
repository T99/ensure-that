"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class SpecialType extends type_1.Type {
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
SpecialType.ANY = new SpecialType("any", (input) => true);
SpecialType.VOID = new SpecialType("void", (input) => false);
SpecialType.UNDEFINED = new SpecialType("undefined", (input) => input === undefined);
SpecialType.NULL = new SpecialType("null", (input) => input === null);
SpecialType.NOT_PRESENT = new SpecialType("not-present", (input) => false);
exports.SpecialType = SpecialType;
//# sourceMappingURL=special-type.js.map