"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class UnionType extends type_1.Type {
    constructor(types, isOptional = false) {
        super(isOptional);
        this.acceptableTypes = types;
        this.typeName = "";
        for (let type of types) {
            if (this.typeName !== "")
                this.typeName += " | ";
            this.typeName += type.getTypeName();
        }
    }
    getTypeName() {
        return this.typeName;
    }
    checkConformity(input) {
        return this.acceptableTypes.some((type) => type.checkConformity(input));
    }
    exhaustivelyCheckConformity(input) {
        let once = false;
        for (let type of this.acceptableTypes) {
            if (type.checkConformity(input)) {
                if (once)
                    return false;
                else
                    once = true;
            }
        }
        return once;
    }
}
exports.UnionType = UnionType;
//# sourceMappingURL=union-type.js.map