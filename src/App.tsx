import React from 'react';
import {Routes} from 'react-router-dom';
import styled from "styled-components";
import {Route} from "react-router";
import HomePage from "./page/HomePage";
import ListPage from "./page/ListPage";
import MyPage from "./page/MyPage";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 750px;
  footer {
    max-width: 750px;
    width: 100%;
    bottom: 0px;
    position: fixed;
    display: flex;
    div {
      width: 100%;
    }
  }
`

export const Content = styled.div`
  position: relative;
  width: 100%;
`
function App() {
  return (
      <React.Fragment>
        <Wrapper>
          <MainContainer>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/list"} element={<ListPage />} />
              <Route path={"mypage"} element={<MyPage />} />
            </Routes>
            <footer className={"contentMenu"}>
              <div>HOME</div>
              <div>LIST</div>
              <div>MYPAGE</div>
            </footer>
          </MainContainer>
        </Wrapper>
      </React.Fragment>
  );
}

export default App;
