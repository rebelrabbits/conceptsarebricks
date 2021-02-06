import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { Main, Section, Container } from "../../components/styles";

export default () => (
  <Layout>
    <Hero type="page" title="Contact..." />
    <Main>
      <Section>
        <Container>
          <div className="content">
            <h1>Thank you!</h1>
            <p>This is a custom thank you page for form submissions</p>
          </div>
        </Container>
      </Section>
    </Main>
  </Layout>
);
