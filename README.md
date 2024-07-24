<div align="center">

<a href="https://simpletext.dev" target="_blank" title="Go to the simpletext website"><img width="px" alt="gowebly logo" src="https://simpletext.dev/png/og.jpg"></a>

<a name="readme-top"></a>

# simpletext

</div>

<div align="center">
  <a href="https://simpletext.dev">Home</a> | <a href="https://docs.simpletext.dev">Docs</a> | <a href="https://docs.simpletext.dev/roadmap">Roadmap</a>
</div>

## what is simpletext?

simpletext is a **stupidly simple** sms service developed to remove barriers to entry to use sms and otp services. unlike other messaging services, we make it so simple to start sending sms, removing bloat, credit card requirements, and other unnecessary hurdles imposed by other sms providers. 

**&searr;&nbsp;&nbsp;Official simpletext links:&nbsp;&nbsp;&swarr;**

- [🚀 Get started here][simpletext_site]
- [📄 Read the docs here][simpletext_docs]
- [⚛ Check out our React client][simpletext_client] and its [open-source implementation][simpletext_client_code]
- [🧩 See starter & example code][simpletext_examples]

## Table of Contents

This repo is a public monorepo containing the packages, docs, and examples for simpletext. 

- [`/examples`][simpletext_examples]: Example projects to get started with simpletext, including:
  - [Minimal Nextjs 14 App Directory Example](https://github.com/charliemeyer2000/simpletext/tree/main/examples/minimal-appdir)
- [`/apps/docs`][simpletext_docs_code]: The code implementation of the [live docs][simpletext_docs] page. 
- [`/packages/simpletext-client`][simpletext_client_code]: The code for the `@simpletext/client` NPM package. 

## 🤝 Contribute

We welcome contribution to simpletext's codebases, and highly suggest you fork and create a pull request to any of our open-source code - adding to/editing our docs, examples, or packages. To contribute please:
1. Fork and clone the repository
2. Ensure you have the LTS version of Node.js installed, as well as the latest
   version of [pnpm](https://pnpm.io).
3. Install the project dependencies by running `pnpm install`.
4. Implement your changes and open a pull request with your changes.

If you are interested in working on the main web app/IaC (whose code is private) or want to discuss implementation details, please reach out to [contact@simpletext.dev](mailto:contact@simpletext.dev).

## About simpletext

### ✨ Features

- 100 free sms texts per day (across all applications) for any user. 
- __Responsive__ and __downloadable__ analytics with insights on recent messages, their status, and metadata. 
- Manage dev/staging/prod environments across your apps with multiple applications for security. 
- Securely create and delete **API keys** to inteface with simpletext via HTTPS.
- Send and verify **otp requests** as a simple tier user.
- [**Well-documented**][simpletext_docs] docs with API descriptions and examples
- [**Type-safe client**][simpletext_client] for React/NextJS developers to interface with simpletext APIs.
- Durable and scalable backend with disaster recovery at its core. 
- **Secure Payments** with Stripe to manage tiers of _free dev_, _simple dev_, and _expert dev_.
- Easy **authentication** with Google and GitHub; no need to memorize passwords!

### 🧑‍💻 Tech Stack

> [!NOTE]  
> While the main simpletext web application is private, for security reasons, you are more than welcome to check out, fork, and [contribute](#🤝-contribute) to our open-source [docs][simpletext_docs_code], [client][simpletext_client_code], and [examples][simpletext_examples].

- [Vercel](https://vercel.com): Deployment for the [simpletext web app][simpletext_site] and [docs][simpletext_docs], along with staging and development deployments (private). 
- [NextJS](https://nextjs.org): Used Next 14 with TS (`/app` router) as my framework, using `api` routes and SSR, along with [Nextra's template](https://nextra.site/docs) for a template for documentation. Leveraged [Shadcn/ui](https://ui.shadcn.com) and [tailwind](https://Tailwindcss.com) for styling.
- [NextAuth](https://next-auth.js): NextAuth v5 integrated with GitHub and Google OAuth for authentication.
- [Stripe](https://stripe.com): For managing payments.
- AWS:
    - [CDK](https://aws.amazon.com/cdk): Built IaC using CDK in Python 
    - Other: DynamoDB for storage, APIGW + CloudFront for the API, WAF to protect APIGW, Lambda for APIs, all deployed across three environments to primary and disaster-recovery regions. 
- [Figma](https://figma.com): All pages and logos designed in Figma before being implemented in code. 
- Monitoring:
    - [Google Analytics](https://analytics.google.com): Managing site traffic.
    - [Microsoft Clarity](https://clarity.microsoft.com): View UX and traffic.


### 👷‍♂️ Design Decisions & Credits

This website was majorly inspired by [uploadthing](https://uploadthing.com). Just as they improve developer experience interacting with S3 for modern devs, simpletext strives to improve developer experince with sms, while also lowering barriers to entry. I also took inspriation from both [Shadcn/ui](https://ui.shadcn.com) and uploadthing when designing the UI.

Major technical design decisions:
- Infra as code allows me to easily deploy my stacks across region and environment, easily improving simpletext's durability. 
- NextJS and Vercel allowed for quick testing and deployment without major hurdles.
- I separated and compartmentalized data into separate DynamoDB tables with GSI's to support complex queries and utlimately improve end-user response time. 
- Because I am providing a costly service for free, my infrastructure needed to be protected. To do this, I protected my APIGW with a WAF and Shielf. This provides advanced DDoS, XSS, CSRF, and SQLi protection, among other OWASP Top 10 threats. 

### 📈 Future Goals

- Check out the [roadmap][simpletext_roadmap] to learn about future goals for this application, including features currently being worked on and goals in the next year. 



<!-- Docs links -->

[simpletext_docs]: https://docs.simpletext.dev
[simpletext_docs_code]: https://github.com/charliemeyer2000/simpletext/tree/main/apps/docs

<!-- Author links -->

[author_url]: https://github.com/charliemeyer2000

<!-- Main Links -->
[simpletext_site]: https://simpletext.dev
[simpletext_examples]: https://github.com/charliemeyer2000/simpletext/tree/main/examples
[simpletext_client]: https://www.npmjs.com/package/@simpletext/client
[simpletext_client_code]: https://github.com/charliemeyer2000/simpletext/tree/main/packages/simpletext-client
[simpletext_roadmap]: https://docs.simpletext.dev/roadmap
