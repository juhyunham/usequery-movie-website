import React from "react";
import styled from "@emotion/styled";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AiringTodayTvSection from "../features/tv/airingToday";
import LatesetTvSection from "../features/tv/latest";
import OnTheAirTvSection from "../features/tv/OnTheAir";
import PopularTvSection from "../features/tv/Popular";
import TopRateTvSection from "../features/tv/topRate";

const TvPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatesetTvSection />
          <AiringTodayTvSection />
          <OnTheAirTvSection />
          <PopularTvSection />
          <TopRateTvSection />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

export default TvPage;
