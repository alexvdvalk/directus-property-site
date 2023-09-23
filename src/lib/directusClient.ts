// place files you want to import through the `$lib` alias in this folder.
import { createDirectus, rest } from "@directus/sdk";
import { env } from "$env/dynamic/public";

export const client = createDirectus(env.PUBLIC_DIRECTUS_URL).with(rest());
