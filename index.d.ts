export declare function createLiteralFunc<T>(rawFunc: (str: string) => T): (strings: TemplateStringsArray, ...values: any[]) => T;
export declare function createStringFunc<T>(rawFunc: (strings: TemplateStringsArray, ...values: any[]) => T): (str: string) => T;
