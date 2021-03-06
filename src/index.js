import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { HashRouter, Routes, Route } from "react-router-dom";
import AppMint from "./AppMint";
import AppRescue from "./AppRescue";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {/* <Route path="/" element={<AppMint />} /> */}
                <Route path="/" element={<AppRescue />} />
                {/* <Route path="/mint" element={<AppMint />} /> */}
                {/* <Route path="/rescue" element={<AppRescue />} /> */}
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
