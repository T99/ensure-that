/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:15 PM -- June 14th, 2019.
 *	Website: typit
 */

import { Type } from "./type";

/**
 * A type that can be one of a set of types.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class UnionType<E = any> extends Type<E> {
	
	protected typeName: string;
	
	protected acceptableTypes: Type[];
	
	public constructor(types: Type[], isOptional: boolean = false) {
		
		super(isOptional);
		
		this.acceptableTypes = types;
		this.typeName = "";
		
		for (let type of types) {
			
			if (this.typeName !== "") this.typeName += " | ";
			this.typeName += type.getTypeName();
			
		}
	
	}
	
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	public checkConformity(input: any): boolean {
		
		return this.acceptableTypes.some((type: Type): boolean => type.checkConformity(input));
		
	}
	
	public exhaustivelyCheckConformity(input: any): boolean {
		
		let once: boolean = false;
		
		for (let type of this.acceptableTypes) {
			
			if (type.checkConformity(input)) {
				
				if (once) return false;
				else once = true;
				
			}
			
		}
		
		return once;
		
	}
	
}