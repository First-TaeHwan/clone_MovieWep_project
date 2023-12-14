import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import * as React from "react";
import { Reset } from "styled-reset";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={`/movie/:id`} element={<Detail />} />
          <Route path={`/`} element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
