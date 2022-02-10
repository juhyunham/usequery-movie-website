import React from "react";
import styled from "@emotion/styled";

const Footer: React.FC = () => {
  return (
    <Base>
      <Section>
        <Statistics>
          <Summary>
            지금까지 &nbsp;
            <Emphasis>* 644,934,343 개의 평가가</Emphasis>
            &nbsp; 쌓였어요.
          </Summary>
        </Statistics>
        <Container>
          <ContentWrapper>
            <Left>
              <TermAndPolicy>
                <TermAndPolicyItem>서비스 이용약관</TermAndPolicyItem>
                <TermAndPolicyItem>개인정보 처리방침</TermAndPolicyItem>
                <TermAndPolicyItem>회사 정보</TermAndPolicyItem>
              </TermAndPolicy>
            </Left>
            <Right />
          </ContentWrapper>
        </Container>
      </Section>
    </Base>
  );
};

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const Section = styled.section`
  background-color: #1c1d1f;
`;

const Statistics = styled.section`
  display: flex;
  background-color: #101113;
  width: 100%;
  height: 62px;
  line-height: 62px;
  justify-content: center;
  align-items: center;
`;

const Summary = styled.span`
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;

const Emphasis = styled.em`
  color: #ff0558;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
`;

const Container = styled.section`
  background: #1c1d1f;
  padding: 20px 0 38px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 0 60px;
`;

const Left = styled.div``;

const Right = styled.div``;

const TermAndPolicy = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TermAndPolicyItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;

  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #848485;
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    }
  }
`;

export default Footer;
