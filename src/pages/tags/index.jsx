/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { kebabCase, uniq, get } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { Main, Section, Container, Tag } from "../../components/styles";
import SelectFilter from "../../components/Filters/Select";
import Filters from "../../components/Filters";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(group);

  const uniqueKeys = uniq(
    group.reduce((acc, curr) => {
      const keys = curr.nodes.map((node) => node.frontmatter.templateKey);
      return [...acc, ...keys];
    }, []),
  );

  console.log("uniqueKeys", uniqueKeys);

  const handleChange = (name) => (values) => {
    console.log("handleChange values", values);
    setFilters(values);
  };

  useEffect(() => {
    // let filteredList = get(data, "allMarkdownRemark.edges", []);
    let filteredGroups = [...group];
    console.log("filteredGroups", filteredGroups);

    if (filters && filters.length > 0) {
      filteredGroups = filteredGroups.filter((tag) => {
        console.log("tag", tag);
        return tag.nodes.some((node) => {
          const templateKey = get(node, "frontmatter.templateKey", null);
          return filters.includes(templateKey);
        });
      });
    }

    setFilteredData(filteredGroups);
  }, [filters]);

  return (
    <>
      <Helmet title={`Tags | ${title}`} />
      <Layout>
        <Hero type='page' title='Tags' />
        <Main>
          <Section>
            <Container>
              <div className='columns'>
                <div
                  className='column is-10 is-offset-1'
                  style={{ marginBottom: "6rem" }}
                >
                  <h1 className='title is-size-2 is-bold-light'>Tags</h1>
                  <Filters>
                    <SelectFilter
                      data={uniqueKeys}
                      callback={handleChange}
                      filterName=''
                      dataIsInitial={true}
                      placeholder='Filter by content type (ex: blogs)'
                    />
                  </Filters>
                  <ul className='taglist'>
                    {filteredData.map((tag) => (
                      <li key={tag.fieldValue}>
                        <Tag>
                          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount}){" "}
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
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        nodes {
          frontmatter {
            templateKey
          }
        }
      }
    }
  }
`;
