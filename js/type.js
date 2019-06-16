"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Type {
    constructor() { }
    isOptional() {
        return false;
    }
    checkConformityOfAll(...input) {
        return input.every((item) => this.checkConformity(item));
    }
    exhaustivelyCheckConformityOfAll(...input) {
        return input.every((item) => this.exhaustivelyCheckConformity(item));
    }
    sanitize(input) {
        if (this.checkConformity(input))
            return input;
        else {
            throw new TypeError("ERR | Attempted to sanitize content that did not match the desired type signature. " +
                "Type of " + input.toString() + "was not '" + this.getTypeName() + "'");
        }
    }
}
exports.Type = Type;
//# sourceMappingURL=type.js.map