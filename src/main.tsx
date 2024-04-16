import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./libs/reset.scss";
import "./libs/vars.scss";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
);
