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


let lightswitch = LSClient.getInstance();
lightswitch
    .init({
        sdkKey: "0ca69b1cfd754a1fb78191c941c5c76e",
        onFlagChanged: () => {
        },
        endpoint: "https://lightswitch.kr",
    })
    .then(() => {
        console.log("lightswitch init 성공")
    })
    .catch(() => {
        console.log("lightswitch init 실패")
    })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
