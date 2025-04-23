import { useState } from "react";
import { FaUser, FaHeart, FaRegHeart } from "react-icons/fa";

function StudentProfile() {
  const [showProfile, setShowProfile] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Student Dashboard</h1>

      {/* Toggle Profile */}
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile ? (
        <div style={{ marginTop: "80px", margin: "auto", textAlign: "center", display:"flex", flexDirection:"column", alignItems: "center" }}>
          <FaUser size={60} />
          <h2>Shakir Khan</h2>
          <p>Frontend Developer</p>

          {/* Like Button */}
          <button
            onClick={() => setLiked(!liked)}
            style={{
              textAlign:"center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: liked ? "red" : "gray",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <p>{liked ? "You liked this profile!" : "Do you like this profile?"}</p>
        </div>
      ) : null}
    </div>
  );
}

export default StudentProfile;
