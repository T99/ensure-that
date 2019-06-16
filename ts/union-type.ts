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
 * @version v0.5.0
 * @since v0.4.0
 */
export class UnionType<E = any> extends Type<E> {
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	protected acceptableTypes: Type[];
	
	// DOC-ME [6/15/19 @ 7:14 PM] - Documentation required!
	public constructor(types: Type[], isOptional: boolean = false) {
		
		super(isOptional);
		
		this.acceptableTypes = types;
		this.typeName = "";
		
		for (let type of types) {
			
			if (this.typeName !== "") this.typeName += " | ";
			this.typeName += type.getTypeName();
			
		}
	
	}
	
	/**
	 * Returns the name of this Type.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to check for conformity to this UnionType.
	 */
	public checkConformity(input: any): boolean {
		
		return this.acceptableTypes.some((type: Type): boolean => type.checkConformity(input));
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to exhaustively check for conformity to this UnionType.
	 */
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