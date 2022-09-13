"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockResolveOnce = exports.mockImplementationOnceThrow = exports.mockImplementOnce = void 0;
const mockImplementOnce = (fn, mockImplementation) => {
    return fn.mockImplementationOnce(mockImplementation);
};
exports.mockImplementOnce = mockImplementOnce;
const mockImplementationOnceThrow = (fn) => {
    return (0, exports.mockImplementOnce)(fn, () => {
        throw new Error("error");
    });
};
exports.mockImplementationOnceThrow = mockImplementationOnceThrow;
const mockResolveOnce = (fn, value) => {
    fn.mockResolvedValueOnce(value);
};
exports.mockResolveOnce = mockResolveOnce;
//# sourceMappingURL=utils.js.map