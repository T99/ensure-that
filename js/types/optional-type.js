"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class OptionalType extends type_1.Type {
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
exports.OptionalType = OptionalType;
//# sourceMappingURL=optional-type.js.map