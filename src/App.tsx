import React from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import HomePage from "./page/HomePage";

function App() {
  return (
      <React.Fragment>
        <Routes>
            <Route path={"/"} element={<HomePage />} />
        </Routes>
      </React.Fragment>
  );
}

export default App;
