module.exports = {
  // Target must be serverless
  target: "serverless",
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};
