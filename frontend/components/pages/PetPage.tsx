import { Component, template } from "uix/components/Component.ts";
import { profile } from "backend/profile.ts";
import { StatusBar } from "frontend/components/status-bar/StatusBar.tsx";
import { AccountModal } from "frontend/components/account/AccountModal.tsx";
import { Pet } from "common/types/profile.ts";


type PetPageProps = {
  name: string
};

const showProfile = $(false);

@template(function () {

  return (
    <main>
      <h1> 🐶 Digital Pet Companion </h1>
      <h2> {profile.name}'s Pet </h2>

      <button type="button" class="account-button" onclick={() => showProfile.val = !showProfile.val}>
        👤 Account
      </button>

      {showProfile.val && <AccountModal profile={profile} closeModal={() => showProfile.val = false} />}

      <div class="actions">
        <button type="button" onclick={() => this.pet.happiness = Math.min(100, this.pet.happiness + 15)}> Play </button>
        <button type="button" onclick={() => this.pet.hunger = Math.min(100, this.pet.hunger + 15)}> Feed </button>
        <button type="button" onclick={() => this.pet.energy = Math.min(100, this.pet.energy + 15)}> Rest </button>
      </div>   

      <h2> {this.pet.name}"s mood is: 
        {always(() => {
          if (this.happyLevel.val > 80) return "😄";
          else if (this.happyLevel.val > 50) return "😐";
          else if (this.happyLevel.val > 20) return "😞";
          else return "💀";
        })}
      </h2>

      <h3> Pet Stats: </h3>

      <StatusBar name="Happiness" emoji="😊" value={this.pet.happiness} />
      <StatusBar name="Hunger" emoji="🍎" value={this.pet.hunger} />
      <StatusBar name="Energy" emoji="⚡" value={this.pet.energy} />

    </main>
)})

export class PetPage extends Component<PetPageProps> {
  pet!: Pet;
  happyLevel!: Ref<number>;

  protected override onCreate() {
    const pet = profile.pets.find((pet) => pet.name == this.properties.name)
    if (typeof pet === "undefined") {
        redirect("/");
        return;
    }
    this.pet = pet;
    this.happyLevel = always(() => (this.pet.hunger + this.pet.happiness + this.pet.energy) / 3);
  }
}