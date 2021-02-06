import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import { Main, Section, Container } from "../components/styles";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Hero type="page" title={title} />
      <Main>
        <Section>
          <Container>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Main>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
