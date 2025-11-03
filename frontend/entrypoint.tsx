/**
 * Digital Pet Page - Tutorial 3: DATEX
*/

import { profile, changeName } from "backend/profile.ts";

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

      <button class="account-button" onclick={() => showProfile.val = !showProfile.val}>
        👤 Account
      </button>

      {showProfile.val && ( 
        <div class="modal-overlay" onclick={() => showProfile.val = false}>
          <div class="profile-modal" onclick={(e) => e.stopPropagation()}>
            <button class="close-button" onclick={() => showProfile.val = false}> ✕ </button>

            <h2>👤 {profile.name}'s Profile</h2>

            <button class="change-name-btn" onclick={async () => {
              const name = prompt("Enter new name:");
              if (name) await changeName(name);
            }}>
              ✏️ Change Name
            </button>

            <div class="profile-info">
              <div class="info-item">
                <span class="info-label">🎂 Age:</span>
                <span class="info-value">{profile.age} years old</span>
              </div>

              <div class="info-item">
                <span class="info-label">📧 Email:</span>
                <span class="info-value">{profile.email}</span>
              </div>

              <div class="info-item">
                <span class="info-label">📱 Phone:</span>
                <span class="info-value">{profile.phone}</span>
              </div>

              <div class="info-section">
                <h3>📍 Address</h3>
                <div class="address-details">
                  <p>{profile.address}</p>
                  <p>{profile.city}, {profile.state} {profile.zip}</p>
                  <p>{profile.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div class="actions">
        <button onclick={() => happiness.val = Math.min(100, happiness.val + 15)}> Play </button>
        <button onclick={() => hunger.val = Math.min(100, hunger.val + 15)}> Feed </button>
        <button onclick={() => energy.val = Math.min(100, energy.val + 15)}> Rest </button>
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
        <div class="stat-container">
          <div class="stat-header">
            <span> {stat.emoji} {stat.name}: </span>
            <span class="stat-value">{stat.value}/100</span>
          </div>
          <div class="stat-bar-container">
            <div class="stat-bar" style={{ width: `${stat.value}%` }}></div>
          </div>
        
          {stat.value < 40 && (
            <p> ⚠️ Low {stat.name}! </p>
          )}
        </div>
      ))}

    </main>
  );