import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NotFoundPage from "../Components/NotFoundPage";
import AboutPage from "../Components/AboutPage";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";

function App() {
  return (
    <>
      <div>
        <Header />
        <HomePage />
        <BrowserRouter>
          <Routes>
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      <p className="read-the-docs">ban teemo</p>
    </>
  );
}

export default App;
