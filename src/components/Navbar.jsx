import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar({ onSearch }) {
  return (
    <div style={styles.navbar}>
      
      {/* Logo */}
      <Link to="/" style={styles.logo}>
        ▶ YouTubeClone
      </Link>

      {/* Search */}
      <SearchBar onSearch={onSearch} />

      {/* Right side */}
      <div style={styles.right}>
        <button style={styles.btn}>Login</button>
      </div>

    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#202020",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none"
  },
  right: {
    display: "flex",
    gap: "10px"
  },
  btn: {
    padding: "6px 12px",
    cursor: "pointer"
  }
};

export default Navbar;