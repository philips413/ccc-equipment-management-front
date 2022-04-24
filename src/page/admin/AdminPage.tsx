import {Routes} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {Route} from "react-router";
import AdminHomePage from "./AdminHomePage";
import EquipmentListPage from "./EquipmentListPage";
import UserListPage from "./UserListPage";
import CategoryPage from "./CategoryPage";


const AdminContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 10px;
`

export const Contents = styled.main`
  padding: 10px
`

const AdminPage = () => {
  return (
    <>
      <AdminContainer>
        <Routes>
          <Route path={""} element={<AdminHomePage />} />
          <Route path={"/categorys"} element={<CategoryPage />} />
          <Route path={"/equipments"} element={<EquipmentListPage />} />
          <Route path={"/users"} element={<UserListPage />} />
        </Routes>
      </AdminContainer>
    </>
  )
}

export default AdminPage;
