import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WrappedHorizontalLoginForm from './containers/login';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <WrappedHorizontalLoginForm username='' password='' />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

