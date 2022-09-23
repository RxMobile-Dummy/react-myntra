import React from "react";
import { store } from "core";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const ConnectedApp = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// const element: HTMLElement | null = document.getElementById("root");

// ReactDOM.render(ConnectedApp, element);

root.render(ConnectedApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
