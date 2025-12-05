import { Context } from "uix/routing/context.ts";
import { type User } from "common/types/user.ts"

import * as argon2 from "jsr:@felix/argon2";
import { provideRedirect } from "uix/providers/common.tsx";
import { Pet } from "common/types/pet.ts";
import { AuthError } from "common/errors.ts";

export const users = eternal ??  $({} as Record<string, User>);

declare global {
	interface PrivateData {
		user?: User
	}
};

export async function login(username: string, password: string) {

	if (!users[username]) throw new AuthError("Falscher Benutzername oder Passwort");

	if (!await argon2.verify(users[username].password, password)) {
		throw new AuthError("Falscher Benutzername oder Passwort");
	}

	console.log(`Logging in user ${username}`);

	const session = await Context.getPrivateData(datex.meta);
	session.user = users[username];

	return provideRedirect("/");
}

export async function register(ctx: Context) {
	const data = await ctx.request.formData();

	const username = data.get("username") as string;
	const password = data.get("password") as string;
	const passwordRepeat = data.get("passwordRepeat") as string;

	if (passwordRepeat !== password) throw new AuthError("Die Passwörter stimmen nicht überein!")

	if (!await argon2.verify(users[username].password, password)) {
		throw new Error("Falscher Benutzername oder Passwort")
	}

	console.log(`Registering user ${username}`);

	users[username] = {
        id: username,
        password: await argon2.hash(password),
        profile: {
            name: "",
            age: 0,
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
        },
        pets: [
            {
                name: "Bene",
                happiness: 100,
                energy: 100,
                hunger: 100,
            },
        ],
    };

	const session = await ctx.getPrivateData();
	session.user = users[username];

	return provideRedirect("/");
}

export async function getPets() {
	const session = await Context.getPrivateData(datex.meta);
	return session.user ? (session.user.pets as Array<Pet>) : null;
}