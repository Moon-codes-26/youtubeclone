
import { useState } from "react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [query, setQuery] = useState("");

  const filtered = videos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setQuery} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {filtered.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Home;