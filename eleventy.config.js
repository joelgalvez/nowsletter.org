import interlinker from "@photogabble/eleventy-plugin-interlinker";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "style.css": "style.css",
    "fonts": "fonts"
  });

  eleventyConfig.addPassthroughCopy("Website/**/*.{jpg,jpeg,png,gif,svg,webp}");

  eleventyConfig.addPreprocessor("obsidian-images", "md", (data, content) => {
    const dir = data.page.url || "/";
    return content.replace(/!\[\[([^\]]+\.(?:jpg|jpeg|png|gif|svg|webp))\]\]/gi, (match, filepath) => {
      const basename = filepath.split("/").pop();
      return `![${basename}](${dir}${basename})`;
    });
  });

  eleventyConfig.addGlobalData("layout", "main.njk");

  eleventyConfig.setServerOptions({
    watch: ["style.css"]
  });

  eleventyConfig.addTransform("external-links", (content) => {
    return content.replace(/<a\s+href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
  });

  eleventyConfig.addPlugin(interlinker, {
    defaultLayout: null,
    deadLinkReport: "console"
  });

  return {
    dir: {
      input: "Website",
      includes: "../_includes",
      output: "_site"
    }
  };
}
