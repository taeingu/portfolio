// sanity/functions/getBlogPosts.js
import {createClient} from '@sanity/client';

const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-09-19",
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

export const getExperiences = async () => {
  const query = '*[_type == "experiences"] | order(year desc)';

  const results = await client.fetch(query);
  return results;
};
