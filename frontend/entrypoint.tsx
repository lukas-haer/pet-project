/**
 * Digital Pet Page
*/

import { Entrypoint } from "uix/providers/entrypoints.ts";
import { PetPage } from "frontend/components/pages/PetPage.tsx";
import { PetList } from "frontend/components/pages/PetList.tsx";
import { getPets } from "backend/data.ts";
import { Auth } from "./components/auth/Auth.tsx";

  
export default {
  "/": async (_, ) => {

    const pets = await getPets();
    if (pets == null) redirect("/auth")

    return <PetList pets={pets!} />
  },

  "/pet/:name": async (_, {name}) => {

    const pets = await getPets();
    if (pets == null) redirect("/auth")

    const pet = pets!.find((p) => p.name === name);
    if (!pet) {
      throw new Error("Pet not found");
    }

    return <PetPage pet={pet} />
  },
  "/auth": <Auth /> 
} satisfies Entrypoint;
