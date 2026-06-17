import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Trending from "./pages/Trending";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar onSearch={setQuery} />

      <div style={styles.container}>
        <Sidebar />

        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home query={query} />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/trending" element={<Trending />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#0f0f0f",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default App;
