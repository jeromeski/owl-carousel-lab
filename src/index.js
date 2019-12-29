import React, { Component } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel2";
import "./owl/owl.carousel.css";
import "./styles.css";

class App extends Component {
  componentDidUpdate() {
    const owlDots = document.querySelector(".owl-dots");
    const newEl = document.createElement("div");
    newEl.classList.add("playPause");
    if (this.state.autoplay) {
      newEl.innerHTML =
        '<svg class="playbutton" xmlns="http://www.w3.org/2000/svg"><title>play</title><use xlink:href="#icon-play"></use></svg>';
    } else {
      newEl.innerHTML =
        '<svg class="pausebutton" xmlns="http://www.w3.org/2000/svg"><title>pause</title><use xlink:href=#icon-pause></use></svg>';
    }
    owlDots.append(newEl);
    console.log(owlDots);
  }

  render() {
    const options = {
      items: 1,
      rewind: true,
      dots: true,
      autoplay: true
    };

    return (
      <div className="App">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol
            id="icon-pause"
            viewBox="0 0 100 100"
            strokeWidth="31"
            fill="none"
          >
            <line x1="27.5" y1="95" x2="27.5" y2="5" />
            <line x1="72.5" y1="95" x2="72.5" y2="5" />
          </symbol>
          <symbol id="icon-play" viewBox="0 0 100 100">
            <polygon strokeWidth="0" points="87.5,50 12.5,93.3 12.5,6.7" />
          </symbol>
        </svg>
        <OwlCarousel options={options}>
          <div className="item">
            <img src="http://placehold.it/1600x900" alt="null" />
            <h1 className="owl-heading" style={{ fontSize: 100 }}>
              1
            </h1>
          </div>
          <div className="item">
            <img src="http://placehold.it/1600x900" alt="null" />
            <h1 className="owl-heading" style={{ fontSize: 100 }}>
              2
            </h1>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
