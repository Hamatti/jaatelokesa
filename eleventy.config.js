export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("format_date", (ISODate) => {
    const date = new Date(ISODate);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  });

  eleventyConfig.addFilter("paragraphize", (text) => {
    const paragraphs = text.split("\n");

    return `<p>${paragraphs.join("</p><p>")}</p>`;
  });
}
