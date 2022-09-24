/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 11:37 AM -- September 11th, 2019.
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

/**
 * An interface for all Typit types.
 *
 * @author Trevor Sears <trevor@trevorsears.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface Type<E = any> {
	
	/**
	 * Returns the optionality of this Type.
	 *
	 * @return true if this Type is optional.
	 */
	isOptional(): boolean;
	
	/**
	 * Returns the string name of this Type.
	 *
	 * @return The string name of this Type.
	 */
	getTypeName(): string;
	
	/**
	 * Returns true if and only if the input value conforms to this Type.
	 *
	 * @param input Any variable to check for conformity to this Type.
	 * @return true if and only if the input value conforms to this Type
	 */
	checkConformity(input: any): boolean;
	
	/**
	 * Returns true if and only if all members passed as arguments conform to this Type.
	 *
	 * @param input Any number of variables to check for conformity to this Type.
	 * @return true if and only if all members passed as arguments conform to this Type.
	 */
	checkConformityOfAll(...input: any[]): boolean;
	
	/**
	 * Returns true if and only if the input value exhaustively conforms to this Type.
	 *
	 * Note that the exact definition of "exhaustively conformity" differs between Types.
	 *
	 * @param input Any variable to exhaustively check for conformity to this Type.
	 * @return true if and only if the input value exhaustively conforms to this Type.
	 */
	exhaustivelyCheckConformity(input: any): boolean;
	
	/**
	 * Returns true if and only if all members passed as arguments exhaustively conform to this Type.
	 *
	 * Note that the exact definition of "exhaustively conformity" differs between Types.
	 *
	 * @param input Any number of variables to exhaustively check for conformity to this Type.
	 * @return true if and only if all members passed as arguments exhaustively conform to this Type.
	 */
	exhaustivelyCheckConformityOfAll(...input: any[]): boolean;
	
	/**
	 * Either returns the given input if it correctly conforms to this {@link Type}, or throws a TypeError.
	 *
	 * @param input The input to sanitize.
	 * @return The given input if it correctly conforms to this Type.
	 * @throws A TypeError if the provided input does not correctly conform to this Type.
	 */
	sanitize(input: any): E;

}
