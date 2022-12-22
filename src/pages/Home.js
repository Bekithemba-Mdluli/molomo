import React from "react";
import Details from "../components/Details";
import Header from "../components/Header";
import Panel from "../components/Panel";
import Services from "../components/Services";
import Slider from "../components/Slider";

import placehoder from "../images/placeholder.webp";

import "./Home.css";
function Home() {
  document.body.classList.remove("no-scroll");
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.";
  const heading = "What They are about and mission I Guess";
  const image = placehoder;
  return (
    <div className="home">
      <div className="hero">
        <Header />
        <Panel />
        <div className="home__title">
          <h1>A Catchy Title typed over multiple lines</h1>
        </div>
        <Slider />
      </div>
      <div className="container">
        <Details button={true} text={text} heading={heading} image={image} />
        <Services />
      </div>
    </div>
  );
}

export default Home;
