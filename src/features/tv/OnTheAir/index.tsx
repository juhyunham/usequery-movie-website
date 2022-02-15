import React from "react";
import styled from "@emotion/styled";
import useOnTheAir from "./useOnTheAirTv";
import Card from "../../../components/Card";
import Slider from "../../../components/Slider";

const OnTheAirTvSection: React.FC = () => {
  const { data, isLoading } = useOnTheAir();

  const getYear = (data: string) => data.split("-")[0];

  return (
    <Base>
      <Title>실시간</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {data.data.results.map((tv) => (
            <Card
              key={tv.id}
              linkUrl={`/tv/${tv.id}`}
              title={tv.name}
              year={getYear(tv.first_air_date)}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
              voteAverage={tv.vote_average}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default OnTheAirTvSection;
