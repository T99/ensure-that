/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:08 AM -- May 27th, 2019.
 *	Project: typit
 */

import { Type } from "./type";

type Validator = (input: any) => boolean;

/**
 * An enumeration of certain special types found in JavaScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.5.0
 * @since v0.1.0
 */
export class SpecialType<E> extends Type<E> {
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly ANY: SpecialType<any> = new SpecialType(
		"any",
		false,
		(input: any): boolean => true
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_ANY: SpecialType<any> = new SpecialType(
		"any",
		true,
		(input: any): boolean => true
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly VOID: SpecialType<void> = new SpecialType(
		"void",
		false,
		(input: any): boolean => false
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_VOID: SpecialType<void> = new SpecialType(
		"void",
		true,
		(input: any): boolean => false
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly UNDEFINED: SpecialType<undefined> = new SpecialType(
		"undefined",
		false,
		(input: any): boolean => input === undefined
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_UNDEFINED: SpecialType<undefined> = new SpecialType(
		"undefined",
		true,
		(input: any): boolean => input === undefined
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly NULL: SpecialType<null> = new SpecialType(
		"null",
		false,
		(input: any): boolean => input === null
	);
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public static readonly OPTIONAL_NULL: SpecialType<null> = new SpecialType(
		"null",
		true,
		(input: any): boolean => input === null
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
	 * Returns the string name of this SpecialType.
	 *
	 * @return The string name of this SpecialType.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to check for conformity to this SpecialType.
	 */
	public checkConformity(input: any): boolean {
		
		return this.validator(input);
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to exhaustively check for conformity to this SpecialType.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}