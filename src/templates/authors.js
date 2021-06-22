import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CardRoll from "../components/CardRoll";
import Seo from "../components/SEO";
import { Section, Container, Main } from "../styledComponents/styles";

class AuthorRoute extends React.Component {
  render() {
    const author = this.props.pageContext.author;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } authored by “${author}”`;

    return (
      <>
        <Seo title={`${author} | ${title}`} />
        <Layout>
          <Hero type='author' title={author} />
          <Main>
            <Section>
              <Container>
                <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
                {/* <ul className="taglist">{postLinks}</ul> */}
                <CardRoll
                  data={this.props.data.allMarkdownRemark.edges}
                  count={totalCount}
                />
                <p>
                  <Link to='/authors/'>Browse posts by all Authors</Link>
                </p>
              </Container>
            </Section>
          </Main>
        </Layout>
      </>
    );
  }
}

export default AuthorRoute;

export const authorPageQuery = graphql`
  query AuthorPage($author: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            templateKey
            description
            tags
            date(formatString: "MMMM DD, YYYY")
            featuredpost
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
  }
`;
