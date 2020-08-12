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
import StreamerModePage from './StreamerModePage';
import ModeratorModePage from './ModeratorModePage';
import MediaEditorModePage from './MediaEditorModePage';

function App() {
  return (
    <Router>
      <>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar starts */}
          <Sidebar />
          {/* Sidebar ends */}
          <div id="content-wrapper" className="d-flex flex-column">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/downloader" component={DownloaderPage} />
              <Route path="/analytics/streamer" component={StreamerModePage} />
              <Route path="/analytics/moderator" component={ModeratorModePage} />
              <Route path="/analytics/mediaeditor" component={MediaEditorModePage} />
            </Switch>
          </div>
        </div>
        {/* End of Page Wrapper */}

        {/* Logout Modal */}
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <a className="btn btn-primary" href="login.html">Logout</a>
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    </Router>
  );
}

export default App;
