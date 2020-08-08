import React from 'react';
import logo from './logo.svg';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import DownloaderPage from './DownloaderPage';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar starts */}
          <Sidebar />
          {/* Sidebar ends */}
          <div id="content-wrapper" className="d-flex flex-column">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/downloader" component={DownloaderPage} />
            </Switch>
          </div>
        </div>
        {/* End of Page Wrapper */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
