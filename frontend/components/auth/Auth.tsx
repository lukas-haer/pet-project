import { Component, template } from "uix/components/Component.ts";
import { login, register } from "backend/data.ts";
import { AuthError } from "common/errors.ts";

const authPageState = $("login");
const feedback = $("")


const username = $("");
const password = $("");

function toggleAuthPageState() {	
	if (authPageState.val === "register") {
		authPageState.val = "login"
	} else {
		authPageState.val = "register"
	}
}

async function handleLogin() {
    try {
        const res = await login(username.val, password.val);
        console.log(res);
    } catch (e) {        
        if (e instanceof AuthError) {
            console.error(e);
            feedback.val = e.message;
        } else {
            console.error(e);
            feedback.val = "Unbekannter Fehler";
        }
    }
}

function handleRegister() {

}

@template(() => (
    <main>
        <h1>🐶 Digital Pet Companion</h1>

        <div class="auth-container">
            {authPageState.val === "login" && (
                <div class="auth-login">
                    <h2>Login</h2>

                    <form>
                        <input value={username} name="username" type="text" placeholder="Benutzername" required />
                        <input value={password} name="password" type="password" placeholder="Passwort" required />
                        <button type="submit" onclick={handleLogin}>Anmelden</button>
                    </form>

                    <p class="auth-link">
                        Noch keinen Account? {" "}
                        <a onclick={toggleAuthPageState}>Hier registrieren</a>
                    </p>
                </div>
            )}

            {authPageState.val === "register" && (
                <div class="auth-register">
                    <h2>Registrieren</h2>

                    <form action={register}>
                        <input name="username" type="text" placeholder="Benutzername" required />
                        <input name="password" type="password" placeholder="Passwort" required />
                        <input name="passwordRepeat" type="password" placeholder="Passwort bestätigen" required />
                        <button type="submit">Account erstellen</button>
                    </form>

                    <p class="auth-link">
                        Bereits ein Konto? {" "}
                        <a onclick={toggleAuthPageState}>Hier einloggen</a>
                    </p>
                </div>
            )}

            {feedback.val != "" && (
                <div class="auth-feedback">
                    { feedback.val }
                </div>
            )}

        </div>
    </main>
))

export class Auth extends Component {}
