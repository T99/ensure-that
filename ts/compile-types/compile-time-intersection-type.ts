/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 4:33 PM -- February 25th, 2020.
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

// DOC-ME [2/25/20 @ 4:34 PM] - Documentation required!
type InternalCompileTimeIntersectionType<T0 extends {} = {}, T1 extends {} = {}> = {
	
	[K in keyof (T0 & T1)]: K extends keyof T0 ?
		(K extends keyof T1 ?
			T1[K] : T0[K]) :
		(K extends keyof T1 ?
			T1[K] : never);
	
};

// DOC-ME [2/25/20 @ 4:34 PM] - Documentation required!
export type CompileTimeIntersectionType<
	T0 extends {},
	T1 extends {},
	T2 extends {} = {},
	T3 extends {} = {},
	T4 extends {} = {},
	T5 extends {} = {},
	T6 extends {} = {},
	T7 extends {} = {},
	T8 extends {} = {},
	T9 extends {} = {}> =
	InternalCompileTimeIntersectionType<
		InternalCompileTimeIntersectionType<
			InternalCompileTimeIntersectionType<
				InternalCompileTimeIntersectionType<
					InternalCompileTimeIntersectionType<
						InternalCompileTimeIntersectionType<
							InternalCompileTimeIntersectionType<
								InternalCompileTimeIntersectionType<
									InternalCompileTimeIntersectionType<T0, T1>, T2
									>, T3
								>, T4
							>, T5
						>, T6
					>, T7
				>, T8
			>, T9
		>;
