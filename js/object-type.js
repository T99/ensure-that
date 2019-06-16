"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const malformed_object_error_1 = require("./malformed-object-error");
const iter_over_1 = require("iter-over");
const special_type_1 = require("./special-type");
class ObjectType extends type_1.Type {
    constructor(typeDefinition = {}, typeName = "object") {
        super();
        this.typeDefinition = typeDefinition;
        this.typeName = typeName;
    }
    getTypeName() {
        return this.typeName;
    }
    checkConformity(input, typeDefinition = this.typeDefinition) {
        if (!(typeof input === "object") || (input === null))
            return false;
        let iterator = new iter_over_1.ObjectIterator(typeDefinition);
        for (let typeOrTypeDefinition of iterator) {
            let typePropertyName = typeOrTypeDefinition.key;
            if (typeOrTypeDefinition.value.getTypeName !== undefined) {
                let type = typeOrTypeDefinition.value;
                if (input.hasOwnProperty(typePropertyName)) {
                    if (!type.checkConformity(input[typePropertyName]))
                        return false;
                }
                else if (!type.isOptional())
                    return false;
            }
            else {
                if (!this.checkConformity(input[typePropertyName], typeOrTypeDefinition.value))
                    return false;
            }
        }
        return true;
    }
    exhaustivelyCheckConformity(input, typeDefinition = this.typeDefinition) {
        if (!this.checkConformity(input, typeDefinition))
            return false;
        let iterator = new iter_over_1.ObjectIterator(input);
        for (let inputKVPair of iterator) {
            let inputPropertyName = inputKVPair.key;
            let inputPropertyValue = input[inputPropertyName];
            if (typeDefinition[inputPropertyName] !== undefined) {
                if (typeDefinition[inputPropertyName].getTypeName !== undefined) {
                    let type = typeDefinition[inputPropertyName];
                    if (!type.checkConformity(inputPropertyValue))
                        return false;
                }
                else {
                    if (!this.exhaustivelyCheckConformity(inputPropertyValue, typeDefinition[inputPropertyName]))
                        return false;
                }
            }
            else
                return false;
        }
        return true;
    }
    getObjectTypeDefinition() {
        return this.typeDefinition;
    }
    listNonConformities(input, typeDefinition = this.typeDefinition) {
        let nonConformities = [];
        if (!(typeof input === "object") || (input === null)) {
            nonConformities.push(new malformed_object_error_1.MalformedObjectError([], new ObjectType(), input));
        }
        else {
            let iterator = new iter_over_1.ObjectIterator(typeDefinition);
            for (let typeOrTypeDefinition of iterator) {
                let typePropertyName = typeOrTypeDefinition.key;
                if (typeOrTypeDefinition.value.getTypeName !== undefined) {
                    let type = typeOrTypeDefinition.value;
                    if (input.hasOwnProperty(typePropertyName)) {
                        if (!type.checkConformity(input[typePropertyName])) {
                            nonConformities.push(new malformed_object_error_1.MalformedObjectError([typePropertyName], type, input[typePropertyName]));
                        }
                    }
                    else if (!type.isOptional()) {
                        nonConformities.push(new malformed_object_error_1.MalformedObjectError([typePropertyName], type, input[typePropertyName], special_type_1.SpecialType.NOT_PRESENT));
                    }
                }
                else {
                    let nestedNonConformities = this.listNonConformities(input[typePropertyName], typeOrTypeDefinition.value);
                    for (let nestedNonConformity of nestedNonConformities) {
                        nonConformities.push(nestedNonConformity.prependPath(typePropertyName));
                    }
                }
            }
        }
        return nonConformities;
    }
}
exports.ObjectType = ObjectType;
//# sourceMappingURL=object-type.js.map