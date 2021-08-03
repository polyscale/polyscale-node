/// <reference types="jest" />
export declare const mockImplementOnce: (fn: (...args: Array<any>) => any, mockImplementation: (...args: Array<any>) => any) => jest.MockedFunction<(...args: Array<any>) => any>;
export declare const mockImplementationOnceThrow: (fn: (...args: Array<any>) => any) => jest.MockedFunction<(...args: Array<any>) => any>;
export declare const mockResolveOnce: (fn: (...args: Array<any>) => any, value: any) => void;
