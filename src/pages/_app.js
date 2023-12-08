import { DefaultSeo } from "next-seo";
import "@/styles/globals.css";
import "../styles/scss/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Halla Hamidi - Front-End Web Developer"
        description="Portfolio of Halla Hamidi, a proficient front-end web developer specializing in JavaScript, Tailwind, Next.js, CSS, HTML, SEO and Firebase. Explore my projects and get in touch for collaboration."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "JavaScript, Halla Hamidi, React, Tailwind, Front-End Web Developer, Next.js, CSS, HTML, Firebase, SEO, Portfolio",
          },
          {
            name: "author",
            content: "Halla Hamidi",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://halla-hamidi.vercel.app/",
          site_name: "halla-hamidi",
          title: "Halla Hamidi - Front-End Web Developer",
          description:
            "Portfolio of Halla Hamidi, a proficient front-end web developer specializing in JavaScript, Tailwind, Next.js, CSS, SEO, HTML, and Firebase. Explore my projects and get in touch for collaboration.",
          images: [
            {
              url: "/butterfly.png",
              width: 800,
              height: 600,
              alt: "Halla",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
