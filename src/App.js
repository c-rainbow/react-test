import React from 'react';
import logo from './logo.svg';
import Sidebar from './layout/Sidebar';
import MainPage from './page/MainPage';
import DownloaderPage from './page/DownloaderPage';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './layout/Footer';
import StreamerModePage from './page/StreamerModePage';
import ModeratorModePage from './page/ModeratorModePage';
import MediaEditorModePage from './page/MediaEditorModePage';

function App() {
  return (
    <Router>
        {/* Page Wrapper */}
        <Switch>
          <Route exact path="/" component={StreamerModePage} />
          <Route path="/downloader" component={DownloaderPage} />
          <Route path="/analytics/streamer" component={StreamerModePage} />
          <Route path="/analytics/moderator" component={ModeratorModePage} />
          <Route path="/analytics/mediaeditor" component={MediaEditorModePage} />
        </Switch>
        {/* End of Page Wrapper */}

        {/* Logout Modal */}
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        {/* Footer */}
        <Footer />
    </Router>
  );
}

export default App;
