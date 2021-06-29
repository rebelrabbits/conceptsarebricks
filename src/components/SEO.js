import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";
import { useLocation } from "@reach/router";

const fetchMetaData = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

const Seo = ({
  title = null,
  description = null,
  featuredImage = null,
  author = null,
  isFullImage = true,
}) => {
  const { site } = useStaticQuery(fetchMetaData);
  const { pathname } = useLocation();

  console.log("pathname", pathname);

  const {
    defaultDescription,
    defaultTitle,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${featuredImage || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  console.log("seo: ", seo);

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      <meta property='og:type' content='article' />
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      {seo.image && <meta property='og:image' content={seo.image} />}
      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
      {seo.image && <meta name='twitter:image' content={seo.image} />}

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={`${withPrefix("/")}img/apple-touch-icon.png`}
      />
      <link
        rel='icon'
        type='image/png'
        href={`${withPrefix("/")}img/favicon-32x32.png`}
        sizes='32x32'
      />
      <link
        rel='icon'
        type='image/png'
        href={`${withPrefix("/")}img/favicon-16x16.png`}
        sizes='16x16'
      />

      <link
        rel='mask-icon'
        href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
        color='#ff4400'
      />
      <meta name='theme-color' content='#fff' />
      {/* <meta name='description' content={seoDescription} />

<meta property='og:title' content={seoTitle} />
      <meta property='og:description' content={seoDescription} />
      <meta property='og:type' content='article' />
      <meta property='og:url' content={url} />
      <meta name='image' property='og:image' content={imageURL} />
      <meta property='og:image:secure_url' content={imageURL} />
      <meta property='og:image:width' content='1144' />
      <meta property='og:image:height' content='766' />
      <meta name='author' content={author || "Rebel Rabbits"}></meta>

<meta
        name='twitter:card'
        content={isFullImage ? "summary_large_image" : "summary"}
      />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:title' content={seoTitle} />
      <meta name='twitter:description' content={seoDescription} />
      <meta name='twitter:image' content={imageURL} />
      <link rel='canonical' href={url}></link> */}
    </Helmet>
  );
};

export default Seo;
