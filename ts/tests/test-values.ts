/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 1:33 AM -- June 15th, 2019.
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

export const TEST_VALUES: any = {
	
	NUMBERS: {
		
		BASIC: 5,
		ZERO: 0,
		POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
		NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
		MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
		MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
		MAX_VALUE: Number.MAX_VALUE,
		MIN_VALUE: Number.MIN_VALUE,
		NAN: Number.NaN
		
	},
	
	BOOLEAN: {
		
		BASIC: true,
		TRUE: true,
		FALSE: false
		
	},
	
	STRING: {
		
		BASIC: "string",
		NUMERIC: "1234567890",
		SYMBOLS: "`~!@#$%^&*()_+=-{}|[]\\:\";'<>?,./",
		EMPTY: "",
		LONG: "linasdfiuhnapsdgoim[oinpiubasodifnpasiudbpgoasdnfoimpoipiausdhfoaisdmf[oim[oinpunasfdinapsdoifn[opiasdf[iop98j=09148n3tg-9n-[08jsd[onfpioH"
		
	},
	
	SPECIAL: {
		
		UNDEFINED: undefined,
		NULL: null
		
	}
	
};
