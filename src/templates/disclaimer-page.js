import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import { Main, Section, Container } from "../components/styles";

export const DislaimerPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Hero type='page' title={title} />
      <Main>
        <Section>
          <Container>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  {/* <PageContent className="content" content={content} /> */}
                  <div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n  [data-custom-class='body'], [data-custom-class='body'] * {\n          background: transparent !important;\n        }\n[data-custom-class='title'], [data-custom-class='title'] * {\n          font-family: Arial !important;\nfont-size: 26px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {\n          font-family: Arial !important;\ncolor: #595959 !important;\nfont-size: 14px !important;\n        }\n[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {\n          font-family: Arial !important;\nfont-size: 19px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {\n          font-family: Arial !important;\nfont-size: 17px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='body_text'], [data-custom-class='body_text'] * {\n          color: #595959 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\n        }\n[data-custom-class='link'], [data-custom-class='link'] * {\n          color: #3030F1 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\nword-break: break-word !important;\n        }\n",
                      }}
                    />
                    <div data-custom-class='body'>
                      <div>
                        <div
                          align='center'
                          className='MsoNormal'
                          data-custom-class='title'
                          style={{ textAlign: "left", lineHeight: "1.5" }}
                        >
                          <a name='_4r5vko5di6yg' />
                          <strong>
                            <span
                              style={{ lineHeight: "150%", fontSize: "26px" }}
                            >
                              DISCLAIMER
                            </span>
                          </strong>
                        </div>
                        <div
                          align='center'
                          className='MsoNormal'
                          style={{ textAlign: "center", lineHeight: "150%" }}
                        >
                          <a name='_l2jmcqu2bv4x' />
                        </div>
                        <div
                          align='center'
                          className='MsoNormal'
                          data-custom-class='subtitle'
                          style={{ textAlign: "left", lineHeight: "150%" }}
                        >
                          <br />
                        </div>
                        <div
                          align='center'
                          className='MsoNormal'
                          data-custom-class='subtitle'
                          style={{ textAlign: "left", lineHeight: "150%" }}
                        >
                          <span
                            style={{
                              color: "rgb(127,127,127)",
                              fontSize: "15px",
                              textAlign: "justify",
                            }}
                          >
                            <strong>Last updated&nbsp;</strong>
                            <bdt
                              className='block-container question question-in-editor'
                              data-id='f06b270d-4b70-bc53-bef4-2d8996dff70b'
                              data-type='question'
                            >
                              <strong>February 01, 2021</strong>
                            </bdt>
                          </span>
                        </div>
                        <div
                          className='MsoNormal'
                          style={{ textAlign: "justify", lineHeight: "1.5" }}
                        >
                          <br />
                        </div>
                        <div
                          className='MsoNormal'
                          style={{ textAlign: "justify", lineHeight: "1.5" }}
                        >
                          <br />
                        </div>
                        <div
                          className='MsoNormal'
                          data-custom-class='heading_1'
                        >
                          <a name='_xs0r05tcjblb' />
                          <strong>
                            <span
                              style={{ lineHeight: "115%", fontSize: "19px" }}
                            >
                              WEBSITE DISCLAIMER
                            </span>
                          </strong>
                        </div>
                      </div>
                      <div style={{ lineHeight: "1.2" }}>
                        <br />
                      </div>
                      <div>
                        <div
                          className='MsoNormal'
                          data-custom-class='body_text'
                          style={{ lineHeight: "1.5" }}
                        >
                          <span
                            style={{
                              color: "rgb(89, 89, 89)",
                              fontSize: "15px",
                            }}
                          >
                            The information provided by{" "}
                            <bdt
                              className='block-container question question-in-editor'
                              data-id='1e91c6ac-db3b-ab40-09dc-333e7d471e6c'
                              data-type='question'
                            >
                              Concepts Are Bricks
                            </bdt>{" "}
                            (“we,” “us” or “our”) on{" "}
                            <bdt className='question'>
                              <a
                                href='https://conceptsarebricks.com'
                                target='_blank'
                                data-custom-class='link'
                              >
                                https://conceptsarebricks.com
                              </a>
                            </bdt>{" "}
                            (the “Site”){" "}
                            <bdt
                              className='block-container if'
                              data-type='if'
                              id='0043ef2f-6d7b-8e27-e1f5-16cde0f30348'
                            >
                              <bdt data-type='conditional-block'>
                                <bdt
                                  className='block-component'
                                  data-record-question-key='mobile_app_option'
                                  data-type='statement'
                                />
                              </bdt>
                              is for general informational purposes only. All
                              information on the Site{" "}
                              <bdt
                                className='block-container if'
                                data-type='if'
                                id='428f10b0-7ca9-4039-dfea-5f29f51c3cb3'
                              >
                                <bdt data-type='conditional-block'>
                                  <bdt
                                    className='block-component'
                                    data-record-question-key='mobile_app_option'
                                    data-type='statement'
                                  />
                                </bdt>
                                is provided in good faith, however we make no
                                representation or warranty of any kind, express
                                or implied, regarding the accuracy, adequacy,
                                validity, reliability, availability or
                                completeness of any information on the Site
                                <bdt
                                  className='block-container if'
                                  data-type='if'
                                  id='11270515-826f-ee20-0a2a-4e8bee9f9f2c'
                                >
                                  <bdt data-type='conditional-block'>
                                    <bdt
                                      className='block-component'
                                      data-record-question-key='mobile_app_option'
                                      data-type='statement'
                                    />
                                  </bdt>
                                  . UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY
                                  LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY
                                  KIND INCURRED AS A RESULT OF THE USE OF THE
                                  SITE{" "}
                                  <bdt
                                    className='block-container if'
                                    data-type='if'
                                    id='4971e65f-eff0-5c18-83f1-a0dcd056e8c2'
                                  >
                                    <bdt data-type='conditional-block'>
                                      <bdt
                                        className='block-component'
                                        data-record-question-key='mobile_app_option'
                                        data-type='statement'
                                      />
                                    </bdt>
                                    OR RELIANCE ON ANY INFORMATION PROVIDED ON
                                    THE SITE
                                    <bdt
                                      className='block-container if'
                                      data-type='if'
                                      id='ddcaf594-2bb0-bdc0-460e-1f96dfe89e6d'
                                    >
                                      <bdt data-type='conditional-block'>
                                        <bdt
                                          className='block-component'
                                          data-record-question-key='mobile_app_option'
                                          data-type='statement'
                                        />
                                      </bdt>
                                      . YOUR USE OF THE SITE{" "}
                                      <bdt
                                        className='block-container if'
                                        data-type='if'
                                        id='57726b77-4115-2533-2424-58bc8b6a12a8'
                                      >
                                        <bdt data-type='conditional-block'>
                                          <bdt
                                            className='block-component'
                                            data-record-question-key='mobile_app_option'
                                            data-type='statement'
                                          />
                                        </bdt>
                                        AND YOUR RELIANCE ON ANY INFORMATION ON
                                        THE SITE{" "}
                                        <bdt
                                          className='block-container if'
                                          data-type='if'
                                          id='3e90b11e-6e7d-ab89-2c29-33668d0f521d'
                                        >
                                          <bdt data-type='conditional-block'>
                                            <bdt
                                              className='block-component'
                                              data-record-question-key='mobile_app_option'
                                              data-type='statement'
                                            />
                                          </bdt>
                                          IS SOLELY AT YOUR OWN RISK.
                                        </bdt>
                                      </bdt>
                                    </bdt>
                                  </bdt>
                                </bdt>
                              </bdt>
                            </bdt>
                          </span>
                        </div>
                      </div>
                      <div style={{ lineHeight: "1.2" }}>
                        <br />
                      </div>
                      <div>
                        <div className='MsoNormal'>
                          <a name='_x1u8x12nt00e' />
                        </div>
                        <bdt
                          className='block-container if'
                          data-type='if'
                          id='25d6783f-eaa7-3465-7bd8-31e107cc0931'
                        >
                          <bdt data-type='conditional-block'>
                            <bdt
                              className='block-component'
                              data-record-question-key='external_disclaimer_option'
                              data-type='statement'
                            />
                            <bdt data-type='body'>
                              <div
                                className='MsoNormal'
                                data-custom-class='heading_1'
                              >
                                <strong>
                                  <span
                                    style={{
                                      lineHeight: "115%",
                                      fontSize: "19px",
                                    }}
                                  >
                                    EXTERNAL LINKS DISCLAIMER
                                    <br />
                                  </span>
                                </strong>
                              </div>
                            </bdt>
                          </bdt>
                        </bdt>
                      </div>
                      <div style={{ lineHeight: "1.2" }}>
                        <br />
                      </div>
                      <div>
                        <bdt className='block-container if' data-type='if'>
                          <bdt data-type='conditional-block'>
                            <bdt data-type='body'>
                              <div
                                className='MsoNormal'
                                data-custom-class='body_text'
                                style={{ lineHeight: "1.5" }}
                              >
                                <span
                                  style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: "15px",
                                  }}
                                >
                                  The&nbsp;
                                </span>
                                <span style={{ fontSize: "15px" }}>
                                  <span style={{ color: "rgb(89, 89, 89)" }}>
                                    Site <bdt className='block-component' />
                                    may contain (or you may be sent through the
                                    Site
                                    <bdt className='block-component' />) links
                                  </span>
                                </span>
                                <span
                                  style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: "15px",
                                  }}
                                >
                                  &nbsp;to other websites or content belonging
                                  to or originating from third parties or links
                                  to websites and features in banners or other
                                  advertising. Such external links are not
                                  investigated, monitored, or checked for
                                  accuracy, adequacy, validity, reliability,
                                  availability or completeness by us. WE DO NOT
                                  WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                                  RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY
                                  OF ANY INFORMATION OFFERED BY THIRD-PARTY
                                  WEBSITES LINKED THROUGH THE SITE OR ANY
                                  WEBSITE OR FEATURE LINKED IN ANY BANNER OR
                                  OTHER ADVERTISING. WE WILL NOT BE A PARTY TO
                                  OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
                                  ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY
                                  PROVIDERS OF PRODUCTS OR SERVICES.
                                </span>
                              </div>
                            </bdt>
                          </bdt>
                        </bdt>
                      </div>
                      <div style={{ lineHeight: "1.2" }}>
                        <br />
                      </div>
                      <div>
                        <bdt className='block-container if' data-type='if'>
                          <bdt
                            className='statement-end-if-in-editor'
                            data-type='close'
                          />
                        </bdt>
                        <div className='MsoNormal'>
                          <a name='_wfmrqujylbbj' />
                        </div>
                        <bdt
                          className='block-container if'
                          data-type='if'
                          id='098cd9ba-027e-0afb-ec22-41e16cb68d79'
                        >
                          <bdt data-type='conditional-block'>
                            <bdt
                              className='block-component'
                              data-record-question-key='professional_disclaimer_option'
                              data-type='statement'
                            />
                            <bdt data-type='body'>
                              <div
                                className='MsoNormal'
                                data-custom-class='heading_1'
                              >
                                <strong>
                                  <span
                                    style={{
                                      lineHeight: "115%",
                                      fontSize: "19px",
                                    }}
                                  >
                                    PROFESSIONAL DISCLAIMER
                                  </span>
                                </strong>
                              </div>
                            </bdt>
                          </bdt>
                        </bdt>
                      </div>
                      <div style={{ lineHeight: "1.2" }}>
                        <br />
                      </div>
                      <div>
                        <bdt className='block-container if' data-type='if'>
                          <bdt data-type='conditional-block'>
                            <bdt data-type='body'>
                              <div
                                className='MsoNormal'
                                data-custom-class='body_text'
                                style={{ lineHeight: "1.5" }}
                              >
                                <span
                                  style={{
                                    color: "rgb(89, 89, 89)",
                                    fontSize: "15px",
                                  }}
                                >
                                  The Site cannot and does not contain{" "}
                                  <bdt
                                    className='block-container question question-in-editor'
                                    data-id='7744aaea-18c2-bcb8-7b80-f395643dfc29'
                                    data-type='question'
                                  >
                                    __________
                                  </bdt>{" "}
                                  advice. The{" "}
                                  <bdt
                                    className='block-container question question-in-editor'
                                    data-id='89301322-2416-ef87-b4e0-ed76500d68ee'
                                    data-type='question'
                                  >
                                    __________
                                  </bdt>{" "}
                                  information is provided for general
                                  informational and educational purposes only
                                  and is not a substitute for professional
                                  advice. Accordingly, before taking any actions
                                  based upon such information, we encourage you
                                  to consult with the appropriate professionals.
                                  We do not provide any kind of{" "}
                                  <bdt
                                    className='block-container question question-in-editor'
                                    data-id='019392d9-ec21-89ec-6801-8fc62f11838c'
                                    data-type='question'
                                  >
                                    __________
                                  </bdt>{" "}
                                  advice. THE USE OR RELIANCE OF ANY INFORMATION
                                  CONTAINED ON THIS SITE{" "}
                                  <bdt
                                    className='block-container if'
                                    data-type='if'
                                    id='ffb387d5-cd7d-2b81-9cfb-42445bcb82f4'
                                  >
                                    <bdt data-type='conditional-block'>
                                      <bdt
                                        className='block-component'
                                        data-record-question-key='mobile_app_option'
                                        data-type='statement'
                                      />
                                    </bdt>
                                    IS SOLELY AT YOUR OWN RISK.
                                  </bdt>
                                </span>
                              </div>
                            </bdt>
                          </bdt>
                        </bdt>
                      </div>
                      <div style={{ lineHeight: "1.2" }}>
                        <br />
                      </div>
                      <div>
                        <bdt className='block-container if' data-type='if'>
                          <bdt
                            className='statement-end-if-in-editor'
                            data-type='close'
                          />
                        </bdt>
                      </div>
                      <div>
                        <bdt className='block-component' />
                      </div>
                      <div>
                        <bdt
                          data-type='conditional-block'
                          style={{ textAlign: "start" }}
                        >
                          <bdt data-type='body'>
                            <div
                              className='MsoNormal'
                              style={{ textAlign: "justify" }}
                            >
                              <bdt className='block-component' />
                              <div className='MsoNormal'>
                                <br />
                              </div>
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    ",
                              }}
                            />
                          </bdt>
                        </bdt>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </Main>
    </>
  );
};

DislaimerPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DislaimerPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DislaimerPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DislaimerPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DislaimerPage;

export const DislaimerPageQuery = graphql`
  query DislaimerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
