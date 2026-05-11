export interface Fair {
	[key: string]: string | number | boolean | null | undefined;
}

const NAME_KEYS = ['nom', 'name', 'fira', 'titol', 'title'];
const COMARCA_KEYS = ['comarca', 'county'];
const MUNICIPALITY_KEYS = [
	'poblacio',
	'población',
	'poblacion',
	'municipi',
	'municipio',
	'localitat',
	'town',
	'city'
];
const START_DATE_KEYS = ['dataInici', 'startDate', 'inici', 'from'];
const END_DATE_KEYS = ['dataFi', 'endDate', 'fi', 'to'];

function readStringByKeys(fair: Fair, keys: string[]): string {
	for (const key of keys) {
		const value = fair[key];
		if (typeof value === 'string' && value.trim().length > 0) {
			return value.trim();
		}
	}
	return '';
}

export function getFairName(fair: Fair): string {
	return readStringByKeys(fair, NAME_KEYS) || 'Fira sense nom';
}

export function getFairComarca(fair: Fair): string {
	return readStringByKeys(fair, COMARCA_KEYS) || 'Sense comarca';
}

export function getFairMunicipality(fair: Fair): string {
	return readStringByKeys(fair, MUNICIPALITY_KEYS) || 'Sense poblacio';
}

export function getFairDateRange(fair: Fair): string {
	const start = readStringByKeys(fair, START_DATE_KEYS);
	const end = readStringByKeys(fair, END_DATE_KEYS);

	if (start && end) {
		return `${start} - ${end}`;
	}
	return start || end || 'Data no indicada';
}

export function getFairId(fair: Fair): string {
	const id = fair['id'];
	if (typeof id === 'string' || typeof id === 'number') {
		return String(id);
	}
	return [getFairName(fair), getFairComarca(fair), getFairMunicipality(fair)].join('|');
}
