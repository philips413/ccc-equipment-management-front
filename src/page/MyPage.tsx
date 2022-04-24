import {Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import React from "react";
import Footer from "./layout/Footer";

const MyPage = () => {
  return (
    <>
      <Contents>
        <Header title={"마이페이지"} />
        <main>
          TEST333
        </main>
        <Footer />
      </Contents>
    </>
  )
}

export default MyPage;
