import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './view/home';
const About = lazy(() => import('./view/about'));
function App() {
  return (
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
  )
}

export default App;
