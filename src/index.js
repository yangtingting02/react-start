import dva from 'dva';
import { message } from 'antd';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import '@babel/polyfill';
import 'url-polyfill';
import { createLogger } from 'redux-logger';

const logger = createLogger();

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createHistory(),
  onError(error) {
    message.error(error.message);
  },
});

// 2. Plugins
app.use({
  onAction: logger,
});

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
