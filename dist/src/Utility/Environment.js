"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
class Environment {
    static isNode() {
        return (typeof process !== undefined &&
            typeof process.versions !== undefined &&
            typeof process.versions.node !== undefined);
    }
    static isBrowser() {
        try {
            // @ts-ignore
            return (window !== undefined);
        }
        catch (error) {
        }
        return false;
    }
}
exports.Environment = Environment;
exports.default = Environment;
//# sourceMappingURL=Environment.js.map