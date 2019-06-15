"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Type {
    constructor(isOptional) {
        this.optional = isOptional;
    }
    isOptional() {
        return this.optional;
    }
    sanitize(input) {
        if (this.checkConformity(input))
            return input;
        else {
            throw new Error("ERR | Attempted to sanitize content that did not match the desired type signature. " +
                "Type of " + input.toString() + "was not '" + this.getTypeName() + "'");
        }
    }
}
exports.Type = Type;
//# sourceMappingURL=type.js.map