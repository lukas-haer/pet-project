/**
 * Digital Pet Page - Tutorial 2: Reactivity
 */

const petName = "Jakob";
const happiness = $(85);
const hunger = $(80);
const energy = $(60);

const happyLevel = always(() => (hunger.val + happiness.val + energy.val) / 3);

const stats = [
  { name: 'Happiness', emoji: '😊', value: happiness },
  { name: 'Hunger', emoji: '🍎', value: hunger },
  { name: 'Energy', emoji: '⚡', value: energy }
];

setInterval(() => {
  hunger.val = Math.max(0, hunger.val - 2);
  happiness.val = Math.max(0, happiness.val - 1);
  energy.val = Math.max(0, energy.val - 1);
}, 2000);
  
export default (

    <main>
      <h1> 🐶 Digital Pet Companion </h1>

      <div class="actions">
        <button onclick={() => happiness.val = Math.min(100, happiness.val + 15)}> Play </button>
        <button onclick={() => hunger.val = Math.min(100, hunger.val + 15)}> Feed </button>
        <button onclick={() => energy.val = Math.min(100, energy.val + 15)}> Rest </button>
      </div>   

      <h2> {petName}'s mood is: 
        {always(() => {
          if (happyLevel.val > 80) return '😄';
          else if (happyLevel.val > 50) return '😐';
          else if (happyLevel.val > 20) return '😞';
          else return '💀';
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