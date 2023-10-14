# theonefunc

converts string parameter functions and literal parameter functions

```ts
const uniFunc =
createLiteralFunc(
  createStringFunc(
    createLiteralFunc(
      createStringFunc(
        createLiteralFunc(
          /* ... */
          (s:string)=> (s)
        )
      )
    )
  )
)
console.log(uniFunc`abc${1+2}`) // abc3

const litFunc = createLiteralFunc(
  (str) => {
  return str;
});
console.log(litFunc`abc${1 + 2}`); // abc3

const strFunc = createStringFunc(
  (strings: TemplateStringsArray, ...values: any[]) => {
    return strings.reduce(
      (prev, cur, index) => prev + cur + (values[index] || ""),
      ""
    );
  }
);
console.log(strFunc(`abc${1 + 2}`)); // abc3
```