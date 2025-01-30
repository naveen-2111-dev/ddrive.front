import React, { useState } from "react";
import IpfsUpload from "./pinata";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    setIsUploading(true);
    try {
      const upload = await IpfsUpload(selectedFile);
      setUploadResult(upload);
      console.log("File uploaded successfully:", upload);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input"
        accept=".pdf,.jpg,.png,.txt"
      />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <button
        className="upload-btn"
        onClick={handleUpload}
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>

      {uploadResult && (
        <div className="upload-result">
          <p>File uploaded successfully! CID: {uploadResult.ipfsHash}</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
