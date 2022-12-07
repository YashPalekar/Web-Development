import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import AppRoutes from "./routes/app-routes";
import { ApplicationContextProvider } from "./context/app-context";

const App = () => {
  return (
    <div className="main-body">
      <BrowserRouter>
        <ApplicationContextProvider>
          <AppRoutes />
        </ApplicationContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
