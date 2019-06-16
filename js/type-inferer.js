"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const special_type_1 = require("./special-type");
class TypeInferer {
    constructor() {
    }
    static infer(input) {
        return special_type_1.SpecialType.ANY;
    }
}
exports.TypeInferer = TypeInferer;
//# sourceMappingURL=type-inferer.js.map