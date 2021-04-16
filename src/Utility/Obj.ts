export class Obj {
  static isNullOrUndefined(value: any): boolean {
    return (value === undefined || value === null);
  }

  static isEmpty(value: any): boolean {
    return (Obj.isNullOrUndefined(value) ||
      (typeof value === 'string' && value.length === 0) ||
      (typeof value === 'number' && (isNaN(value) || value === 0)) ||
      (Array.isArray(value) && value.length === 0)
    );
  }

  static isNumber(value: any, tryCast: boolean = true): boolean {
    if (typeof value === 'number') {
      return true;
    }

    if (Obj.isNullOrUndefined(value) || !tryCast) {
      return false;
    }

    return !isNaN(+value);
  }

  static has(obj: any, property: any, includePropertyChain: boolean = false): boolean {
    if (Obj.isNullOrUndefined(obj)) {
      return false;
    }

    if (includePropertyChain && typeof obj === 'object') {
      return (property in obj);
    }

    return Object.prototype.hasOwnProperty.call(obj, property);
  }

  static toBoolean(value: any): boolean | null {
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

export default Obj;
