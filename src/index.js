import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import configureStore from "./redux/configure-store" // CUSTOM configureStore WITH REDUX-PERSIST & REDUX TOOLKIT
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"

import "./index.css"

const [store, persistor] = configureStore() // could have just imported but set it up this way in case we ever want to pass an initial state into the configureStore to override the defaults in each feature slice

render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
)
