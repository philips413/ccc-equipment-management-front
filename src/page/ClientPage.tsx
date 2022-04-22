import {Routes} from "react-router-dom";
import {Route} from "react-router";
import ListPage from "./ListPage";
import MyPage from "./MyPage";
import React from "react";
import styled from "styled-components";
import HomePage from "./HomePage";

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

const ClientPage = () => {
  return (
    <>
      <MainContainer>
        TEST
        <Routes>
          <Route path={""} element={<HomePage />} />
          <Route path={"/list"} element={<ListPage />} />
          <Route path={"mypage"} element={<MyPage />} />
        </Routes>
      </MainContainer>
    </>
  )
};

export default ClientPage;
