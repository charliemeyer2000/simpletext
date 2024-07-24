import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";



import { Pre } from "./components/Pre";


const hackedCss = `
body {
  overscroll-behavior: auto none;
}

.-ml-1 {
  margin-left: -0.25rem;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.items-baseline {
  align-items: baseline;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.text-theme-primary {
  --tw-text-opacity: 1;
  color: rgb(37, 99, 235)
}


.hover\:cursor-pointer:hover {
  cursor: pointer;
}

.ml-1 {
  margin-left: 0.25rem;
}

.font-semibold {
  font-weight: 600;
}
`;

const Head = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://docs.simpletext.dev" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      <meta property="og:url" content={url} />
      <meta
        property="og:title"
        content={frontMatter.title || "simpletext docs"}
      />
      <style>{hackedCss}</style>
      <meta
        property="og:description"
        content={frontMatter.description || "Docs for the simplest sms service"}
      />
      <meta name="twitter:image" content="https://docs.simpletext.dev/og.jpg" />
    </>
  );
};

export const Logo = () => {
  return (
    <h1 className="flex flex-row items-baseline text-2xl font-bold">
      <span className="tracking-tight hover:cursor-pointer dark:text-white">
        {`simple`}
        <span className="text-theme-primary">{`text`}</span>
        <span className="ml-1 font-semibold">docs</span>
      </span>
    </h1>
  );
};

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
  darkMode: true,
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  footer: { component: () => null },
  components: {
    pre: Pre,
  },
  head: Head,
  logo: Logo,
  navigation: false,
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: 221,
  project: {
    link: "https://github.com/charliemeyer2000/simpletext",
  },
  useNextSeoProps() {
    const currentUrl = usePathname();
    return {
      additionalLinkTags: [
        {
          href: "/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/android-icon-192x192.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "Nextra", name: "apple-mobile-web-app-title" },
      ],
      description: "Docs for a stupidly simple sms service.",
      openGraph: {
        images: [{ url: "https://docs.simpletext.dev/og.jpg" }],
      },
      canonical: `https://docs.simpletext.dev${currentUrl}`,
      noindex: process.env.NO_INDEX === "true",
      titleTemplate: "%s – simpletext",
      twitter: {
        cardType: "summary_large_image",
        site: "https://docs.simpletext.dev",
      },
    };
  },
};

export default config;