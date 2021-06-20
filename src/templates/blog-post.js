import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Main, Section, Container, Tag } from "../styledComponents/styles";
import Seo from "../components/SEO";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  author,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <Seo title={title} description={description} author={author} />
      <Hero type='blog' title={title} />
      <Main>
        <Section>
          <Container type='blog'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                {image && (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: `featured image thumbnail for post ${title}`,
                      aspectRatio: 21 / 7,
                    }}
                  />
                )}
                {description && <blockquote>{description}</blockquote>}
                <PostContent content={content} />
                <div>
                  <b>Author:</b>{" "}
                  <i>
                    <Link to={`/authors/${kebabCase(author)}/`}>{author}</Link>
                  </i>
                </div>
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4>Tags</h4>
                    <ul className='taglist'>
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Tag>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </Section>
      </Main>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
