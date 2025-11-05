export type Profile = {
	name: string;
	age: number;
	email: string;
	phone: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	country: string;
	pets: Array<Pet>;
};

export type Pet = {
	name: string;
	happiness: number;
	hunger: number;
	energy: number;
};