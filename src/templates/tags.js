import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { kebabCase, uniq, get } from "lodash";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SelectFilter from "../components/Filters/Select";
import Filters from "../components/Filters";
import { Section, Container, Main, Tag } from "../styledComponents/styles";

const TagRoute = (props) => {
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(
    props.data.allMarkdownRemark.edges,
  );

  const posts = props.data.allMarkdownRemark.edges;
  const tag = props.pageContext.tag;
  const title = props.data.site.siteMetadata.title;
  const totalCount = props.data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;

  const uniqueKeys = uniq(
    posts.map(({ node }) => node.frontmatter.templateKey),
  );

  const handleChange = (values) => {
    setFilters(values);
  };

  const postLinks = filteredData.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className='is-size-2'>
          <Tag>{post.node.frontmatter.title}</Tag>
        </h2>
      </Link>
    </li>
  ));

  useEffect(() => {
    let filteredLinks = [...props.data.allMarkdownRemark.edges];
    console.log("filteredLinks", filteredLinks);

    if (filters && filters.length > 0) {
      filteredLinks = filteredLinks.filter(({ node }) =>
        filters.includes(node.frontmatter.templateKey),
      );
    }

    setFilteredData(filteredLinks);
  }, [filters]);

  return (
    <>
      <Helmet title={`${tag} | ${title}`} />
      <Layout>
        <Hero type='page' title='Tags' />
        <Main>
          <Section>
            <Container>
              <h3 className='title is-size-4 is-bold-light'>{tagHeader}</h3>
              <Filters>
                <SelectFilter
                  data={uniqueKeys}
                  callback={handleChange}
                  filterName=''
                  dataIsInitial={true}
                  placeholder='Filter by content type (ex: blogs)'
                />
              </Filters>
              <ul className='taglist'>{postLinks}</ul>
              <p>
                <Link to='/tags/'>Browse all tags</Link>
              </p>
            </Container>
          </Section>
        </Main>
      </Layout>
    </>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`;
