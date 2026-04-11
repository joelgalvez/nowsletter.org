import interlinker from "@photogabble/eleventy-plugin-interlinker";
import { execSync } from "child_process";

export default function(eleventyConfig) {
  // Build Tailwind CSS as part of 11ty's build
  eleventyConfig.on("eleventy.before", () => {
    execSync("npx tailwindcss -i ./src/input.css -o ./_site/style.css --minify");
  });

  eleventyConfig.addWatchTarget("src/");

  eleventyConfig.addPassthroughCopy({
    "fonts": "fonts",
    "favicon.ico": "favicon.ico"
  });

  eleventyConfig.addPassthroughCopy("Website/**/*.{jpg,jpeg,png,gif,svg,webp}");

  eleventyConfig.addPreprocessor("obsidian-images", "md", (data, content) => {
    // Derive directory from input path (e.g. ./Website/how/file.md → /how/)
    const inputDir = data.page.inputPath.replace(/^\.\/Website/, "").replace(/\/[^/]+$/, "/");
    const dir = inputDir || "/";
    return content.replace(/!\[\[([^\]]+\.(?:jpg|jpeg|png|gif|svg|webp))\]\]/gi, (match, filepath) => {
      const basename = filepath.split("/").pop();
      return `![${basename}](${dir}${basename})`;
    });
  });

  eleventyConfig.addGlobalData("layout", "main.njk");

  eleventyConfig.addTransform("external-links", (content) => {
    return content.replace(/<a\s+href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
  });

  // Numbered files in how/ become slideshow steps, not standalone pages
  eleventyConfig.addCollection("how-step", (collectionApi) => {
    return collectionApi.getAll()
      .filter(item => /\/how\/\d+\./.test(item.inputPath))
      .sort((a, b) => {
        const numA = parseInt(a.fileSlug.match(/^(\d+)/)?.[1] || 0);
        const numB = parseInt(b.fileSlug.match(/^(\d+)/)?.[1] || 0);
        return numA - numB;
      })
      .map(item => {
        const num = parseInt(item.fileSlug.match(/^(\d+)/)?.[1] || 0);
        item.data.stepNumber = num;
        item.data.stepTitle = item.fileSlug.replace(/^\d+\.\s*/, "");
        return item;
      });
  });

  eleventyConfig.addGlobalData("eleventyComputed.permalink", () => {
    return (data) => {
      if (/\/how\/\d+\./.test(data.page.inputPath)) return false;
      return data.permalink;
    };
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
