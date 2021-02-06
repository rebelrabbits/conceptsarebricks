import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Section, Container } from "../components/styles";

const NotFoundPage = () => (
  <Layout>
    <Hero type="page" title="Not Found" />
    <Section>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
