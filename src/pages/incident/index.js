import React from "react";

import Layout from "../../components/Layout";
import IncidentRollFetcher from "../../components/IncidentRoll";
import Hero from "../../components/Hero";
import {
  Container,
  Section,
  SectionHeading,
} from "../../styledComponents/styles";

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero type='page' title=' Search Events...' infoIcon={true} />
        <main>
          <Section fade={true}>
            <Container>
              <SectionHeading>Latest Events</SectionHeading>
              <IncidentRollFetcher hasFilters={true} />
            </Container>
          </Section>
        </main>
      </Layout>
    );
  }
}
