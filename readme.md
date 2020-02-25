# typit
> #### Fully recursive runtime typechecking.

Runtime type-checking is often useful when interacting with and/or building public APIs in which data might be recieved in a malformed manner. By using a runtime typechecking system, you can ensure that the data you are recieving and attempting to access (in a JSON format) is well-formed, defined, and correctly typed, removing the need to worry or 'check-on-access' the state and type of each key-value pair you attempt to use.

### [Find typit on NPM.](https://www.npmjs.com/package/typit)

## Table of Contents
#### 1. [Installation](#installation) - How to install typit using NPM.
#### 2. [Basic Usage](#basic-usage)
#### 4. [The AbstractType Classes](#type-classes)
#### 4. [License](#license)

## Installation
Install from NPM with
```sh
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
import { StandardType, ArrayType, ObjectType,
         OptionalType, EnumType } from "typit";

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

## License
typit is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears