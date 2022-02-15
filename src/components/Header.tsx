import React, { useState } from "react";
import styled from "@emotion/styled";
import useMovieSearch from "../features/movie/useMovieSearch";

const Header: React.FC = () => {
  const [searchkeyword, setSearchKeyword] = useState<string>("");
  const pathname = window.location.pathname;

  const isTv = pathname.indexOf("tv") > -1;

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyword(e.target.value);
  };

  const { data: searchResult } = useMovieSearch(searchkeyword);

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <Link href="/">
                <TextLogo>
                  <span className="primary">HAM</span>
                  <span>무비월드</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href="/">
                <MenuButton active={pathname === "/"}>영화</MenuButton>
              </Link>
              <Link href="/">
                <MenuButton active={pathname === "/tv"}>TV 프로그램</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <SearchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." onChange={handleKeyword} />
                    </SearchLabel>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
              <SearchResultWrapper>
                <SearchResultList>
                  {searchResult?.data.results.map((searchItem) => (
                    <SearchResultItem key={searchItem.id}>
                      <Link href={`/movie/${searchItem.id}`}>{searchItem.title}</Link>
                    </SearchResultItem>
                  ))}
                </SearchResultList>
              </SearchResultWrapper>
            </SearchMenu>
            <Menu>
              <SignIn>로그인</SignIn>
            </Menu>
            <Menu>
              <SignUp>회원가입</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
};

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0/0%) 1px 0px 0px;
  width: 100%;
  height: 62px;
  z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  /* overflow: hidden; */
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;

  &:not(:first-of-type) {
    margin-left: 24px;
  }
`;

const MenuButton = styled.button<{ active: boolean }>`
  font-size: 16px;
  color: ${({ active }) => (active ? "rgb(53, 53, 53)" : "rgb(126, 126, 126)")};
  cursor: pointer;
  border: none;
  background: none;
`;

const SearchMenu = styled.li`
  display: flex;
  width: 300px;
  height: 62px;
  align-items: center;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;

  > span[class="primary"] {
    color: rgb(255, 47, 110);
  }

  > span:not(.primary) {
    color: #222;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.div``;

const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
`;

const SearchResultWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 999;
  background: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
`;

const SearchResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SearchResultItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-top: 1px solid #f1f1f3;

  &:hover {
    background: #eee;
  }

  a {
    display: block;
    width: 100%;
    padding: 8px;
    color: #222;
    font-size: 13px;
    text-align: left;
  }
`;

const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;

const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 15px 0;
`;

export default Header;
