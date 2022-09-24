/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 4:41 PM -- February 25th, 2020.
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

import { Type } from "../runtime-types/type";

/**
 * A type that extracts and return the generic type from a Typit Type type.
 *
 * This returned type is/should effectively be the compile time equivalent to
 * the runtime Typit type.
 */
export type CompileTimeType<T extends Type> = T extends Type<infer U> ? U : never;
