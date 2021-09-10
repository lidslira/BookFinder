import React from 'react';
import {Provider as StoreProvider} from 'react-redux';

import {store} from '~/shared/store';
import Routes from './routes';

const App: React.FC = () => (
  <StoreProvider store={store}>
    <Routes />
  </StoreProvider>
);

export default App;
