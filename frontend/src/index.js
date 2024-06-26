import React from "react";
import ReactDOM from "react-dom/client";
import {RecoilRoot} from "recoil";

import GlobalStyle from "./styles/global/GlobalStyle";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./global/ScrollToTop";
import {BrowserRouter} from "react-router-dom";
import {LSClient} from "lightswitch-js-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <RecoilRoot>
        <BrowserRouter>
            <GlobalStyle/>
            <ScrollToTop/>
            <App/>
        </BrowserRouter>
    </RecoilRoot>,
    // </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
