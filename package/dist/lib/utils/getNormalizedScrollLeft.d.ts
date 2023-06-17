export declare function _setScrollType(type: any): void;
export declare function detectScrollType(): string;
export declare function getNormalizedScrollLeft(element: {
    scrollLeft: any;
    scrollWidth: number;
    clientWidth: number;
}, direction: string): any;
export declare function setNormalizedScrollLeft(element: {
    scrollLeft: number;
    clientWidth: number;
    scrollWidth: number;
}, scrollLeft: number, direction: string): void;
