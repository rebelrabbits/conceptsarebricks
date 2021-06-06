import styled, { css } from "styled-components";

export const TwoCol = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  align-items: ${({ flex }) => flex === "start" && "flex-start"};

  p {
    margin-bottom: 2.8125em;
  }

  > * {
    width: calc(50% - 0.5em);

    &:first-child {
      margin-right: 1em;
    }
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    > * {
      width: 100%;

      &:first-child {
        margin-right: 0;
      }
    }
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: ${({ type }) => (type === "small" ? "600px" : "100%")};

  @media screen and (min-width: 992px) {
    max-width: ${({ type }) =>
      (type === "small" && "600px") ||
      (type === "blog" && "900px") ||
      "1240px"};
  }
`;

const CTASection = css`
  padding: ${({ padding }) =>
    padding === "small"
      ? "7.875em 0 7.875em 0 !important"
      : "11.875em 0 11.875em 0 !important"}
  ;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  text-align: center;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

  @media screen and (max-width: 767px) {
    padding: ${({ padding }) =>
      padding === "small"
        ? "4.875em 0 4.875em 0 !important"
        : "7.875em 0 7.875em 0 !important"}
  };

  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: transparent;
    background-image: radial-gradient(
      at center center,
      var(--green-800) 0%,
      var(--green-500) 100%
    );
    opacity: 0.6;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    z-index: 1;
  }

  > * {
    color: #fff;
    position: relative;
    z-index: 2;
  }

  h2 {
    color: #fff;
    font-weight: 600;
  }

  p {
    margin: 2.8125em 0;
  }
`;

export const Section = styled.section`
  padding: 6.25em 0;
  position: relative;
  background-image: ${({ url }) => url && `url('${url}')`};
  @media screen and (max-width: 767px) {
    padding: 4em 0;
  }
  ${({ type }) => type === "CTA" && CTASection}
  ${({ fade }) =>
    fade &&
    css`
      background-color: transparent;
      background-image: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(26, 108, 122, 0.08) 100%
      );
    `}
`;

export const ViewAll = styled.div`
  margin: 1em 0 2em;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  > *:not(:last-child) {
    margin-right: 1em;
    margin-bottom: 1em;
  }

  @media (max-width: 767px) {
    > *:not(:last-child) {
      margin-right: 0.5em;
      margin-bottom: 0.5em;
    }
  }
`;

export const SectionHeading = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Main = styled.main`
  ${Section} + ${Section} {
    padding-top: 0;
  }
`;

export const ArticleImg = styled.div`
  img {
    box-shadow: 3px 3px 10px var(--gray-300);
  }
  @media screen and (min-width: 768px) {
    margin: 3em auto;
    width: 70%;
  }
`;

export const Tag = styled.div`
  display: inline-block;
  font-size: 0.79em;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0 1em 1em 0;

  a {
    background: #fff;
    border: 2px solid var(--green-300);
    border-radius: 0.3em;
    color: var(--green-300);
    padding: 0.25em 0.5em;
    text-decoration: none;
    transition: all 0.3s linear;

    &:hover {
      background: var(--green-300);
      color: #fff;
    }
  }
`;
