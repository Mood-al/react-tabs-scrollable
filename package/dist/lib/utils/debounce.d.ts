export declare const debounce: (func: {
    apply: (arg0: any, arg1: any[]) => void;
}, wait?: number) => {
    (...args: any[]): void;
    clear(): void;
};
