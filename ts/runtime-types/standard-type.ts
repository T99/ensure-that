/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 5:59 PM -- May 26th, 2019.
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
 * An enumeration of the standard types found in JavaScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.1.0
 */
export class StandardType<E> extends AbstractType<E> {
	
	/**
	 * The 'number' type, to which numeric values conform.
	 */
	public static readonly NUMBER: StandardType<number> = new StandardType(
		"number",
		(input: any): boolean => (typeof input === "number")
	);
	
	/**
	 * The 'boolean' type, to which truthy and falsy values conform.
	 */
	public static readonly BOOLEAN: StandardType<boolean> = new StandardType(
		"boolean",
		(input: any): boolean => (typeof input === "boolean")
	);
	
	/**
	 * The 'string' type, to which string values conform.
	 */
	public static readonly STRING: StandardType<string> = new StandardType(
		"string",
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
	
	/**
	 * Initializes a new StandardType with the provided name and validator function.
	 *
	 * This method is protected and most likely will not need to be called by any child classes.
	 *
	 * @param name The name of the newly initialized StandardType.
	 * @param validator The validator function of the newly initialized StandardType.
	 */
	protected constructor(name: string, validator: Validator) {
	
		super();
		
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
	 * Returns true if and only if the provided input conforms to the validator function of whichever StandardType
	 * is being used.
	 *
	 * @param input Any variable to check for conformity to this StandardType.
	 * @return true if and only if the provided input conforms to the validator function of whichever StandardType
	 * is being used.
	 */
	public checkConformity(input: any): boolean {
		
		return this.validator(input);
		
	}
	
	/**
	 * Due to the fact that an exhaustive check of StandardTypes wouldn't do anything different than the normal
	 * conformity check, this method simply redirects to {@link StandardType#checkConformity}.
	 *
	 * @param input Any variable to exhaustively check for conformity to this StandardType.
	 * @return true if and only if the provided input conforms to the validator function of whichever StandardType
	 * is being used.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}
