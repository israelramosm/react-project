import React from "react";
import "./_about.scss";
import DefaultSkeleton from "../../components/DefaultSkeleton";

function About() {
  return (
    <div className="about">
        <h1>About Page</h1>
        <DefaultSkeleton></DefaultSkeleton>
    </div>
  );
}

export default About;
