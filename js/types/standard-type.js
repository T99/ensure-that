"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
class StandardType extends type_1.Type {
    constructor(name, validator) {
        super();
        this.name = name;
        this.validator = validator;
    }
    getTypeName() {
        return this.name;
    }
    checkConformity(input) {
        return this.validator(input);
    }
    exhaustivelyCheckConformity(input) {
        return this.checkConformity(input);
    }
}
StandardType.NUMBER = new StandardType("number", (input) => {
    return ((typeof input === "number") && (!isNaN(input)));
});
StandardType.BOOLEAN = new StandardType("boolean", (input) => {
    return (typeof input === "boolean");
});
StandardType.STRING = new StandardType("string", (input) => {
    return (typeof input === "string");
});
exports.StandardType = StandardType;
//# sourceMappingURL=standard-type.js.map