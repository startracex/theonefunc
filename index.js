export function createLiteralFunc(rawFunc) {
    return (strings, ...values) => {
        const arg = strings.reduce((prev, cur, index) => prev + cur + (values[index] || ""), "");
        return rawFunc(arg);
    };
}
export function createStringFunc(rawFunc) {
    return (str) => {
        return rawFunc `${str}`;
    };
}
