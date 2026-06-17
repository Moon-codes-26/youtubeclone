import { useParams } from "react-router-dom";
import videos from "../data/videos";

function VideoPage() {
  const { id } = useParams();
  const video = videos.find(v => v.id == id);

  return (
    <div>
      <h2>{video.title}</h2>

      <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        allowFullScreen
      />
    </div>
  );
}

export default VideoPage;