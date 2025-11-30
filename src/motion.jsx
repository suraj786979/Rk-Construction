import React, { useState } from "react";

function UploadSection() {
  const [photo, setPhoto] = useState(null);
  const [project, setProject] = useState(null);

  // 📸 Photo Upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  // 💼 Project Upload
  const handleProjectChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProject(file.name);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Upload Your Photo & Projects</h2>

      {/* Upload Photo */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          id="photoUpload"
          style={{ display: "none" }}
        />
        <label
          htmlFor="photoUpload"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Upload Photo
        </label>

        {photo && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={photo}
              alt="Uploaded"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>

      {/* Upload Project */}
      <div>
        <input
          type="file"
          onChange={handleProjectChange}
          id="projectUpload"
          style={{ display: "none" }}
        />
        <label
          htmlFor="projectUpload"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Upload Project
        </label>

        {project && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            Uploaded Project: {project}
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadSection;
