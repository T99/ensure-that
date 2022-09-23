/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 12:08 AM -- May 27th, 2019.
 * Project: typit
 * 
 * typit - Fully recursive runtime typechecking.
 * Copyright (C) 2022 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { AbstractType } from "./abstract-type";

type Validator = (input: any) => boolean;

/**
 * An enumeration of certain special types found in JavaScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.1.0
 */
export class SpecialType<E> extends AbstractType<E> {
	
	/**
	 * The 'any' type, to which every value conforms.
	 */
	public static readonly ANY: SpecialType<any> = new SpecialType(
		"any",
		(input: any): boolean => true
	);
	
	/**
	 * The 'void' type, to which no value conforms.
	 */
	public static readonly VOID: SpecialType<void> = new SpecialType(
		"void",
		(input: any): boolean => false
	);
	
	/**
	 * The 'undefined' type, to which (present) explicitly undefined values conform.
	 */
	public static readonly UNDEFINED: SpecialType<undefined> = new SpecialType(
		"undefined",
		(input: any): boolean => input === undefined
	);
	
	/**
	 * The 'null' type, to which null values conform.
	 */
	public static readonly NULL: SpecialType<null> = new SpecialType(
		"null",
		(input: any): boolean => input === null
	);
	
	/**
	 * The 'non-present' type, to which no value conforms.
	 */
	public static readonly NOT_PRESENT: SpecialType<never> = new SpecialType(
		"not-present",
		(input: any): boolean => false
	);
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	/**
	 * The method that is used to check inputs for conformity to the given type.
	 */
	protected validator: Validator;
	
	/**
	 * Initializes a new SpecialType with the provided name and validator function.
	 *
	 * This method is protected and most likely will not need to be called by any child classes.
	 *
	 * @param name The name of the newly initialized SpecialType.
	 * @param validator The validator function of the newly initialized SpecialType.
	 */
	protected constructor(name: string, validator: Validator) {
		
		super();
		
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
	 * Returns true if and only if the provided input conforms to the validator function of whichever SpecialType
	 * is being used.
	 *
	 * @param input Any variable to check for conformity to this SpecialType.
	 * @return true if and only if the provided input conforms to the validator function of whichever SpecialType
	 * is being used.
	 */
	public checkConformity(input: any): boolean {
		
		return this.validator(input);
		
	}
	
	/**
	 * Due to the fact that an exhaustive check of SpecialTypes wouldn't do anything different than the normal
	 * conformity check, this method simply redirects to {@link SpecialType#checkConformity}.
	 *
	 * @param input Any variable to exhaustively check for conformity to this SpecialType.
	 * @return true if and only if the provided input conforms to the validator function of whichever SpecialType
	 * is being used.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}
