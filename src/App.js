import "./App.css";
import SimpleStorage from "./pages/SimpleStorage";
import DefaultLayout from "./layout/default";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/test" element={<SimpleStorage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
