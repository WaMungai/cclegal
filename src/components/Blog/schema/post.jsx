export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", type: "text" },
    { name: "mainImage", type: "image" },
    { name: "publishedAt", type: "datetime" },
    { name: "body", type: "array", of: [{ type: "block" }] },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
