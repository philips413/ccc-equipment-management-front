import {Content} from "../App";
import Header from "./layout/Header";
import React from "react";
import Footer from "./layout/Footer";

const ListPage = (props: any) => {
  return (
    <>
      <Content>
        <Header title={"목록"}/>
        <main>
          TEST111
        </main>
        <Footer />
      </Content>
    </>
  )
}

export default ListPage;
