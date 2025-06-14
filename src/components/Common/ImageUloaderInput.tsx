"use client";

import React, { useRef } from "react";

type ImageUploaderProps = {
  onUploadComplete: (urls: string[]) => void;
  title?: string;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onUploadComplete,
  title,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = e.target.files;
    if (!filesArray) return;
    const files = Array.from(filesArray);

    const uploadedURLs: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      const privateKey = process.env.NEXT_PUBLIC_IMAGE_PRIVATE_KEY;
      if (!privateKey) {
        console.error("Private key is not set in environment variables");
        return;
      }
      const authString = `${privateKey}:`;
      const encodedAuth = btoa(authString);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${encodedAuth}`,
        },
        body: null as BodyInit | null,
      };
      const publicKey = process.env.NEXT_PUBLIC_IMAGE_PUBLIC_KEY || "";
      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("publicKey", publicKey);
      options.body = formData;
      const url = "https://upload.imagekit.io/api/v1/files/upload";
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Upload failed");
        }
        uploadedURLs.push(data.url);
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
    const uniqueURLs = Array.from(new Set(uploadedURLs)); // Remove duplicates
    // Send all URLs back to parent
    onUploadComplete(uniqueURLs);
  };

  return (
    <div className="form-group img-input-container">
      <label
        htmlFor="image-upload"
        style={{ alignSelf: "flex-start", marginLeft: "10px" }}
      >
        {title ? title : "Upload Images"}
      </label>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={inputRef}
        onChange={handleFiles}
      />
    </div>
  );
};

export default ImageUploader;
