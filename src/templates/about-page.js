import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import Seo from "../components/SEO";
import { Main, Section, Container } from "../styledComponents/styles";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Seo
        title='Concepts Are Bricks - About Rebel Rabbits'
        description='Rebel Rabbits is the creator, administrator, and software engineer for Concepts are Bricks.'
      />
      <Hero type='page' title={title} />
      <Main>
        <Section>
          <Container>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <PageContent className='content' content={content} />
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
