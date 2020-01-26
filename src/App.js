import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import MainScreen from './components/main_screen/MainScreen.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Catalog from './components/catalog/Catalog.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Route exact path="/" render={()=><MainScreen/>} />
        <Route exact path="/Sushi/" render={()=><MainScreen/>} />
        <Route exact path="/catalog" render={()=><Catalog/>} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
