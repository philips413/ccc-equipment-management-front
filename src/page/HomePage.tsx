import React from "react"
import {Content} from "../App";
import Header from "./layout/Header";


const HomePage = () => {
  return (
    <React.Fragment>
      <Content>
        <Header title={"홈"} />
        <main>
          TEST
        </main>
      </Content>
    </React.Fragment>
  )
}


export default HomePage;
