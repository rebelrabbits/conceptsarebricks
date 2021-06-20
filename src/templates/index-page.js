import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll/index.jsx";
import IncidentRollFetcher from "../components/IncidentRoll";
import Hero from "../components/Hero";
import {
  Main,
  Container,
  TwoCol,
  Section,
  SectionHeading,
  ButtonGroup,
} from "../styledComponents/styles";
import Button from "../components/Button";
import Seo from "../components/SEO";

export const IndexPageTemplate = () => (
  <>
    <Seo />
    <div>
      <Hero type='home' />
      <Main type='primary'>
        <Section>
          <Container>
            <TwoCol flex='start'>
              <div>
                <h2>welcome to the platform</h2>
              </div>
              <div>
                <p>
                  Concepts are Bricks documents instances of bigotry and
                  authoritarian entryism in libertarian spaces by creating pages
                  of profiles and incidents. Profiles are individuals or
                  organizations that have their own bio page. Incidents are
                  specific events that contain problematic or even dangerous
                  behavior and are tied to a profile.
                </p>
                <p>
                  For more information about the creator and admin of this
                  platform as well as the mission statement and goals, please
                  view the following links.
                </p>
                <ButtonGroup>
                  <Link to='/about'>
                    <Button variant='transparentP'>About Rebel Rabbits</Button>
                  </Link>
                  <Link to='/mission'>
                    <Button variant='primary'>Mission Statement</Button>
                  </Link>
                </ButtonGroup>
              </div>
            </TwoCol>
          </Container>
        </Section>
        <Section type='primary'>
          <Container>
            <SectionHeading>Latest Events</SectionHeading>
            <IncidentRollFetcher truncated={true} />
          </Container>
        </Section>
        <Section type='primary' fade={true}>
          <Container>
            <SectionHeading>Latest Posts</SectionHeading>
            <BlogRoll truncated={true} />
          </Container>
        </Section>
        <Section
          type='CTA'
          url='https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/fogs-on-green-mountain-1054222.jpg'
        >
          <Container type='small'>
            <h2>Get in Touch</h2>
            <p>
              If you have any ideas, questions, or concerns regarding the
              platform or its admin, Rebel Rabbits, please do not hesitate to
              get in touch.
            </p>
            <Link to='/contact'>
              <Button variant='transparentW'>Contact Me</Button>
            </Link>
          </Container>
        </Section>
      </Main>
    </div>
  </>
);

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// };

const IndexPage = () => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
