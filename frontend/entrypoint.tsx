/**
 * Digital Pet Page - Tutorial 2: Reactivity
 */

const petName = "Jakob";
const happiness = 85;
const hunger = 80;
const energy = 60;

const isHappy = happiness > 70;

const stats = [
  { name: 'Happiness', emoji: '😊', value: happiness },
  { name: 'Hunger', emoji: '🍎', value: hunger },
  { name: 'Energy', emoji: '⚡', value: energy }
];
  
export default (

    <main>
      <h1> 🐶 Digital Pet Companion </h1>

      <h2> {petName}'s mood is: {isHappy ? ' 😄' : ' 😐'} </h2>

      <h3> Pet Stats: </h3>

      {stats.map(stat => (
        <div>
          <span>
            {stat.emoji} {stat.name}: {stat.value}/100
          </span>

          {stat.value < 40 && (
            <p> ⚠️ Low {stat.name}! </p>
          )}
        </div>
      ))}

    </main>
  );