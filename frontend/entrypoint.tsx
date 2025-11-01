/**
 * Digital Pet Page - Tutorial 2: Reactivity
 */

  // Data for demonstration
  const petName = "Jakob";
  const hunger = 80;
  const happiness = 85;
  const energy = 60;

  // Booleans for conditionals
  const isHappy = happiness > 70;

  // Arrays for .map()
  const stats = [
    { name: 'Hunger', emoji: '🍎', value: hunger },
    { name: 'Happiness', emoji: '😊', value: happiness },
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