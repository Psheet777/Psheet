import React from 'react';
import Storage from './components/Storage';
import Result from './components/Result';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.scss';


export default class App extends React.Component {
  render() {
    return (
      <MediaQuery query="(max-width: 480px)">
        <div className="App">
          <Router>
            <Route exact path="/" component={Storage} />
            <Route path="/result" component={Result} />
          </Router>
        </div>
      </MediaQuery>
    );
  }
}

