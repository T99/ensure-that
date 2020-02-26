/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:54 PM -- June 15th, 2019.
 *	Project: typit
 */

import { SpecialType } from "./runtime-types/special-type";
import { Type } from "./runtime-types/type";
import { StandardType } from "./runtime-types/standard-type";

/**
 * A class that infers the Type of it's provided inputs.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.6.0
 */
export class TypeInferer {
	
	protected constructor() {
	
		// TODO [6/15/19 @ 11:18 PM] - Finish the 'constructor' method.
	
	}
	
	public static infer(input: any): Type {
		
		return SpecialType.ANY;
		
	}
	
}