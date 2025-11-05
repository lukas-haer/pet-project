/**
 * Digital Pet Page - Tutorial 4: Components
*/

import { Entrypoint } from "uix/providers/entrypoints.ts";
import { PetPage } from "frontend/components/pages/PetPage.tsx";
import { PetList } from "frontend/components/pages/PetList.tsx";

  
export default {
  "/": <PetList />,
  "/pet/:name": (_, {name}) => <PetPage name={name} />
} satisfies Entrypoint;
