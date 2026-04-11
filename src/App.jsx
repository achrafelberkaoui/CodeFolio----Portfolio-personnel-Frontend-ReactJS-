import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserContext";

function App() {
  const user = "Achraf El Berkaoui";

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;