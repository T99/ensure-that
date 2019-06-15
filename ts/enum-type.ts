/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:41 PM -- June 14th, 2019.
 *	Website: typit
 */

import { Type } from "./type";

/**
 * A special kind of type that has a predefined/static set of acceptable values.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class EnumType<E = any> extends Type {
	
	private typeName: string;
	
	private acceptableValues: E[];
	
	public constructor(acceptableValues: E[], typeName?: string, isOptional: boolean = false) {
	
		super(isOptional);
		
		this.acceptableValues = acceptableValues;
		
		if (typeName !== undefined) this.typeName = typeName;
		else {
			
			this.typeName = "enum";
			
			// TODO [6/14/19 @ 2:50 PM] - Attempt to derive acceptableValue type and iterate over getTypeName or raw value.
			
		}
	
	}
	
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	public checkConformity(input: any): boolean {
		
		return this.acceptableValues.some((value: E): boolean => (value === input));
		
	}
	
	public exhaustivelyCheckConformity(input: any): boolean {
		
		let once: boolean = false;
		
		for (let value of this.acceptableValues) {
			
			if (value === input) {
				
				if (once) return false;
				else once = true;
				
			}
			
		}
		
		return once;
		
	}
	
}