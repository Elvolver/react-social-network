import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App store={store}
                     state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
/>, document.getElementById('root'));

serviceWorker.unregister();