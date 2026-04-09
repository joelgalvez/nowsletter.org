function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default {
  tags: ["post"],
  eleventyComputed: {
    permalink: (data) => `/posts/${slugify(data.page.fileSlug)}/`
  }
};
