/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:14 PM -- May 26th, 2019.
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
class ArrayType<E = any> extends Type<E[]> {
	
	private arrayType: Type;
	
	public constructor(arrayType: Type<E>) {
	
		super();
		
		this.arrayType = arrayType;
	
	}
	
	public getTypeName(): string {
		
		return "Array<" + this.arrayType.getTypeName() + ">";
		
	}
	
	public checkConformity(input: any): boolean {
		
		if (!Array.isArray(input)) return false;
		else {
			
			let inputArray: any[] = input;
			
			for (let element of inputArray) {
				
				if (!this.arrayType.checkConformity(element)) return false;
				
			}
			
		}
		
		return true;
		
	}
	
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}

export default ArrayType;