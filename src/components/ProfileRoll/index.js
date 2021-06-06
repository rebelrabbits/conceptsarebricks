import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { get } from "lodash";
import { ViewAll } from "../../styledComponents/styles";
import Button from "../Button";
import CardRoll from "../CardRoll";
import DateFilter from "../Filters/Date";
import Filters from "../Filters";
import SelectFilter from "../Filters/Select";

const ProfileRoll = ({ hasFilters = false, truncated = false }) => {
  const data = useStaticQuery(graphql`
    query ProfileRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "profile" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              subheading
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
  `);
  const getInitial = () => get(data, "allMarkdownRemark.edges", []);
  const [filteredData, setFilteredData] = useState(getInitial());
  const [filters, setFilters] = useState({
    author: [],
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

    setFilteredData(filteredList);
  }, [filters]);

  return (
    <>
      {hasFilters && (
        <Filters>
          <SelectFilter
            data={getInitial()}
            callback={handleChange}
            filterName='title'
            placeholder='Search by name'
          />
        </Filters>
      )}
      <CardRoll data={truncated ? filteredData.slice(0, 3) : filteredData} />
      {truncated && (
        <>
          <ViewAll>
            <Link to='/profile'>
              <Button variant='transparentP'>View All</Button>
            </Link>
          </ViewAll>
        </>
      )}
    </>
  );
};

export default ProfileRoll;
