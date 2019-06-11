"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
class StandardType extends type_1.default {
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
StandardType.NUMBER = new StandardType("number", (input) => {
    return ((typeof input === "number") && (!isNaN(input)));
});
StandardType.BOOLEAN = new StandardType("boolean", (input) => {
    return (typeof input === "boolean");
});
StandardType.STRING = new StandardType("string", (input) => {
    return (typeof input === "string");
});
exports.default = StandardType;
//# sourceMappingURL=standard-type.js.map