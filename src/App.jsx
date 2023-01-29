import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
