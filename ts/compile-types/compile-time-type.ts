/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:41 PM -- February 25th, 2020.
 *	Project: typit
 */

import { Type } from "../type";

/**
 * A type that extracts and return the generic type from a Typit Type type.
 *
 * This returned type is/should effectively be the compile time equivalent to the runtime Typit type.
 */
export type CompileTimeType<T extends Type> = T extends Type<infer U> ? U : never;