import { SanityDocument } from "@sanity/client";
import { client } from "./Sanity";

export const getProjects = async function () {
  const query = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, description,image,link, publishedAt}`;

  try {
    const res = await client.fetch<SanityDocument[]>(query);
    return res;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error("Something gone wrong when fetch projects!");
  }
};
