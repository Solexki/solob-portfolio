"use client";
import React, { useState } from "react";
import { db } from "../Services/firebase"; // Adjust the import path as necessary
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function useGuestBook() {
  const initialData = {
    name: "",
    url: "",
    organization: "",
    avater_url: "",
    message: "",
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    published: false,
    pinned: false,
    component: null,
  };
  type FormData = typeof initialData;
  //yea, what is need of typing when everything is optional, hmmm
  type GuestBookEntry = {
    id: string;
    name?: string;
    url?: string;
    organization?: string;
    avater_url?: string;
    message?: string;
    date?: string;
    pinned?: boolean;
    published?: boolean;
    component?: null;
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [showForm, setShowForm] = useState(false);
  const [guestBookEntries, setGuestBookEntries] = useState<GuestBookEntry[]>(
    []
  );
  const [isloading, setIsloading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setSubmitting(true);

      if (!formData.name || !formData.organization || !formData.message) {
        console.error("Please fill in all required fields.");
        return;
      }
      await addDoc(collection(db, "guestbook"), {
        ...formData,
      });
      setShowForm(false);
      setFormData(initialData);
      setSubmited(true);
      fetchGuestBookEntries();
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePublished = async (entryId: string) => {
    try {
      const entryRef = doc(db, "guestbook", entryId);
      await updateDoc(entryRef, { published: true });
      fetchGuestBookEntries();
    } catch (error) {
      console.error("Error updating published status:", error);
    }
  };

  const fetchGuestBookEntries = async () => {
    try {
      const guestBookCollection = collection(db, "guestbook");

      // Fetch entries from Firestore (not implemented here)
      const querySnapshot = await getDocs(guestBookCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGuestBookEntries(data);
      setIsloading(false);
    } catch (error) {
      console.error("Error fetching guest book entries:", error);
    }
  };
  React.useEffect(() => {
    fetchGuestBookEntries();
  }, []);

  return {
    showForm,
    setShowForm,
    formData,
    handleOnChange,
    handleOnSubmit,
    guestBookEntries,
    isloading,
    submitting,
    submited,
    setSubmited,
    handlePublished,
  };
}
