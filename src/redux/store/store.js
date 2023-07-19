import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers"; // Importa il tuo rootReducer o combineReducer
import App from "../../App";

const store = createStore(rootReducer); // Crea lo store con il rootReducer

ReactDOM.render(
  <Provider store={store}>
    <App /> {/* Sostituisci App con il componente principale del tuo progetto */}
  </Provider>,
  document.getElementById("root")
);
