/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:23 AM -- May 27th, 2019.
 *	Project: typit
 */

import { Type } from "./type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.1.0
 */
export class OptionalType<T extends Type<E>, E = any> extends Type<E> {
	
	private optionalType: Type<E>;
	
	public constructor(optionalType: Type<E>) {
	
		super();
		
		this.optionalType = optionalType;
	
	}
	
	public getTypeName(): string {
		
		return "optional " + this.optionalType.getTypeName();
		
	}
	
	public checkConformity(input: any): boolean {
		
		return false;
		
	}
	
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return false;
		
	}
	
}