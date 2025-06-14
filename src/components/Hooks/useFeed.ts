"use client";
import React, { useState } from "react";
import { db } from "../Services/firebase"; // Adjust the import path as necessary
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function useFeed() {
  const initialData = {
    post_tag: "",
    post_title: "",
    message: "",
    post_image: "",
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    pinned: false,
    published: true,
  };
  type FormData = typeof initialData;
  type FeedForm = {
    id: string;
    post_tag?: string;
    post_title?: string;
    message?: string;
    post_image?: string;
    date?: string;
    pinned?: boolean;
    published?: boolean;
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [showForm, setShowForm] = useState(false);
  const [feedFormEntries, setFeedFormEntries] = useState<FeedForm[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.post_title || !formData.post_tag || !formData.message) {
      console.error("Please fill in all required fields.");
      return;
    }
    await addDoc(collection(db, "feed"), {
      ...formData,
    });
    setShowForm(false);
    setFormData(initialData);
    fetchFeedContent();
  };

  const fetchFeedContent = async () => {
    try {
      const feedCollection = collection(db, "feed");

      // Fetch entries from Firestore (not implemented here)
      const querySnapshot = await getDocs(feedCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFeedFormEntries(data);
      setIsloading(false);
    } catch (error) {
      console.error("Error fetching guest book entries:", error);
    }
  };

  React.useEffect(() => {
    fetchFeedContent();
  }, []);

  return {
    showForm,
    setShowForm,
    formData,
    handleOnChange,
    handleOnSubmit,
    feedFormEntries,
    isloading,
  };
}
