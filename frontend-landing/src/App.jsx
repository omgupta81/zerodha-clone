import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      {/* Full-page flex container */}
      <div
         style={{
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",          // full width
    margin: 0,              // no margin
    padding: 0,             // no padding
    backgroundColor: "#fff",
  }}
      >
        {/* Sticky header */}
        <Header />

        {/* Main content expands */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
