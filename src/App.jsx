import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Panel from "./pages/Panel";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </HashRouter>
  );
}

export default App;
