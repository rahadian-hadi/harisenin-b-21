import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./assets/styles/main.css";
import App from "./App.jsx";
const app = document.getElementById("root");
const root = createRoot(app);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
