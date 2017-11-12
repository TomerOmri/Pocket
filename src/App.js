import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pocket from './Pocket.js';
import ModalTab from './ModalTab.js';
import { Button } from 'reactstrap';

class App extends Component {
  render() {

      const webSites = [
          {
              tileTitle: "Ynet",
              tileSubtitle: "this is a news site",
              tileUrl:"http://www.ynet.co.il"
          },
          {
              tileTitle: "Sport5",
              tileSubtitle: "this is a sports site",
              tileUrl:"http://www.sport5.co.il"
          },
          {
              tileTitle: "Facebook",
              tileSubtitle: "this is a social site",
              tileUrl:"http://www.facebook.com"
          },
          {
              tileTitle: "Walla",
              tileSubtitle: "this is a news site",
              tileUrl:"http://www.facebook.com"
          }

      ];


      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pocket</h2>
          <h6>Made with React</h6>
        </div>
          <div className="menuBar">
              {/*<Button color="primary" onClick={ () => {console.log('aa')}}> Add a Link </Button> {' '}*/}
              <ModalTab buttonLabel="Add a Link" modalContent="Add a Link to your pocket" modalTitle="New link"  />  {' '}
          </div>
          <Pocket webSites={webSites} />
      </div>
    );
  }
}

export default App;
