import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  output: "static",
  integrations: [mdx(), react()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark"
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
