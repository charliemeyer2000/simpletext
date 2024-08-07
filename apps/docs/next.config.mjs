import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.js",
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblock: false,
  },
  async redirects() {
    return [
      {
        source: "/getting-started",
        destination: "/getting-started/React-&-NextJS",
        permanent: true,
      },
      {
        source: "/api",
        destination: "/api/send-sms",
        permanent: true,
      }
      // {
      //   source: "/nextjs/next-react",
      //   destination: "/getting-started/next-react",
      //   permanent: true,
      // },
      // {
      //   source: "/nextjs/pagedir",
      //   destination: "/getting-started/pagedir",
      //   permanent: true,
      // },
      // {
      //   source: "/solid",
      //   destination: "/getting-started/solid",
      //   permanent: true,
      // },
      // {
      //   source: "/solidstart/server",
      //   destination: "/getting-started/solid",
      //   permanent: true,
      // },
    ];
  },
});

export default withNextra({
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    NO_INDEX: process.env.VERCEL_ENV !== "production" ? "true" : "false",
  },
});
