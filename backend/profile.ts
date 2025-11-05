import { Pet, type Profile } from "common/types/profile.ts";

const pets = $([
    {
        name: "Jakob",
        happiness: 70,
        hunger: 70,
        energy: 70
    }
] satisfies Array<Pet> )

setInterval(() => {
    pets.forEach((pet) => {
        pet.happiness = Math.max(0, pet.happiness - 2);
        pet.hunger = Math.max(0, pet.hunger - 2);
        pet.energy = Math.max(0, pet.energy - 2);
    })
}, 2000);

export const profile = $({
    name: "Adrian",
    age: 45,
    email: "adrian@gmail.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    pets: pets
} satisfies Profile);

export function changeName(newName: string) {
    profile.name = newName;
}