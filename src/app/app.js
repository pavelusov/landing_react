import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import store from "./redux/store";
import App from './components/App';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faVk, faOdnoklassniki } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebookF, faVk, faOdnoklassniki, faShoppingCart);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
