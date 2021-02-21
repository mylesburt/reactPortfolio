import React from "react";
import "../styles.css";
import BioCard from "../components/BioCard/index.js";
import Projects from "../components/Projects/index.js";
import Navbar from "../components/Navbar/index.js";

function Home() {
  return (
    <div>
      <Navbar />
      <BioCard />
      <Projects />
    </div>
  );
}

export default Home;
