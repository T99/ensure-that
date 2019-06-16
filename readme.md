# typit
> #### Fully recursive runtime typechecking.

Runtime type-checking is often useful when interacting with and/or building public APIs in which data might be recieved in a malformed manner. By using a runtime typechecking system, you can ensure that the data you are recieving and attempting to access (in a JSON format) is well-formed, defined, and correctly typed, removing the need to worry or 'check-on-access' the state and type of each key-value pair you attempt to use.

### [Find typit on NPM.](https://www.npmjs.com/package/typit)

## Installation
Install from NPM with
```
$ npm install --save typit
```

## License
typit is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears

Find the full license [here](https://github.com/T99/typit/blob/master/license.md).