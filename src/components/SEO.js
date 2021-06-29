import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
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
  // const imageURL = `${siteUrl}${featuredImage ? featuredImage : defaultImage}`;
  // const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  // const seoDescription = description ? description : defaultDescription;
  // const url = `${siteUrl}${pathname}`;
  // console.log("URL passed: ", url);

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
