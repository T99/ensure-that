/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 5:59 PM -- May 26th, 2019.
 * Project: typit
 * 
 * typit - Fully recursive runtime typechecking.
 * Copyright (C) 2022 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Type } from "./type";

/**
 * An interface for classes that check for conformity to a given type at runtime.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v1.0.0
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
