"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_inferer_1 = require("./type-inferer");
class MalformedObjectError extends Error {
    constructor(path, expectedType, actualValue, actualType = type_inferer_1.TypeInferer.infer(actualValue)) {
        super();
        this.path = path;
        this.readablePath = "*";
        this.expectedType = expectedType;
        this.actualType = actualType;
        this.actualValue = actualValue;
        for (let pathItem of path)
            this.readablePath += "." + pathItem;
    }
    prependPath(...path) {
        path.push(...this.path);
        return new MalformedObjectError(path, this.expectedType, this.actualValue);
    }
    toJSON() {
        return {
            path: this.path,
            readablePath: this.readablePath,
            expectedType: this.expectedType,
            actualType: this.actualType,
            actualValue: this.actualValue
        };
    }
}
exports.MalformedObjectError = MalformedObjectError;
//# sourceMappingURL=malformed-object-error.js.map