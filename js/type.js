"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Type {
    sanitize(input) {
        if (this.checkConformity(input))
            return input;
        else {
            throw new Error("ERR | Attempted to sanitize content that did not match the desired type signature. " +
                "Type of " + input.toString() + "was not '" + this.getTypeName() + "'");
        }
    }
}
exports.default = Type;
//# sourceMappingURL=type.js.map