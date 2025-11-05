import { Component, template } from "uix/components/Component.ts";
import { profile } from "backend/profile.ts";


@template((
	<main>
		<h1>🐕 Digital Pet Companion</h1>
		<h2>Overview of {profile.name}'s pets</h2>
		<ul>
			{
				profile.pets.map((pet) => (
					<a href={`/pet/${pet.name}`}>
						<li>🐕 { pet.name }</li>
					</a>
				))
			}
		</ul>
	</main>
))

export class PetList extends Component {}