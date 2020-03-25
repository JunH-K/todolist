import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import MainContainer from 'containers/MainContainer';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </div>
  );
};

export default App;
