export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    dir: {
      includes: "../_includes",
      input: "src",
      output: "dist"
    }
  };
};
