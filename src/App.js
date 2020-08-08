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
  Link
} from "react-router-dom";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
    <div className="App">
      {/* Page Wrapper */}
      <div id="wrapper">
        {/*<Link to="/">Main</Link>
        <Link to="/downloader">Downloader</Link>*/}

        {/* Sidebar starts */}
        <Sidebar />
        {/* Sidebar ends */}
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/downloader" component={DownloaderPage} />
          </Switch>
      </div>
      {/* End of Page Wrapper */}
    </div>
    </Router>
  );
}

export default App;
