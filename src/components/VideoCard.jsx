import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`}>
      <div style={styles.card}>
        <img src={video.thumbnail} style={styles.img} />

        <div style={styles.info}>
          <h4 style={styles.title}>{video.title}</h4>
          <p style={styles.channel}>{video.channel}</p>
        </div>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    backgroundColor: "#181818",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "0.3s",
  },
  img: {
    width: "100%",
    borderRadius: "12px 12px 0 0",
  },
  info: {
    padding: "10px",
  },
  title: {
    fontSize: "14px",
    margin: "5px 0",
  },
  channel: {
    fontSize: "12px",
    color: "#aaa",
  },
};

export default VideoCard;