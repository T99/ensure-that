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
 * @version v0.3.0
 * @since v0.1.0
 */
export class SpecialType<E> extends Type<E> {
	
	public static readonly ANY: SpecialType<any> = new SpecialType(
		"any",
		false,
		(input: any): boolean => true
	);
	
	public static readonly OPTIONAL_ANY: SpecialType<any> = new SpecialType(
		"any",
		true,
		(input: any): boolean => true
	);
	
	public static readonly VOID: SpecialType<void> = new SpecialType(
		"void",
		false,
		(input: any): boolean => false
	);
	
	public static readonly OPTIONAL_VOID: SpecialType<void> = new SpecialType(
		"void",
		true,
		(input: any): boolean => false
	);
	
	public static readonly UNDEFINED: SpecialType<undefined> = new SpecialType(
		"undefined",
		false,
		(input: any): boolean => input === undefined
	);
	
	public static readonly OPTIONAL_UNDEFINED: SpecialType<undefined> = new SpecialType(
		"undefined",
		true,
		(input: any): boolean => input === undefined
	);
	
	public static readonly NULL: SpecialType<null> = new SpecialType(
		"null",
		false,
		(input: any): boolean => input === null
	);
	
	public static readonly OPTIONAL_NULL: SpecialType<null> = new SpecialType(
		"null",
		true,
		(input: any): boolean => input === null
	);
	
	private name: string;
	
	private validator: Validator;
	
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