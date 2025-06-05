// src/components/ImageUploader.tsx
import React, { useState, useRef } from "react";
import type { DragEvent } from "react";
import { storage } from "../Services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../../assets/styles/styles.css";

const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const ImgInput: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploadedURLs, setUploadedURLs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const validFiles = Array.from(files).filter((file) =>
      ACCEPTED_TYPES.includes(file.type)
    );
    setSelectedFiles((prev) => [...prev, ...validFiles]);
    const previews = validFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previews]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (!selectedFiles.length) return;
    setLoading(true);
    const urls: string[] = [];

    for (const file of selectedFiles) {
      const fileRef = ref(storage, `uploads/${file.name}_${Date.now()}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      urls.push(url);
    }

    setUploadedURLs(urls);
    setSelectedFiles([]);
    setImagePreviews([]);
    setLoading(false);
  };

  return (
    <div className="form-group img-input-container">
      <div
        className={`img-input ${isDragging ? "img-drag-active" : "img-drag"}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png"
          ref={fileInputRef}
          onChange={handleFileChange}
          hidden
        />
        <p style={{ fontSize: "14px", textWrap: "wrap" }}>
          {isDragging
            ? "Drop your images here"
            : "Drag and drop images here or click to browse"}
        </p>
      </div>

      {imagePreviews.length > 0 && (
        <div className="img-preview">
          {imagePreviews.map((src, idx) => (
            <div key={idx} className="img-preview-item">
              <img src={src} alt={`preview-${idx}`} className="uploaded-img" />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading || selectedFiles.length === 0}
        className={` ${
          loading || selectedFiles.length === 0 ? "loading-btn" : ""
        }`}
      >
        {loading ? "" : "Upload Images"}
      </button>

      {uploadedURLs.length > 0 && (
        <div className="img-preview-container">
          <h3>Uploaded Images</h3>
          <div className="img-preview">
            {uploadedURLs.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`uploaded-${idx}`}
                className="uploaded-img"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgInput;
