import React, { lazy, Suspense } from 'react';
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
const Home = lazy(() => import("./components/home/Home"));
const Contact = lazy(() => import("./components/contact/Contact"));
const About = lazy(() => import("./components/about/About"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Router basename="/code-splitting">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
