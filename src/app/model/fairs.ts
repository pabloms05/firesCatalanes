export interface Fair {
	[key: string]: unknown;
}

const NAME_KEYS = ['activityName', 'nom', 'name', 'fira', 'titol', 'title'];
const COMARCA_KEYS = ['regionName', 'comarca', 'county'];
const MUNICIPALITY_KEYS = [
	'municipalityName',
	'poblacio',
	'población',
	'poblacion',
	'municipi',
	'municipio',
	'localitat',
	'town',
	'city'
];
const DATE_KEYS = ['date', 'data', 'dia', 'when'];
const START_DATE_KEYS = ['dataInici', 'startDate', 'inici', 'from'];
const END_DATE_KEYS = ['dataFi', 'endDate', 'fi', 'to'];
const ADDRESS_KEYS = ['organizerAddress', 'address', 'adreca', 'direccio'];
const PHONE_KEYS = ['organizerPhone', 'phone', 'telefon', 'tel'];
const EMAIL_KEYS = ['email', 'mail', 'correu'];
const WEB_KEYS = ['web', 'website', 'url'];

function readStringByKeys(fair: Fair, keys: string[]): string {
	for (const key of keys) {
		const value = fair[key];
		if (typeof value === 'string' && value.trim().length > 0) {
			return value.trim();
		}
	}
	return '';
}

function readListByKeys(fair: Fair, keys: string[]): string {
	for (const key of keys) {
		const value = fair[key];
		if (typeof value === 'string' && value.trim().length > 0) {
			return value.trim();
		}

		if (Array.isArray(value)) {
			const values = value
				.filter((item) => typeof item === 'string' && item.trim().length > 0)
				.map((item) => String(item).trim());
			if (values.length > 0) {
				return values.join(' · ');
			}
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
	const date = readStringByKeys(fair, DATE_KEYS);
	if (date) {
		return date;
	}

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

export function getFairAddress(fair: Fair): string {
	return readStringByKeys(fair, ADDRESS_KEYS) || 'Adreca no indicada';
}

export function getFairPhone(fair: Fair): string {
	return readStringByKeys(fair, PHONE_KEYS) || 'Telefon no indicat';
}

export function getFairEmail(fair: Fair): string {
	return readStringByKeys(fair, EMAIL_KEYS) || 'Email no indicat';
}

export function getFairWeb(fair: Fair): string {
	return readListByKeys(fair, WEB_KEYS) || 'Web no indicada';
}
