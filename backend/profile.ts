import { type Profile } from "common/types/profile.ts";

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
} satisfies Profile);

export function changeName(newName: string) {
    profile.name = newName;
}