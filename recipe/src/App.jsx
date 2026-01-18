import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
