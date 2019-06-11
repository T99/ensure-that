/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:59 PM -- May 26th, 2019.
 *	Project: ensure-that
 */

import Type from "./type";

type Validator = (input: any) => boolean;

/**
 * An enumeration of the standard types found in JavaScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
class StandardType<E> extends Type<E> {
	
	public static readonly NUMBER: StandardType<number> = new StandardType(
		"number",
		(input: any): boolean => {
			
			return ((typeof input === "number") && (!isNaN(input)));
			
		}
	);
	
	public static readonly BOOLEAN: StandardType<boolean> = new StandardType(
		"boolean",
		(input: any): boolean => {
			
			return (typeof input === "boolean");
			
		}
	);
	
	public static readonly STRING: StandardType<string> = new StandardType(
		"string",
		(input: any): boolean => {
			
			return (typeof input === "string");
			
		}
	);
	
	private name: string;
	
	private validator: Validator;
	
	protected constructor(name: string, validator: Validator) {
	
		super();
		
		this.name = name;
		this.validator = validator;
	
	}
	
	public getTypeName(): string {
		
		return this.name;
		
	}
	
	public checkConformity(input: any): boolean {
		
		return this.validator(input);
		
	}
	
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}

export default StandardType;