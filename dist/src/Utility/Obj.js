"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obj = void 0;
class Obj {
    static isNullOrUndefined(value) {
        return (value === undefined || value === null);
    }
    static isEmpty(value) {
        return (Obj.isNullOrUndefined(value) ||
            (typeof value === 'string' && value.length === 0) ||
            (typeof value === 'number' && (isNaN(value) || value === 0)) ||
            (Array.isArray(value) && value.length === 0));
    }
    static isNumber(value, tryCast = true) {
        if (typeof value === 'number') {
            return true;
        }
        if (Obj.isNullOrUndefined(value) || !tryCast) {
            return false;
        }
        return !isNaN(+value);
    }
    static has(obj, property, includePropertyChain = false) {
        if (Obj.isNullOrUndefined(obj)) {
            return false;
        }
        if (includePropertyChain && typeof obj === 'object') {
            return (property in obj);
        }
        return Object.prototype.hasOwnProperty.call(obj, property);
    }
    static toBoolean(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            value = value.trim().toLowerCase();
        }
        if (value === 1 || value === '1' || value === 'true' || value === 'yes' || value === 'on') {
            return true;
        }
        if (value === 0 || value === '0' || value === 'false' || value === 'no' || value === 'off') {
            return false;
        }
        return null;
    }
}
exports.Obj = Obj;
exports.default = Obj;
//# sourceMappingURL=Obj.js.map