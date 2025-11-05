/**
 * Digital Pet Page - Tutorial 4: Components
*/

import { Entrypoint } from "uix/providers/entrypoints.ts";
import { PetPage } from "frontend/components/pages/PetPage.tsx";
import { PetList } from "frontend/components/pages/PetList.tsx";
import { profile } from "backend/profile.ts";

  
export default {
  "/": <PetList />,
  "/pet/:name": (_, {name}) => {
    const pet = profile.pets.find((p) => p.name === name);
    if (!pet) {
      throw new Error("Pet not found");
      
    }
    return <PetPage pet={pet} />
  } 
} satisfies Entrypoint;
