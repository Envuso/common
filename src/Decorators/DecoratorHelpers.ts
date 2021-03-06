
export enum DESIGN_META {
	DESIGN_PARAM_TYPES = 'design:paramtypes',
	DESIGN_TYPE        = 'design:type',
	DESIGN_PROPERTIES  = 'design:properties',
	DESIGN_RETURN_TYPE = 'design:returntype',
}

export class DecoratorHelpers {

	/**
	 * Get information about the types/parameters for the method/constructor
	 *
	 * @param target
	 * @param propertyKey
	 */
	static paramTypes(target: any, propertyKey?: string | symbol) {
		return Reflect.getMetadata(DESIGN_META.DESIGN_PARAM_TYPES, target, propertyKey)
	}

	/**
	 * Get the type of a property
	 *
	 * @param target
	 * @param propertyKey
	 */
	static propertyType(target: any, propertyKey: string | symbol) {
		return Reflect.getMetadata(DESIGN_META.DESIGN_TYPE, target, propertyKey)
	}

	/**
	 * Get the properties of a target
	 *
	 * If the target is a class constructor and method is the name of a method
	 * It will return the properties for the method?
	 *
	 * @param target
	 * @param method
	 */
	static properties(target: any, method?: string) {
		return Reflect.getMetadata(DESIGN_META.DESIGN_PROPERTIES, target, method)
	}

	/**
	 * Get the return type
	 *
	 * @param target
	 */
	static returnType(target: any) {
		return Reflect.getMetadata(DESIGN_META.DESIGN_RETURN_TYPE, target)
	}

	/**
	 * Get the names of all parameters specified in a function
	 * It seems we cannot use Reflect to obtain these, only the types
	 *
	 * @param func
	 */
	static getParameterNames(func: Function) {

		// String representation of the function code
		let str = func.toString();

		// Remove comments of the form /* ... */
		// Removing comments of the form //
		// Remove body of the function { ... }
		// removing '=>' if func is arrow function
		str = str.replace(/\/\*[\s\S]*?\*\//g, '')
			.replace(/\/\/(.)*/g, '')
			.replace(/{[\s\S]*}/, '')
			.replace(/=>/g, '')
			.trim();

		// Start parameter names after first '('
		const start = str.indexOf("(") + 1;

		// End parameter names is just before last ')'
		const end = str.length - 1;

		const result = str.substring(start, end).split(", ");

		const params = [];

		result.forEach(element => {

			// Removing any default value
			element = element.replace(/=[\s\S]*/g, '').trim();

			if (element.length > 0)
				params.push(element);
		});

		return params;
	}


}
