import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { get, kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import {
  Main,
  Container,
  Section,
  SectionHeading,
  Tag,
} from "../styledComponents/styles";
import CardRoll from "../components/CardRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  Grid,
  ImgWrapper,
  Social,
  Tags,
  Overview,
  ByLine,
} from "../templateStyles/entity";
import Seo from "../components/SEO";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const EntityPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  subheading,
  audience,
  data,
  path,
}) => {
  const PostContent = contentComponent || Content;
  const topThreeTags = () => {
    const tags = {};
    data.forEach(({ node }) => {
      const postTags = get(node, `frontmatter.tags`, []);
      postTags.forEach((tag) => {
        if (tags[tag]) {
          let currentCount = tags[tag];
          tags[tag] = currentCount + 1;
        } else {
          tags[tag] = 1;
        }
      });
    });
    return Object.entries(tags)
      .sort((a, b) => b[1] - a[1])
      .map((tag) => tag[0])
      .slice(0, 3);
  };

  const threeTagsHelment = topThreeTags().reduce(
    (acc, cur) => `${acc} ${cur}`,
    "",
  );

  const metaDescription = subheading
    ? `${subheading} - ${threeTagsHelment}`
    : threeTagsHelment;

  const renderTags = () => {
    const tagArr = topThreeTags();
    if (!tagArr || tagArr.length === 0) {
      return null;
    }
    return (
      <Tags>
        <h3>Common Tags:</h3>
        <ul>
          {tagArr.map((item) => (
            <li key={item}>
              <Tag>
                <Link to={`/tags/${kebabCase(item)}/`}>{item}</Link>
              </Tag>
            </li>
          ))}
        </ul>
      </Tags>
    );
  };
  return (
    <>
      {/* <Helmet titleTemplate=''>
        <title>{`Concepts Are Bricks ${title} ${threeTagsHelment()}`}</title>
        <meta
          name='description'
          content={`Concepts Are Bricks ${title} ${threeTagsHelment()}`}
        />
      </Helmet> */}
      <Seo
        title={`${title} Profile`}
        description={metaDescription}
        featuredImage={image?.childImageSharp?.fluid?.src}
        isFullImage={false}
        path={path}
      />
      <Hero type='entity' title={title} infoIcon={true} />
      <Main>
        <Section type='primary'>
          <Container>
            <Grid>
              <div>
                <ImgWrapper>
                  {image && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: image,
                        alt: `featured image thumbnail for post ${title}`,
                        aspectRatio: 21 / 9,
                      }}
                    />
                  )}
                </ImgWrapper>
                {audience && (
                  <Social>
                    <h3>Audience</h3>
                    <ul>
                      {audience.twitter && (
                        <li>
                          <b>Twitter:&nbsp;</b>
                          <p>
                            <span>{audience.twitter} followers</span>
                          </p>
                        </li>
                      )}
                      {audience.facebook && (
                        <li>
                          <b>Facebook:&nbsp;</b>
                          <p>
                            <span>{audience.facebook} followers</span>
                          </p>
                        </li>
                      )}
                      {audience.youtube && (
                        <li>
                          <b>YouTube:&nbsp;</b>
                          <p>
                            <span>{audience.youtube} subscribers</span>
                          </p>
                        </li>
                      )}
                    </ul>
                  </Social>
                )}
                {renderTags()}
              </div>
              <div>
                {subheading && (
                  <ByLine>
                    <h2>Description</h2>
                    <p>{subheading}</p>
                  </ByLine>
                )}

                <Overview>
                  <PostContent content={content} />
                </Overview>
              </div>
            </Grid>
          </Container>
        </Section>
        <Section type='primary'>
          <Container>
            <SectionHeading>Latest Events</SectionHeading>
            <CardRoll data={data} truncated={true} />
          </Container>
        </Section>
      </Main>
    </>
  );
};

EntityPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const EntityPage = ({ data, path }) => {
  const { profile, events } = data;
  const [entity] = profile.edges;
  const { frontmatter, html } = entity.node;
  const { edges: incidents } = events;

  return (
    <Layout>
      <EntityPageTemplate
        image={frontmatter.featuredimage}
        content={html}
        contentComponent={HTMLContent}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        audience={frontmatter.audience}
        data={incidents}
        path={path}
      />
    </Layout>
  );
};

EntityPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EntityPage;

export const EntityPageQuery = graphql`
  query EntityPage($title: String!) {
    profile: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: $title } } }
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            subheading
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            audience {
              facebook
              twitter
              youtube
            }
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    events: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { profile: { eq: $title } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            profile
            subheading
            tags
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
