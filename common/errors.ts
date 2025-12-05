export class AuthError extends Error {
	override message: string;

	constructor(message: string) {
		super();
		this.message = message;
	}
};