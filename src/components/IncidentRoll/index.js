import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";
import { ViewAll } from "../../styledComponents/styles";
import Button from "../Button";
import CardRoll from "../CardRoll";
import DateFilter from "../Filters/Date";
import Filters from "../Filters";
import SelectFilter from "../Filters/Select";

const IncidentRollFetcher = ({ hasFilters = false, truncated = false }) => {
  const data = useStaticQuery(graphql`
    query IncidentRollAllQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "incident" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              author
              profile
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
  `);
  const getInitial = () => get(data, "allMarkdownRemark.edges", []);
  const [filteredData, setFilteredData] = useState(getInitial());
  const [filters, setFilters] = useState({
    profile: [],
    tags: [],
  });

  const handleChange = (name) => (values) => {
    setFilters({
      ...filters,
      [name]: values,
    });
  };

  useEffect(() => {
    let filteredList = get(data, "allMarkdownRemark.edges", []);

    if (filters.title && filters.title.length > 0) {
      filteredList = filteredList.filter((post) =>
        filters.title.includes(get(post, "node.frontmatter.title")),
      );
    }

    if (filters.profile && filters.profile.length > 0) {
      filteredList = filteredList.filter((post) =>
        filters.profile.includes(get(post, "node.frontmatter.profile")),
      );
    }

    if (filters.tags && filters.tags.length > 0) {
      filteredList = filteredList.filter((post) => {
        const postTags = get(post, "node.frontmatter.tags", []);
        return postTags.some((tag) => filters.tags.includes(tag));
      });
    }

    if (filters.date) {
      filteredList = filteredList.filter((post) => {
        const filterDate = new Date(filters.date);
        const filterMonth = filterDate.getMonth();
        const filterYear = filterDate.getFullYear();
        const date = get(post, "node.frontmatter.date", null);
        if (!date) {
          return false;
        }
        const postDate = new Date(date);
        const postDateMonth = postDate.getMonth();
        const postDateYear = postDate.getFullYear();

        return filterMonth === postDateMonth && filterYear === postDateYear;
      });
    }

    setFilteredData(filteredList);
  }, [data, filters]);

  return (
    <>
      {hasFilters && (
        <Filters>
          <SelectFilter
            data={getInitial()}
            callback={handleChange}
            filterName='title'
            placeholder='Search by title'
          />
          <SelectFilter
            data={getInitial()}
            callback={handleChange}
            filterName='profile'
            placeholder='Choose by profile'
          />
          <SelectFilter
            data={getInitial()}
            callback={handleChange}
            filterName='tags'
            placeholder='Choose by tag'
          />
          <DateFilter callback={handleChange} filterName='date' />
        </Filters>
      )}
      <CardRoll data={truncated ? filteredData.slice(0, 3) : filteredData} />
      {truncated && (
        <>
          <ViewAll>
            <Link to='/incident'>
              <Button variant='transparentP'>View All</Button>
            </Link>
          </ViewAll>
        </>
      )}
    </>
  );
};
export default IncidentRollFetcher;
