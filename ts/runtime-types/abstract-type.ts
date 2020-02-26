/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:59 PM -- May 26th, 2019.
 *	Project: typit
 */

import { Type } from "./type";

/**
 * An interface for classes that check for conformity to a given type at runtime.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.1.0
 */
export abstract class AbstractType<E = any> implements Type {
	
	public isOptional(): boolean {
		
		return false;
		
	}
	
	public abstract getTypeName(): string;
	
	public abstract checkConformity(input: any): boolean;
	
	public checkConformityOfAll(...input: any[]): boolean {
		
		return input.every((item: any): boolean => this.checkConformity(item));
		
	}
	
	public abstract exhaustivelyCheckConformity(input: any): boolean;
	
	public exhaustivelyCheckConformityOfAll(...input: any[]): boolean {
		
		return input.every((item: any): boolean => this.exhaustivelyCheckConformity(item));
		
	}
	
	public sanitize(input: any): E {
		
		if (this.checkConformity(input)) return input as E;
		else {
			
			throw new TypeError("ERR | Attempted to sanitize content that did not match the desired type signature. " +
				"Type of " + input.toString() + "was not '" + this.getTypeName() + "'");
			
		}
		
	}

}