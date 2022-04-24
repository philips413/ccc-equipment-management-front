import React from "react"
import {Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


const HomePage = () => {
  return (
    <React.Fragment>
      <Contents>
        <Header title={"홈"} />
        <main>
          동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세
        </main>
      </Contents>
      <Footer />
    </React.Fragment>
  )
}


export default HomePage;
