import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RegistrationProvider } from "./context/RegistrationProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RegistrationProvider>
    <App />
  </RegistrationProvider>
);
