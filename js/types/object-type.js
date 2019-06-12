"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iter_over_1 = require("iter-over");
const type_1 = require("./type");
class ObjectType extends type_1.Type {
    constructor(typeDefinition, objectName = "") {
        super();
        this.typeDefinition = typeDefinition;
        this.objectName = objectName;
    }
    static typeDefinitionToReadableJSON(typeDefinition) {
        let iterator = new iter_over_1.IOObjectIterator(typeDefinition);
        let result = {};
        for (let element of iterator) {
            if (element === undefined)
                throw new Error("ERR | Attempted to use an undefined type definition.");
            if (element.value.getTypeName !== undefined)
                result[element.key] = element.value.getTypeName();
            else
                result[element.key] = ObjectType.typeDefinitionToReadableJSON(element.value);
        }
        return result;
    }
    static typeDefinitionToString(typeDefinition) {
        let structureToStringArray = (struct) => {
            let iterator = new iter_over_1.IOObjectIterator(struct);
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
    typeDefinitionToReadableJSON() {
        return ObjectType.typeDefinitionToReadableJSON(this.typeDefinition);
    }
    typeDefinitionToString() {
        return ObjectType.typeDefinitionToString(this.typeDefinition);
    }
    getTypeName() {
        return "object" + (this.objectName !== "" ? " (" + this.objectName + ")" : "");
    }
    checkConformity(input, typeDefinition = this.typeDefinition) {
        if (!(typeof input === "object") || (input === null))
            return false;
        let iterator = new iter_over_1.IOObjectIterator(typeDefinition);
        for (let element of iterator) {
            if (element === undefined)
                throw new Error("ERR | Attempted to use an undefined type definition.");
            let propertyName = element.key;
            let propertyValue = input[propertyName];
            if (propertyValue === undefined)
                return false;
            if (element.value.getTypeName !== undefined) {
                let type = element.value;
                if (!type.checkConformity(propertyValue))
                    return false;
            }
            else {
                if (!this.checkConformity(propertyValue, element.value))
                    return false;
            }
        }
        return true;
    }
    exhaustivelyCheckConformity(input, typeDefinition = this.typeDefinition) {
        if (!this.checkConformity(input, typeDefinition))
            return false;
        let clonedInput = JSON.parse(JSON.stringify(input));
        let iterator = new iter_over_1.IOObjectIterator(clonedInput);
        for (let element of iterator) {
            if (element === undefined)
                throw new Error("ERR | Attempted to use an undefined type definition.");
            let propertyName = element.key;
            let propertyValue = input[propertyName];
            if (typeDefinition[propertyName] !== undefined) {
                if (typeDefinition[propertyName].getTypeName !== undefined) {
                    let type = typeDefinition[propertyName];
                    if (!type.checkConformity(propertyValue))
                        return false;
                }
                else {
                    if (!this.exhaustivelyCheckConformity(propertyValue, typeDefinition[propertyName]))
                        return false;
                }
            }
            else
                return false;
        }
        return true;
    }
}
exports.ObjectType = ObjectType;
//# sourceMappingURL=object-type.js.map