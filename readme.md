# typit
Typit provides runtime type-checking abilities which are often useful when interacting with and/or building public APIs in which data could potentially be received in a malformed manner.

By using a runtime typechecking system such as typit, a programmer can ensure that the data received by their programs is well-formed, well-defined and correctly typed, thus removing the need to worry about or 'check-on-access' the state and type of each key-value pair you attempt to use.

### [Find typit on NPM.](https://www.npmjs.com/package/typit)

## Table of Contents
 - [Installation](#installation)
 - [Basic Usage](#basic-usage)
 - [Documentation](#documentation)
 - [License](#license)

## Installation
Install from NPM with
```
$ npm install --save typit
```

## Basic Usage
Let's get started checking the types of some variables.
```typescript
import { StandardType } from "typit";

let myString: string = "Hello there!";

console.log(StandardType.STRING.checkConformity(myString));   // Prints 'true'.
console.log(StandardType.NUMBER.checkConformity(myString));   // Prints 'false'.
```

Awesome! We can check if variables conform to any standard primitive types using the `StandardType` class!

But what about something a little more powerful? Might we be able to check if variables conform to more complex object structures? Let's see...

```typescript
import { StandardType, ArrayType, ObjectType, OptionalType, EnumType } from "typit";

let clientType: ObjectType = new ObjectType({
    clientID: StandardType.STRING,
    isAdmin: StandardType.BOOLEAN,
    purchases: new ArrayType(new ObjectType({
        purchaseID: StandardType.STRING,
        amount: new OptionalType(StandardType.NUMBER),
        price: StandardType.NUMBER
    })),
    preferences: {
        theme: new EnumType("light", "dark", "tango"),
        autoLogout: StandardType.BOOLEAN
    }
});
```

Great! We've created our type in order to validate our hypothetical `client` objects! Now let's use it to check some actual objects.

```typescript
clientType.checkConformity({
    clientID: "93nco8a1",
    isAdmin: false,
    purchases: [{
        purchaseID: "9c7j10sn",
        price: 14.99
    }, {
        purchaseID: "1n8d3nlj",
        amount: 3,
        price: 21.75
    }],
    preferences: {
        theme: "dark",
        autoLogout: false
    }
}); // Returns 'true'.

clientType.checkConformity({
    clientID: 2,
    isAdmin: "yep",
    purchases: "a couple",
    preferences: {
        theme: "solarized",
        autoLogout: 5
    }
}); // Returns 'false'.
```

## Documentation
See the [wiki](https://github.com/T99/typit/wiki) for full documentation.

## License
typit is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears