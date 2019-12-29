import React, {Component} from "react";
import ReactDOM from "react-dom";
import OwlCarousel from 'react-owl-carousel2';
import './owl/owl.carousel.css'
import './styles.css'


class App extends Component {
  render() {

    const options = {
      items: 1,
      rewind: true,
      dots: true,
      autoplay: true
    };

    return (
      <div className="App">
        <OwlCarousel options={options}>
          <div className='item'>
            <img src='http://placehold.it/1600x900' alt='null'/>
            <h1 className='owl-heading'>1</h1>
          </div>
          <div className='item'>
            <img src='http://placehold.it/1600x900' alt='null'/>
            <h1 className='owl-heading'>2</h1>
          </div>
          <div className='item'>
            <img src='http://placehold.it/1600x900' alt='null'/>
            <h1 className='owl-heading'>3</h1>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
