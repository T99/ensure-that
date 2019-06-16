/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:55 PM -- May 26th, 2019.
 *	Project: typit
 */

import { Type } from "./type";

/**
 * An interface defining the outline by which complex object types can be typechecked.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.1.0
 */
export interface ObjectTypeDefinition {
	
	/**
	 * Each property must either be a checkable {@link Type} or a recursing ObjectTypeDefinition.
	 */
	readonly [property: string]: Type | ObjectTypeDefinition;

}