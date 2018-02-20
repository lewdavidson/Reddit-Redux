//REACT DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

//COMPONENTS
import App from './components/App';

// const store = createStore(ticketListReducer);
// ADD store={store} TO PROVIDERS
// let unsubscribe = store.subscribe(() =>
//   console.log('barf')
// );

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
