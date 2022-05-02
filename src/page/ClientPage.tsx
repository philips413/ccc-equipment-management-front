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
  
`

export const Contents = styled.div`
  position: relative;
  width: 100%;
`

export const ClientMain = styled.main`
  margin-bottom: 90px;
  padding: 10px;
  .card{
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

const ClientPage = () => {
  return (
    <>
      <MainContainer>
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
