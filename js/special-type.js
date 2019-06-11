"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
class SpecialType extends type_1.default {
    constructor(name, validator) {
        super();
        this.name = name;
        this.validator = validator;
    }
    getTypeName() {
        return this.name;
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
exports.default = SpecialType;
//# sourceMappingURL=special-type.js.map