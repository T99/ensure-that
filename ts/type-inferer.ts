/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 8:54 PM -- June 15th, 2019.
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

import { SpecialType } from "./runtime-types/special-type";
import { Type } from "./runtime-types/type";

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
