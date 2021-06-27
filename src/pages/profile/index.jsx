import React from "react";

import Layout from "../../components/Layout";
import ProfileRoll from "../../components/ProfileRoll";
import Hero from "../../components/Hero";
// import ModalComponent from "../../components/Modal";
import PleaseReadModal from "../../components/Modal/PleaseRead";
import { Container, Section } from "../../styledComponents/styles";
import Seo from "../../components/SEO";

const ProfileIndexPage = () => {
  return (
    <>
      <Seo title='All Profiles' path='/profile' />
      <Layout>
        <Hero type='page' title=' Search Profiles...' infoIcon={true} />
        <main>
          <Section fade={true}>
            <Container>
              {/* <button onClick={() => setIsModalOpen(true)}>open modal</button> */}
              <ProfileRoll hasFilters={true} />
            </Container>
          </Section>
        </main>
      </Layout>
      <PleaseReadModal />
    </>
  );
};

export default ProfileIndexPage;
