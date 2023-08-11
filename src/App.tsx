import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContext } from "./context/context";
import Layout from "./pages/layout";
import "./index.scss";

function App() {
  return (
    <main>
      <MyContext>
        <Router>
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </Router>
      </MyContext>
    </main>
  );
}

export default App;
