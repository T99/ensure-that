/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:55 PM -- May 26th, 2019.
 *	Project: typit
 */

import Type from "./type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
interface ObjectTypeDefinition {
	
	readonly [property: string]: Type | ObjectTypeDefinition;

}

export default ObjectTypeDefinition;