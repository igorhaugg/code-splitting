import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Spinner from './common/Spinner';

// Loading component
const Loading = () => (
  <div className="full-centralize full-screen">
    <Spinner />
  </div>
);

// Components
const Home = Loadable({
  loader: () => import('./components/home/Home'),
  loading: () => <Loading />
});

const Contact = Loadable({
  loader: () => import('./components/contact/Contact'),
  loading: () => <Loading />
});

const About = Loadable({
  loader: () => import('./components/about/About'),
  loading: () => <Loading />
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
