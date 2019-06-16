"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iter_over_1 = require("iter-over");
class ObjectTypeDefinitionUtil {
    static typeDefinitionToReadableJSON(typeDefinition) {
        let iterator = new iter_over_1.ObjectIterator(typeDefinition);
        let result = {};
        for (let element of iterator) {
            if (element === undefined)
                throw new Error("ERR | Attempted to use an undefined type definition.");
            if (element.value.getTypeName !== undefined)
                result[element.key] = element.value.getTypeName();
            else
                result[element.key] = ObjectTypeDefinitionUtil.typeDefinitionToReadableJSON(element.value);
        }
        return result;
    }
    static typeDefinitionToString(typeDefinition) {
        let structureToStringArray = (struct) => {
            let iterator = new iter_over_1.ObjectIterator(struct);
            let resultLines = [];
            for (let element of iterator) {
                if (element === undefined)
                    throw new Error("ERR | Attempted to use an undefined type definition.");
                if (element.value.getTypeName !== undefined) {
                    let typeName = element.value.getTypeName();
                    resultLines.push("|  " + element.key + ": " + typeName);
                }
                else {
                    resultLines.push("|  " + element.key + ": object \u23ce");
                    let nestedResultLines = structureToStringArray(element.value);
                    for (let line of nestedResultLines)
                        resultLines.push("|  " + line);
                }
            }
            return resultLines;
        };
        return structureToStringArray(typeDefinition).join("\n");
    }
}
exports.ObjectTypeDefinitionUtil = ObjectTypeDefinitionUtil;
//# sourceMappingURL=object-type-definition-util.js.map