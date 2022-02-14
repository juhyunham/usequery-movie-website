import React from "react";
import AiringTodayTvSection from "../features/tv/airingToday";
import LatesetTvSection from "../features/tv/latest";

const TvPage: React.FC = () => {
  return (
    <div>
      <LatesetTvSection />
      <AiringTodayTvSection />
    </div>
  );
};

export default TvPage;
