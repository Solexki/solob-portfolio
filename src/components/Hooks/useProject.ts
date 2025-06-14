"use client";
import React, { useState } from "react";
import { db } from "../Services/firebase"; // Adjust the import path as necessary
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function useProject() {
  const initialData = {
    project_name: "",
    project_tag: "",
    project_description: "",
    project_image: [],
    project_link: "",
    project_github: "",
    project_technologies: "",
    project_status: "Published",
    project_logo: "",
    project_db: "",
    other_tools: "",
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    published: true,
  };
  type FormData = typeof initialData;
  //yea, what is need of typing when everything is optional, hmmm
  type ProjectForm = {
    id: string;
    project_name?: string;
    project_tag?: string;
    project_description?: string;
    project_image?: string[];
    project_link?: string;
    project_github?: string;
    project_technologies?: string;
    project_status?: string;
    project_db?: string;
    other_tools?: string;
    date?: string;
    project_logo?: string;
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [showForm, setShowForm] = useState(false);
  const [projectEmtries, setProjectEntries] = useState<ProjectForm[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.project_name ||
      !formData.project_tag ||
      !formData.project_description
    ) {
      console.error("Please fill in all required fields.");
      return;
    }
    await addDoc(collection(db, "projects"), {
      ...formData,
    });
    setShowForm(false);
    setFormData(initialData);
    fetchFeedContent();
  };

  const fetchFeedContent = async () => {
    try {
      const feedCollection = collection(db, "projects");

      // Fetch entries from Firestore (not implemented here)
      const querySnapshot = await getDocs(feedCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjectEntries(data);
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
    projectEmtries,
    isloading,
  };
}
