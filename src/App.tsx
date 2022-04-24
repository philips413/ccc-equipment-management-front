import React from 'react';
import {Routes} from 'react-router-dom';
import styled from "styled-components";
import {Route} from "react-router";
import "./assets/css/style.scss";
import ClientPage from "./page/ClientPage";
import AdminPage from "./page/admin/AdminPage";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`
function App() {
  return (
      <React.Fragment>
        <Wrapper>
          <Routes>
            <Route path={"/*"} element={<ClientPage />} />
            <Route path={"/admin/*"} element={<AdminPage />} />
          </Routes>
        </Wrapper>
      </React.Fragment>
  );
}

export default App;
