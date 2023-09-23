import type { PageLoad } from "./$types";
import { client } from "$lib/directusClient";
import { readItems } from "@directus/sdk";

export const load: PageLoad = async () => {
  return {
    // properties: getProperties(),
  };
};

const getProperties = async () => {
  let props = await client.request(
    readItems("property_sale", {
      fields: ["*", "property.*"],
    })
  );
  console.log(props);
  return props;
};
