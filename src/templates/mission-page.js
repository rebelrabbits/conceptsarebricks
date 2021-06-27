import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import { Main, Section, Container } from "../styledComponents/styles";
import Seo from "../components/SEO";
import removeTrailingSlash from "../utils/removeTrailingSlash";

export const MissionPageTemplate = ({
  title,
  content,
  contentComponent,
  path,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Seo title={`${title}`} path={removeTrailingSlash(path)} />
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

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const MissionPage = ({ data, path }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MissionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        path={path}
      />
    </Layout>
  );
};

MissionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MissionPage;

export const MissionPageQuery = graphql`
  query MissionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
