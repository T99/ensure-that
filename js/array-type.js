"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class ArrayType extends type_1.Type {
    constructor(arrayType, isOptional = false) {
        super(isOptional);
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
exports.ArrayType = ArrayType;
//# sourceMappingURL=array-type.js.map