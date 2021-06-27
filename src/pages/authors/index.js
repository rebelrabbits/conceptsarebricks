import React from "react";
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { Main, Section, Container, Tag } from "../../styledComponents/styles";
import Seo from "../../components/SEO";

const AuthorsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  path,
}) => (
  <>
    <Seo title={`Authors | ${title}`} path={path} />
    <Layout>
      <Hero type='page' title='Authors' />
      <Main>
        <Section>
          <Container>
            <div className='columns'>
              <div
                className='column is-10 is-offset-1'
                style={{ marginBottom: "6rem" }}
              >
                <h1 className='title is-size-2 is-bold-light'>Authors</h1>
                <ul className='taglist'>
                  {group.map((author) => (
                    <li key={author.fieldValue}>
                      <Tag>
                        <Link to={`/authors/${kebabCase(author.fieldValue)}/`}>
                          {author.fieldValue} ({author.totalCount}){" "}
                        </Link>
                      </Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </Main>
    </Layout>
  </>
);

export default AuthorsPage;

export const tagPageQuery = graphql`
  query AuthorsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___author) {
        fieldValue
        totalCount
      }
    }
  }
`;
