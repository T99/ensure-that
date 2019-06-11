"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = __importDefault(require("./type"));
class ArrayType extends type_1.default {
    constructor(arrayType) {
        super();
        this.arrayType = arrayType;
    }
    getTypeName() {
        return "Array<" + this.arrayType.getTypeName() + ">";
    }
    checkConformity(input) {
        if (!Array.isArray(input))
            return false;
        else {
            let inputArray = input;
            for (let element of inputArray) {
                if (!this.arrayType.checkConformity(element))
                    return false;
            }
        }
        return true;
    }
    exhaustivelyCheckConformity(input) {
        return this.checkConformity(input);
    }
}
exports.default = ArrayType;
//# sourceMappingURL=array-type.js.map