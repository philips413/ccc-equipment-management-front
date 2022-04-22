import {Routes} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {Route} from "react-router";
import AdminHomePage from "./admin/AdminHomePage";


const AdminContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const AdminPage = () => {
  return (
    <>
      <AdminContainer>
        <Routes>
          <Route path={""} element={<AdminHomePage />} />
        </Routes>
      </AdminContainer>
    </>
  )
}

export default AdminPage;