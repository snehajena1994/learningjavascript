/*
### Part 5: Symbol — Unique Identifiers

Create `symbol-demo.js` to explore Symbol uniqueness.

**Requirements:**
1. Create two Symbols with the same description `"testId"`
2. Compare them with `===` — print the result
3. Print `typeof` each Symbol
4. Print `.description` of each Symbol
5. **Bonus:** Use two Symbols as keys on the same object and verify they don't overwrite each other

**Test Cases:**
```javascript*/
let sym1 = Symbol("testId");
console.log(sym1);
let sym2 = Symbol("testId");
console.log(sym2);

console.log(sym1 === sym2);       // Why its coming as false? both are same data type?
console.log(typeof sym1);         // SYMBOL
console.log(sym1.description);    // testId

