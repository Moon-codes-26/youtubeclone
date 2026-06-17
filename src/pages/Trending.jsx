import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

function Trending() {
  // just simulate trending by reversing list
  const trendingVideos = [...videos].reverse();

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>🔥 Trending</h2>

      <div style={styles.grid}>
        {trendingVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },
};

export default Trending;