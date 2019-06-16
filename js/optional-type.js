"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class OptionalType extends type_1.Type {
    constructor(type) {
        super();
        this.encapsulatedType = type;
        if (type.getTypeName().indexOf(" ") !== -1)
            this.typeName = "(" + type.getTypeName() + ")?";
        else
            this.typeName = type.getTypeName() + "?";
    }
    isOptional() {
        return true;
    }
    getTypeName() {
        return this.typeName;
    }
    checkConformity(input) {
        return this.getEncapsulatedType().checkConformity(input);
    }
    exhaustivelyCheckConformity(input) {
        return this.getEncapsulatedType().exhaustivelyCheckConformity(input);
    }
    getEncapsulatedType() {
        return this.encapsulatedType;
    }
}
exports.OptionalType = OptionalType;
//# sourceMappingURL=optional-type.js.map