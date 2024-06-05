import React from "react";
import logo from "../../logo.svg";
import "./_home.scss";
import ButtonUsage from "../../components/ButtonUsage";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          Edit <code>src/home.tsx</code> and save to reload.
        </p>
        <a
          className="home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonUsage></ButtonUsage>
      </header>
    </div>
  );
}

export default Home;
