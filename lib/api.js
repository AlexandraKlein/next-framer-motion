async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_TOKEN
            : process.env.CONTENTFUL_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

const POST_GRAPHQL_FIELDS = `
title
slug
image {
    title
    url
    width
    height
}
content {
    json
}
author {
    name
    avatar {
    title
    url
    width
    height
    }
}
sys {
    firstPublishedAt
}
`;

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPostPage(slug, preview = false) {
  const entry = await fetchGraphQL(
    `query{
        postCollection(where: {slug_in: "${slug}"},preview: ${
      preview ? "true" : "false"
    }) {
        items {
           ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );

  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        postCollection(where: { slug_exists: true }, order: date_DESC) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
        postCollection(order: sys_publishedAt_DESC, preview: ${
          preview ? "true" : "false"
        }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
        postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    true
  );
  return extractPost(entry);
}
