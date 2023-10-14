export function createLiteralFunc<T>(rawFunc: (str: string) => T) {
  return (strings: TemplateStringsArray, ...values: any[]): T => {
    const arg = strings.reduce(
      (prev, cur, index) => prev + cur + (values[index] || ""),
      ""
    );
    return rawFunc(arg);
  };
}

export function createStringFunc<T>(
  rawFunc: (strings: TemplateStringsArray, ...values: any[]) => T
): (str: string) => T {
  return (str: string) => {
    return rawFunc`${str}`;
  };
}
