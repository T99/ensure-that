/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:15 PM -- June 14th, 2019.
 *	Website: typit
 */

import { Type } from "./type";

/**
 * A {@link Type} that can be one of a set of Types.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.4.0
 */
export class UnionType<E = any> extends Type<E> {
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	/**
	 * A list of acceptable {@link Type}s for this UnionType.
	 */
	protected acceptableTypes: Type[];
	
	/**
	 * Initializes a new UnionType for the provided list of {@link Type}s.
	 *
	 * @param types The Types to union for this UnionType.
	 */
	public constructor(...types: Type[]) {
		
		super();
		
		this.acceptableTypes = types;
		this.typeName = "";
		
		for (let type of types) {
			
			if (this.typeName !== "") this.typeName += " | ";
			this.typeName += type.getTypeName();
			
		}
	
	}
	
	/**
	 * Returns the string name of this Type.
	 *
	 * @return The string name of this Type.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * Returns true if and only if the provided input variable conforms to one or more of the types within this
	 * UnionType.
	 *
	 * This method makes no guarantees that the provided input does or does not conform to more than one of the types
	 * within this UnionType. For such functionality see {@link UnionType#exhaustivelyCheckConformity}.
	 *
	 * @param input Any variable to check for conformity to this UnionType.
	 * @return true if and only if the provided input variable conforms to one or more of the types within this
	 * UnionType.
	 */
	public checkConformity(input: any): boolean {
		
		return this.acceptableTypes.some((type: Type): boolean => type.checkConformity(input));
		
	}
	
	/**
	 * Returns true if and only if the provided input variable conforms to exactly one of the types within this
	 * UnionType.
	 *
	 * @param input Any variable to exhaustively check for conformity to this UnionType.
	 * @return true if and only if the provided input variable conforms to exactly one of the types within this
	 * UnionType.
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