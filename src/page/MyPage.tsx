import {Content} from "../page/ClientPage";
import Header from "./layout/Header";
import React from "react";
import Footer from "./layout/Footer";

const MyPage = () => {
  return (
    <>
      <Content>
        <Header title={"마이페이지"} />
        <main>
          TEST333
        </main>
        <Footer />
      </Content>
    </>
  )
}

export default MyPage;
