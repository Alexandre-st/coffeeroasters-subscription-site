import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import About from "./pages/About";
import CreatePlan from "./pages/CreatePlan";
import Homepage from "./pages/Homepage";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About /> } />
        <Route path="/create" element={<CreatePlan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
