/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:37 AM -- September 11th, 2019.
 *	Project: typit
 */

/**
 * An interface for all Typit types.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
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