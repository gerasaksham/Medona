import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Searchbar from './components/Searchbar';
import HomeScreen from './screens/Homescreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-content">
          <Searchbar/>
        </div>
        {/* <div className="App-cards">
        <HomeScreen/>
        </div> */}
        <Footer />
        <div className="Footer-last">
          <p>&copy;MEDONA | All right reserved | Privacy</p>
        </div>
      </div>
    );
  }
}

export default App;