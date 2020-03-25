import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
export const sagaMiddleware = createSagaMiddleware();

const configureMiddleware = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const middleware = [sagaMiddleware];

  if (isDev) {
    const devMiddleware = [...middleware, logger];
    return composeWithDevTools(applyMiddleware(...devMiddleware));
  }

  return applyMiddleware(...middleware);
};

export default configureMiddleware;
