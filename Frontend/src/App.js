import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './component/molecules';
import { authRoutes, routes, tempRoutes } from './routes';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const RenderRoutes = () => {
  return (
    <Router>
      <Header>
        {routes.map((x, i) => (
          <Route
            key={i}
            path={x.path}
            exact={x.exact}
            component={x.component}
          />
        ))}
      </Header>
    </Router>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RenderRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
