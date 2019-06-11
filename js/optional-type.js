"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
class OptionalType extends type_1.default {
    constructor(optionalType) {
        super();
        this.optionalType = optionalType;
    }
    getTypeName() {
        return "optional " + this.optionalType.getTypeName();
    }
    checkConformity(input) {
        return false;
    }
    exhaustivelyCheckConformity(input) {
        return false;
    }
}
exports.default = OptionalType;
//# sourceMappingURL=optional-type.js.map