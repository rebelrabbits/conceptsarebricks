import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";

const PreviewCompatibleImage = ({ imageInfo, objectFit = "cover" }) => {
  const { alt = "", childImageSharp, image } = imageInfo;
  const imageStyle = {
    borderRadius: "0px",
    objectFit: objectFit,
    objectPosition: "0% 0%",
  };

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={{
          ...image.childImageSharp.fluid,
          aspectRatio: 16 / 9,
        }}
        objectFit={objectFit}
        objectPosition='0% 0%'
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        objectFit={objectFit}
        objectPosition='0% 0%'
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  objectFit: PropTypes.oneOf(["cover", "contain"]),
};

export default PreviewCompatibleImage;
