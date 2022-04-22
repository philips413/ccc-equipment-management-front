import {Link} from "react-router-dom";
import styled from "styled-components";

const AdminHeaderDiv = styled.div`
  position: relative;
  width: 100%;
`

const AdminHeader = () => {
  return (
    <>
      <AdminHeaderDiv>
        <h3>관리자 페이지</h3>
        <nav>
          <Link to={"/admin/equipments"}>장비등록</Link>&emsp;
          <Link to={"/admin/users"}>관리자등록</Link>&emsp;
        </nav>
      </AdminHeaderDiv>
    </>
  )
}
export default AdminHeader;