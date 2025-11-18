import { Component, template } from "uix/components/Component.ts";
import { profile } from "backend/profile.ts";

@template(
  <main class="pet-list-page">
    <h1 class="title">🐕 Digital Pet Companion</h1>
    <h2 class="subtitle">Overview of {profile.name}'s pets</h2>

    <ul class="pet-list">
      {profile.pets.map((pet) => (
        <li class="pet-item">
          <a class="pet-link" href={`/pet/${pet.name}`}>
            🐕 {pet.name}
          </a>
        </li>
      ))}
    </ul>
  </main>
)
export class PetList extends Component {}
