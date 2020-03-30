import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from 'store/store';
import TodoContainer from 'src/containers/todoContainer/TodoContainer';
import GlobalStyle from './style/GlobalStyle';
import { Loading, Toast } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/page/:page" component={TodoContainer} />
          <Route component={TodoContainer} />
        </Switch>
      </Router>
      <Toast />
      <Loading />
    </Provider>
  );
};

export default App;
