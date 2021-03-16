import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Container, Section, Tag, Main } from "../components/styles";
import Content, { HTMLContent } from "../components/Content";

import Hero from "../components/Hero";
import Seo from "../components/SEO";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  Author,
  AuthorName,
  AuthorSubHeading,
  ByLine,
  Event,
  Grid,
  ImgWrapper,
  Overview,
  Tags,
  Title,
} from "../templateStyles/event";

export const EventPageTemplate = ({
  image,
  title,
  profile,
  content,
  contentComponent,
  tags,
  subheading,
}) => {
  const PostContent = contentComponent || Content;
  const tagsAsString = tags
    ? tags.reduce((acc, cur) => `${acc}, ${cur}`, "")
    : "";
  const metaDescription = subheading
    ? `${subheading - tagsAsString}`
    : tagsAsString;
  return (
    <>
      <Seo
        title={`Concepts Are Bricks - Incident - ${title}`}
        description={metaDescription}
      />
      <Hero type='page' title={title} infoIcon={true} />
      <Main>
        <Section>
          <Container>
            <Grid>
              <Event>
                <Title>{title}</Title>
                {subheading && <ByLine>{subheading}</ByLine>}
                <ImgWrapper>
                  {image ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: image,
                        alt: title,
                        aspectRatio: 21 / 9,
                      }}
                      objectFit='contain'
                    />
                  ) : null}
                </ImgWrapper>
                <Tags>
                  {tags && (
                    <ul>
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Tag>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </Tags>
                <Overview>
                  <PostContent content={content} />
                </Overview>
              </Event>
              <Author>
                <h2>Author</h2>
                <div>
                  {profile.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: profile.frontmatter.featuredimage,
                        alt: profile.frontmatter.title,
                        aspectRatio: 21 / 9,
                      }}
                    />
                  ) : null}
                </div>

                {profile.fields.slug ? (
                  <AuthorName>
                    <Link to={profile.fields.slug}>
                      {profile.frontmatter.title}
                    </Link>
                  </AuthorName>
                ) : (
                  <AuthorName>{profile.frontmatter.title}</AuthorName>
                )}
                {profile.frontmatter.subheading && (
                  <AuthorSubHeading>
                    {profile.frontmatter.subheading}
                  </AuthorSubHeading>
                )}
                {profile.fields.slug && (
                  <Link to={profile.fields.slug}>
                    Back to Entiry profile page.
                  </Link>
                )}
              </Author>
            </Grid>
          </Container>
        </Section>
      </Main>
    </>
  );
};

EventPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const EventPage = ({ data }) => {
  const { frontmatter, html } = data.eventData;
  const { profile } = data;

  return (
    <Layout>
      <EventPageTemplate
        image={frontmatter.featuredimage}
        title={frontmatter.title}
        profile={profile}
        tags={frontmatter.tags}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventPage;

export const EventPageQuery = graphql`
  query EventPage($id: String!, $profile: String!) {
    eventData: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        profile
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    profile: markdownRemark(frontmatter: { title: { eq: $profile } }) {
      fields {
        slug
      }
      frontmatter {
        title
        subheading
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
