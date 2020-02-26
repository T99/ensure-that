/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:33 PM -- February 25th, 2020.
 *	Project: typit
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