import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  Main,
  Section,
  Container,
  TwoCol,
  ArticleImg,
  SectionHeading,
} from "../components/styles";
import Button from "../components/Button";
import LoginWithGitHub from "../assets/img/contribute/LoginWithGithub.png";
import ForkTheRepo from "../assets/img/contribute/ForkRepoStep.png";
import AuthorizeNetlify from "../assets/img/contribute/AuthorizeNetlify.png";
import PlatformBackend from "../assets/img/contribute/PlatformBackend.png";
import SavingInReview from "../assets/img/contribute/SavingInReview.png";

export const ContributeTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Hero type="page" title={title} />
      <Main>
        <Section>
          <Container>
            <TwoCol flex="start">
              <div>
                <h2>we welcome your help!</h2>
              </div>
              <div>
                <p>
                  Individuals and organizations should be held accountable for
                  their actions. If you are witness to behavior that harms the
                  integrity of a libertarian - and human decency more largely -
                  we welcome you to use this platform to report said behavior.
                </p>
                <p>
                  Please follow the instructions below for how to contribute
                  towards this project. If you have questions for the admin of
                  this platform, please submit a request&nbsp;
                  <Link to="/contact">here</Link>. If you would like to have a
                  better understanding for the goals and mission statement of
                  this platform, please see our <Link to="/about">About</Link>
                  &nbsp; page.
                </p>
              </div>
            </TwoCol>
            {/* <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div> */}
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading>How to Contribute to the Platform</SectionHeading>
            <p>
              Towards the goal of accountability and full transparency, anyone -
              that means <b>anyone</b> - can log into the admin of this panel
              and submit requests to add a new profile or new incident. Please
              follow the below instructions.
            </p>
            <ul className="styled">
              <li>
                <div>
                  <p>
                    Please visit&nbsp;
                    <a
                      href="www.github.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      github.com
                    </a>
                    &nbsp; and sign up for a free account
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    Once you have a free account, please visit the&nbsp;
                    <a href="/admin" rel="noopener noreferrer" target="_blank">
                      admin panel
                    </a>
                    &nbsp; of this platform.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    Log into the admin panel by clicking the&nbsp;
                    <b>Login with GitHub</b> button.
                  </p>
                  <ArticleImg>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: LoginWithGitHub,
                        alt: "Login With GitHub",
                        aspectRatio: 21 / 9,
                      }}
                    />
                  </ArticleImg>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    Select <b>Authorize netlify</b> to authorize the platform's
                    Content Management System (Netlify CMS) to access your
                    GitHub Account. This allows the platform to accept an
                    incoming change request.
                  </p>
                  <ArticleImg>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: AuthorizeNetlify,
                        alt: "Authorize Netlify",
                        aspectRatio: 21 / 9,
                      }}
                    />
                  </ArticleImg>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    Once you have logged in to the platform, you must select
                    the&nbsp;
                    <b>Fork the repo</b> button if this is your first time
                    contributing to the platform. All future contributions can
                    be made by selecting the <b>Don't fork the repo</b> button.
                  </p>
                  <ArticleImg>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: ForkTheRepo,
                        alt: "Fork the repo option",
                        aspectRatio: 21 / 9,
                      }}
                    />
                  </ArticleImg>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <b>Way to go!</b> You are now logged in. Please use the{" "}
                    <b>Quick Add</b> button in the top right corner to add a new
                    Profile (a person or organization) or a new Incident (for a
                    profile already on the site).
                  </p>
                  <ArticleImg>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: PlatformBackend,
                        alt: "backend",
                        aspectRatio: 21 / 9,
                      }}
                    />
                  </ArticleImg>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <b>FINAL IMPORTANT NOTE!</b> To successfully submit a
                    request, you must first <b>Save</b> and then{" "}
                    <b>Set Status</b> to <b>In review</b>. Do not save to{" "}
                    <b>In review</b> until completely ready. Saving to{" "}
                    <b>Draft</b> after a proposed change was previously saved to{" "}
                    <b>In review</b> will cancel the <i>"pull request"</i>,
                    which is how the platform content management system monitors
                    changes requests.
                  </p>
                  <p>
                    To repeat: only save to <b>In review</b> when absolutely
                    ready. Afterwards, to not save to <b>Draft</b>.
                  </p>
                  <ArticleImg>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: SavingInReview,
                        alt: "saving in review",
                        aspectRatio: 21 / 9,
                      }}
                    />
                  </ArticleImg>
                </div>
              </li>
            </ul>
          </Container>
        </Section>
        <Section
          type="CTA"
          padding="small"
          url="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/fogs-on-green-mountain-1054222.jpg"
        >
          <Container type="small">
            <h2>Questions or Concerns</h2>
            <p>
              If you have any questions or concerns about the above instructions
              or regarding the platform more generally, please do not hesitate
              to contact the admin of this platform.
            </p>
            <Link to="/contact">
              <Button variant="transparentW">Contact Me</Button>
            </Link>
          </Container>
        </Section>
      </Main>
    </>
  );
};

ContributeTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Contribute = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContributeTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Contribute.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contribute;

export const ContributeQuery = graphql`
  query Contribute($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
