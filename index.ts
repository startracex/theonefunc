export type TemplateStringFunction<T> = (strings: TemplateStringsArray, ...values: any[]) => T;
export type StringFunction<T> = (str: string) => T;

export function createLiteralFunc<T>(rawFunc: StringFunction<T>): TemplateStringFunction<T> {
  return (strings: TemplateStringsArray, ...values: any[]): T => {
    const arg = strings.reduce((prev, cur, index) => prev + cur + (values[index] || ""), "");
    return rawFunc(arg);
  };
}

export function createStringFunc<T>(rawFunc: TemplateStringFunction<T>): StringFunction<T> {
  return (str: string) => {
    return rawFunc([str] as unknown as TemplateStringsArray);
  };
}
