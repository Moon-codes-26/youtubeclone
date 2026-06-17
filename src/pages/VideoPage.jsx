import { useParams } from "react-router-dom";
import videos from "../data/videos";

function VideoPage() {
  const { id } = useParams();

  const video = videos.find(v => String(v.id) === String(id));

  if (!video) {
    return <h2 style={{ color: "white" }}>Video not found</h2>;
  }

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>{video.title}</h2>

      <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        allowFullScreen
      />
    </div>
  );
}

export default VideoPage;