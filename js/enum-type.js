"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class EnumType extends type_1.Type {
    constructor(acceptableValues, typeName, isOptional = false) {
        super(isOptional);
        this.acceptableValues = acceptableValues;
        if (typeName !== undefined)
            this.typeName = typeName;
        else {
            this.typeName = "enum";
        }
    }
    getTypeName() {
        return this.typeName;
    }
    checkConformity(input) {
        return this.acceptableValues.some((value) => (value === input));
    }
    exhaustivelyCheckConformity(input) {
        let once = false;
        for (let value of this.acceptableValues) {
            if (value === input) {
                if (once)
                    return false;
                else
                    once = true;
            }
        }
        return once;
    }
}
exports.EnumType = EnumType;
//# sourceMappingURL=enum-type.js.map