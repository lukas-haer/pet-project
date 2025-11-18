/**
 * Digital Pet Page - Tutorial 5: Routing
*/

import { profile } from "backend/profile.ts";
import { StatusBar } from "frontend/components/status-bar/StatusBar.tsx";
import { AccountModal } from "frontend/components/account/AccountModal.tsx";

const petName = "Jakob";
const happiness = $(85);
const hunger = $(80);
const energy = $(60);

const happyLevel = always(() => (hunger.val + happiness.val + energy.val) / 3);

const stats = [
  { name: "Happiness", emoji: "😊", value: happiness },
  { name: "Hunger", emoji: "🍎", value: hunger },
  { name: "Energy", emoji: "⚡", value: energy }
];

setInterval(() => {
  hunger.val = Math.max(0, hunger.val - 2);
  happiness.val = Math.max(0, happiness.val - 1);
  energy.val = Math.max(0, energy.val - 1);
}, 2000);

const showProfile = $(false);
  
export default (

    <main>
      <h1> 🐶 Digital Pet Companion </h1>
      <h2> {profile.name}'s Pet </h2>

      <button type="button" class="account-button" onclick={() => showProfile.val = !showProfile.val}>
        👤 Account
      </button>

      {showProfile.val && <AccountModal profile={profile} closeModal={() => showProfile.val = false} />}

      <div class="actions">
        <button type="button" onclick={() => happiness.val = Math.min(100, happiness.val + 15)}> Play </button>
        <button type="button" onclick={() => hunger.val = Math.min(100, hunger.val + 15)}> Feed </button>
        <button type="button" onclick={() => energy.val = Math.min(100, energy.val + 15)}> Rest </button>
      </div>   

      <h2> {petName}"s mood is: 
        {always(() => {
          if (happyLevel.val > 80) return "😄";
          else if (happyLevel.val > 50) return "😐";
          else if (happyLevel.val > 20) return "😞";
          else return "💀";
        })}
      </h2>

      <h3> Pet Stats: </h3>

      {stats.map(stat => (
        <StatusBar name={stat.name} emoji={stat.emoji} value={stat.value} />
      ))}

    </main>
  );