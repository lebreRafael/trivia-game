import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ErrorMessage from 'components/ErrorMessage';
import LoadingIndicator from 'components/LoadingIndicator';
import store from 'redux/store';
import Home from 'routes/home/Home';
import Quiz from 'routes/quiz/Quiz';
import NotFound from 'routes/not-found/NotFound';
import Results from 'routes/results/Results';
import './App.css';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <ErrorMessage />
      <LoadingIndicator />
      <Router>
        <Switch>
          <Route path="/quiz/:questionNumber">
            <Quiz />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </div>
);

export default App;
