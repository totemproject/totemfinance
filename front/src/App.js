import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Web3ReactProvider} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";

import "./assets/css/style.scss";
import {Header} from "./components/header/Header";
import {HomePage} from "./pages/HomePage";

import {ContextProvider} from "./reducer";
import {InitPage} from "./pages/InitPage";

import {AboutPage} from "./pages/AboutPage";
import {Dashboard} from "./pages/Dashboard/Dashboard";

import {AuctionPage} from "./pages/Auction";
import {ILO} from "./pages/ILO";
import {Roadmap} from "./pages/Roadmap";
import {Footer} from "./components/Footer";


function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      el.remove();
    }
  }, []);

  return (
      <ContextProvider>
        <Web3ReactProvider getLibrary={getLibrary}>

          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" render={() => {
                    return (
                      
                      <Redirect to="/home" /> 
                    )
                }}
              />
            

              <Route exact path="/home" component={AboutPage}/>
              <Route exact path="/timeline" component={Roadmap}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/presale" component={ILO}/>

              <Route exact path="/auction" component={AuctionPage}/>

          

            </Switch>
            <InitPage/>
            <Footer/>
          </Router>
        </Web3ReactProvider>
      </ContextProvider>
  );
}

export default App;
