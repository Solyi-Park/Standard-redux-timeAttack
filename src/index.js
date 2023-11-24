import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//1. 리덕스에서 Provider 가져오기
import { Provider } from "react-redux";
//2. 내가 만든 configstore에서 store를 가져온다
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //3. App 컴포넌트를 Provider를 감싼다.
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
