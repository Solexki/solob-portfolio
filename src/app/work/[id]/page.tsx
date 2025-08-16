"use client";
import ProjectDetails from "@/components/Site/ProjectDetails";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  return <ProjectDetails id={id} />;
}
