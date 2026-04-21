import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Injects analytics & verification tags into the final built index.html
// so they are visible in "View Page Source" in the browser.
const injectHeadTags = (): Plugin => ({
  name: "inject-head-tags",
  transformIndexHtml: {
    order: "post",
    handler(html) {
      const tags = `
    <meta name="google-site-verification" content="wHcJJUuTf626FbFFtvg6MeI5UzvTHVchEdqFPQzIZlg" />
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q4QX4SCNBZ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q4QX4SCNBZ');
    </script>
  `;
      return html.replace("</head>", `${tags}\n  </head>`);
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    injectHeadTags(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
