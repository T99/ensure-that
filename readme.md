# ensure-that
> #### Fully recursive runtime typechecking.

Runtime type-checking is often useful when interacting with and/or building public APIs in which data might be recieved in a malformed manner. By using a runtime typechecking system, you can ensure that the data you are recieving and attempting to access (in a JSON format) is well-formed, defined, and correctly typed, removing the need to worry or 'check-on-access' the state and type of each key-value pair you attempt to use.
