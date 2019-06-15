/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:59 PM -- May 26th, 2019.
 *	Project: typit
 */

import { Type } from "./type";

type Validator = (input: any) => boolean;

/**
 * An enumeration of the standard types found in JavaScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.1.0
 */
export class StandardType<E> extends Type<E> {
	
	public static readonly NUMBER: StandardType<number> = new StandardType(
		"number",
		false,
		(input: any): boolean => (typeof input === "number")
	);
	
	public static readonly OPTIONAL_NUMBER: StandardType<number> = new StandardType(
		"number",
		true,
		(input: any): boolean => (typeof input === "number")
	);
	
	public static readonly BOOLEAN: StandardType<boolean> = new StandardType(
		"boolean",
		false,
		(input: any): boolean => (typeof input === "boolean")
	);
	
	public static readonly OPTIONAL_BOOLEAN: StandardType<boolean> = new StandardType(
		"boolean",
		true,
		(input: any): boolean => (typeof input === "boolean")
	);
	
	public static readonly STRING: StandardType<string> = new StandardType(
		"string",
		false,
		(input: any): boolean => (typeof input === "string")
	);
	
	public static readonly OPTIONAL_STRING: StandardType<string> = new StandardType(
		"string",
		true,
		(input: any): boolean => (typeof input === "string")
	);
	
	protected name: string;
	
	protected validator: Validator;
	
	protected constructor(name: string, isOptional: boolean, validator: Validator) {
	
		super(isOptional);
		
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