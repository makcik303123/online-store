interface Params {
	[key: string]: boolean;
}

interface Filter {
	header: string;
	fields: field[];
}

interface field {
	name: string;
	color: string | null;
}

export type { Params, Filter };
