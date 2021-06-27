import React from "react";
import "react-widgets/dist/css/react-widgets.css";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll/index.jsx";
import Hero from "../../components/Hero";
import Seo from "../../components/SEO";
import { Container, Section } from "../../styledComponents/styles";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <Seo title='Latest Posts' path='/blog' />
        <Layout>
          <Hero type='page' title='Latest Posts' />
          <main>
            <Section fade={true}>
              <Container>
                <BlogRoll hasFilters={true} />
              </Container>
            </Section>
          </main>
        </Layout>
      </>
    );
  }
}
