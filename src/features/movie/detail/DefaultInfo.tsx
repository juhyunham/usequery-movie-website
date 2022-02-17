import React from "react";
import styled from "@emotion/styled";

interface Props {
  title: string;
  year: string;
  genres: string;
  runtime: number;
  overview: string;
}

const DefaultInfo: React.FC<Props> = ({ title, year, genres, runtime, overview }) => {
  const hour = Math.ceil(runtime / 60);
  const minute = runtime % 60;

  return (
    <Base>
      <HeaderWrapper>
        <Header>
          <Title></Title>
          <Link href="/overview">
            <MoreSee>더보기</MoreSee>
          </Link>
        </Header>
        <Summary>
          <p>{title}</p>
          <p>
            {year}. {genres}
          </p>
          <p>
            {hour}시간 {minute}분
          </p>
          <p>{overview}</p>
        </Summary>
      </HeaderWrapper>
    </Base>
  );
};

const Base = styled.div`
  padding: 11px 15px;
  border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #ff2f6e;
`;

const Title = styled.h2`
  color: #000;
  font-size: 19px;
  font-weight: 700;
  margin: 8px 0;
`;

const Summary = styled.div`
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`;

const MoreSee = styled.div``;

export default DefaultInfo;
