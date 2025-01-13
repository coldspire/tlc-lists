import { inspect } from "node:util";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { EleventyRenderPlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addFilter("keys", obj => Object.keys(obj).sort());
  eleventyConfig.addFilter("inspect", obj => inspect(obj, { sorted: true, depth: null }));

  return {
    pathPrefix: "/lists/",
    dir: {
      data: "../_data",
      includes: "../_includes",
      input: "src",
      output: "dist"
    }
  };
};
