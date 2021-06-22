import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const fetchMetaData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
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
  path = null,
}) => {
  const { site } = useStaticQuery(fetchMetaData);
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;
  const imageURL = `${siteUrl}${featuredImage ? featuredImage : image}`;
  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const seoDescription = description ? description : siteDesc;
  const url = path
    ? `https://www.conceptsarebricks.com${path}`
    : "https://www.conceptsarebricks.com";

  return (
    <Helmet title={seoTitle} htmlAttributes={{ lang: "en" }}>
      <meta name='description' content={seoDescription} />
      {/* OG */}
      <meta property='og:title' content={seoTitle} />
      <meta property='og:description' content={seoDescription} />
      <meta property='og:type' content='article' />
      <meta property='og:url' content={url} />
      <meta name='image' property='og:image' content={imageURL} />
      <meta property='og:image:secure_url' content={imageURL} />
      <meta property='og:image:width' content='1144' />
      <meta property='og:image:height' content='766' />
      <meta name='author' content={author || "Rebel Rabbits"}></meta>
      {/* Twitter Card */}
      <meta
        name='twitter:card'
        content={isFullImage ? "summary_large_image" : "summary"}
      />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:title' content={seoTitle} />
      <meta name='twitter:description' content={seoDescription} />
      <meta name='twitter:image' content={imageURL} />
      <link rel='canonical' href={url}></link>
    </Helmet>
  );
};

export default Seo;
