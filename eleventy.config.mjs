import { inspect } from "node:util";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addFilter("keys", obj => Object.keys(obj).sort());
  eleventyConfig.addFilter("inspect", obj => inspect(obj, { sorted: true, depth: null }));

  return {
    dir: {
      data: "../_data",
      includes: "../_includes",
      input: "src",
      output: "dist"
    }
  };
};
