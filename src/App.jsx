import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import NotFoundPage from "../Components/NotFoundPage";
import AboutPage from "../Components/AboutPage";
import HomePage from "../Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChampionList from "../Components/ChampionList";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import ContactUs from "../Components/ContactUs";
import ChampDetails from "../Components/ChampDetails";

function App() {
  return (
    <BrowserRouter>
      <Flex direction="column" minH="100vh">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/champions" element={<ChampionList />} />
          <Route path="/champions/:championId" element={<ChampDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
