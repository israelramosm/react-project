import React, { Fragment } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import NotFound from "./views/NotFound/NotFound";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Container } from "@mui/material";

function App() {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* ... */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
