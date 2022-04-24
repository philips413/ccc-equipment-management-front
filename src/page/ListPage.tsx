import {Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import React from "react";
import Footer from "./layout/Footer";

const ListPage = (props: any) => {
  return (
    <>
      <Contents>
        <Header title={"목록"}/>
        <main>
          TEST111
        </main>
        <Footer />
      </Contents>
    </>
  )
}

export default ListPage;
