import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <input
      placeholder="Search videos..."
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        onSearch(e.target.value);
      }}
      style={{ padding: "10px", width: "300px" }}
    />
  );
}

export default SearchBar;