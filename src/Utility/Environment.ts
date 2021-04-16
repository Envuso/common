export class Environment {
  static isNode(): boolean {
    return (typeof process !== undefined &&
      typeof process.versions !== undefined &&
      typeof process.versions.node !== undefined);
  }

  static isBrowser(): boolean {
    try {
      // @ts-ignore
      return (window !== undefined);
    } catch (error) {
    }

    return false;
  }
}

export default Environment;
