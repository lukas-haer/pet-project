import { Component, template } from "uix/components/Component.ts";
import { profile } from "backend/profile.ts";
import { StatusBar } from "frontend/components/StatusBar.tsx";
import { AccountModal } from "frontend/components/account/AccountModal.tsx";
import { Pet } from "common/types/profile.ts";


type PetPageProps = {
  pet: Pet
};

@template(function ({pet}) {

  const happyLevel = always(() => (pet.hunger + pet.happiness + pet.energy) / 3);
    
  return (
    <main>
      <h1> 🐶 Digital Pet Companion </h1>
      <h2> {profile.name}'s Pet </h2>

      <button type="button" class="account-button" onclick={() => this.profileModalOpen.val = !this.profileModalOpen.val}>
        👤 Account
      </button>

      {this.profileModalOpen.val && <AccountModal profile={profile} closeModal={() => this.profileModalOpen.val = false} />}

      <div class="actions">
        <button type="button" onclick={() => pet.happiness = Math.min(100, pet.happiness + 15)}> Play </button>
        <button type="button" onclick={() => pet.hunger = Math.min(100, pet.hunger + 15)}> Feed </button>
        <button type="button" onclick={() => pet.energy = Math.min(100, pet.energy + 15)}> Rest </button>
      </div>   

      <h2> {pet.name}"s mood is: 
        {always(() => {
          if (happyLevel.val > 80) return "😄";
          else if (happyLevel.val > 50) return "😐";
          else if (happyLevel.val > 20) return "😞";
          else return "💀";
        })}
      </h2>

      <h3> Pet Stats: </h3>

      <StatusBar name="Happiness" emoji="😊" value={pet.happiness} />
      <StatusBar name="Hunger" emoji="🍎" value={pet.hunger} />
      <StatusBar name="Energy" emoji="⚡" value={pet.energy} />

    </main>
)})

export class PetPage extends Component<PetPageProps> {
  profileModalOpen = $(false);
}