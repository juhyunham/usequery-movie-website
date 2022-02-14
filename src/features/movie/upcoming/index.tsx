import React from "react";
import styled from "@emotion/styled";
import useUpComingMovie from "./useUpComingMovie";
import Card from "../../../components/Card";
import Slider from "../../../components/Slider";

const UpComingSection: React.FC = () => {
  const { data, isLoading } = useUpComingMovie();

  const getYear = (data: string) => data.split("-")[0];

  return (
    <Base>
      <Title>개봉 예정작</Title>
      {isLoading || !data ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {data.data.results.map((movie) => (
            <Card
              key={movie.id}
              linkUrl={`/movie/${movie.id}`}
              title={movie.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
              voteAverage={movie.vote_average}
              year={getYear(movie.release_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
};

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default UpComingSection;
