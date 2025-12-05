import { type Profile } from "common/types/profile.ts";
import { type Pet } from "common/types/pet.ts";

export type User = {
	id: string
	password: string;

	profile: Profile;
	pets: Array<Pet>;
};