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
 * @version v0.5.0
 * @since v0.1.0
 */
export class StandardType<E> extends Type<E> {
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly NUMBER: StandardType<number> = new StandardType(
		"number",
		false,
		(input: any): boolean => (typeof input === "number")
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_NUMBER: StandardType<number> = new StandardType(
		"number",
		true,
		(input: any): boolean => (typeof input === "number")
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly BOOLEAN: StandardType<boolean> = new StandardType(
		"boolean",
		false,
		(input: any): boolean => (typeof input === "boolean")
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_BOOLEAN: StandardType<boolean> = new StandardType(
		"boolean",
		true,
		(input: any): boolean => (typeof input === "boolean")
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly STRING: StandardType<string> = new StandardType(
		"string",
		false,
		(input: any): boolean => (typeof input === "string")
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_STRING: StandardType<string> = new StandardType(
		"string",
		true,
		(input: any): boolean => (typeof input === "string")
	);
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	/**
	 * The method that is used to check inputs for conformity to the given type.
	 */
	protected validator: Validator;
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	protected constructor(name: string, isOptional: boolean, validator: Validator) {
	
		super(isOptional);
		
		this.typeName = name;
		this.validator = validator;
	
	}
	
	/**
	 * Returns the string name of this StandardType.
	 *
	 * @return The string name of this StandardType.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to check for conformity to this StandardType.
	 * @return
	 */
	public checkConformity(input: any): boolean {
		
		return this.validator(input);
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to exhaustively check for conformity to this StandardType.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}