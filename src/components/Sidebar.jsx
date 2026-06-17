import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <Link to="/">🏠 Home</Link>
      <Link to="/trending">🔥 Trending</Link>
      <p>🎬 Subscriptions</p>
      <p>📚 Library</p>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#181818",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    position: "sticky",
    top: 0,
  },
};

export default Sidebar;