// useAdmin.ts
"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/firebase"; // Adjust the import path as necessary

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "";

export default function useAdminStatus() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsAdmin(false);
        return;
      }
      if (user?.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      }
    });
  }, []);

  return { isAdmin };
}
