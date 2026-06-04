import { useRef, useState } from "react";

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

export default function FileAttachment() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleButtonClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const picked = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...picked]);
    e.target.value = "";
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="cmn_frm_blk attachment_blk_assets">
      <div className="frm_heading">FILE ATTACHMENT</div>

      <div className="inner_upload">
        <div className="icon_upload">
          <img src="/images/dashboard/upload.svg" alt="upload file" />
        </div>
        <h3>Drag and drop assets here</h3>
        <small>Upload proof of ownership or backup instructions (PDF, PNG)</small>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          multiple
        />

        <button type="button" className="upload_btn" onClick={handleButtonClick}>
          SELECT FILES
        </button>
      </div>

      {files.length > 0 && (
        <div className="uploaded_state">
          {files.map((file, i) => (
            <div key={i} className="uploaded_frm">
              <button type="button" onClick={() => removeFile(i)}>
                <img src="/images/dashboard/cross.svg" alt="remove" />
              </button>
              <img src="/images/dashboard/file.svg" alt="file" />
              <div className="info_file">
                <div className="name">{file.name}</div>
                <small>{formatSize(file.size)}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
