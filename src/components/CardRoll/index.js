import React, { useState } from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
// import Button from "../Button";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Wrapper, Article, Body, Header } from "./styles";
import { Tag } from "../../styledComponents/styles";
import { ViewAll } from "../../styledComponents/styles";
import Button from "../Button";
import removeTrailingSlash from "../../utils/removeTrailingSlash";

const CardRoll = ({ data, truncated = false }) => {
  const [isTruncated, setisTruncated] = useState(truncated);
  const posts = isTruncated ? data.slice(0, 3) : data;
  const handleClick = () => {
    setisTruncated(false);
  };

  return (
    <>
      <Wrapper>
        {posts &&
          posts.map(({ node: post }) => (
            <Article
              key={post.id}
              // className={post.frontmatter.featuredevent ? "is-featured" : ""}
            >
              {post.frontmatter.featuredimage ? (
                <Link to={removeTrailingSlash(post.fields.slug)}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for event ${post.frontmatter.title}`,
                      aspectRatio: 21 / 9,
                    }}
                  />
                </Link>
              ) : null}
              <Body>
                <Header>
                  <h2>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </h2>
                  {post.frontmatter.author && (
                    <p>
                      By:{" "}
                      <i>
                        <Link
                          to={`/authors/${kebabCase(post.frontmatter.author)}/`}
                        >
                          {post.frontmatter.author}
                        </Link>
                      </i>
                    </p>
                  )}
                  {post.frontmatter.date && <p>{post.frontmatter.date}</p>}
                </Header>
                <div>
                  {post.frontmatter.subheading && (
                    <p>{post.frontmatter.subheading}</p>
                  )}
                  <div>
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag) => {
                        if (tag && typeof tag === "string")
                          return (
                            <Tag key={tag}>
                              <Link key={tag} to={`/tags/${kebabCase(tag)}/`}>
                                {tag}
                              </Link>
                            </Tag>
                          );
                        return null;
                      })}
                  </div>
                </div>
              </Body>
            </Article>
          ))}
      </Wrapper>
      {isTruncated && (
        <ViewAll>
          <Button variant='transparentP' onClick={handleClick}>
            View All
          </Button>
        </ViewAll>
      )}
    </>
  );
};

CardRoll.propTypes = {
  data: PropTypes.array,
  truncated: PropTypes.bool,
};

export default CardRoll;
