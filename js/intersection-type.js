"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_type_1 = require("./object-type");
const Merj = __importStar(require("merj"));
class IntersectionType extends object_type_1.ObjectType {
    constructor(...types) {
        super(Merj.merge(types.map((type) => type.getObjectTypeDefinition())), "");
        this.typeName = "";
        for (let type of types) {
            if (this.typeName !== "")
                this.typeName += " & ";
            this.typeName += type.getTypeName();
        }
    }
}
exports.IntersectionType = IntersectionType;
//# sourceMappingURL=intersection-type.js.map