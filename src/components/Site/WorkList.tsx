import React from "react";
import useProject, { ProjectItems } from "../Hooks/useProject";
import Link from "next/link";
import Icon from "../Common/Icon";
import SkeletonLoader from "../Common/SkeletonLoader";

type WorkListProps = { listNumber?: number | null };

function WorkList({ listNumber = null }: WorkListProps) {
  const { projectEmtries, isloading } = useProject();

  const projects: ProjectItems[] = [
    ...projectEmtries.map((item) => ({
      projectId: item.id,
      projectName: item.project_name,
      projectTag: item.project_tag,
      projectStack: item.project_technologies,
      projectDb: item.project_db,
      otherTools: item.other_tools,
      projectImages: item.project_image,
      projectWebsite: item.project_link,
      date: item.date,
    })),
  ];

  const sortedList = projects.sort((a, b) => {
    const dateA = new Date(a.date || "2025-01-01");
    const dateB = new Date(b.date || "2025-01-01");
    return dateB.getTime() - dateA.getTime(); // Sort by date descending
  });

  const projectList = listNumber ? sortedList.slice(0, listNumber) : sortedList;
  if (isloading)
    return (
      <div>
        <SkeletonLoader />
      </div>
    );
  return (
    <div className="work-grid">
      {projectList.map((item, index) => (
        <div key={index} className="project-photo">
          <Link key={item.projectId} href={`/work/${item.projectId}`}>
            <img
              src={`${item.projectImages?.[0]}?tr=f-auto`}
              decoding="async"
              loading="lazy"
              fetchPriority="low"
              draggable="false"
              alt={item.projectName}
              style={{
                objectFit: "cover",
                borderRadius: "1rem",
                width: "100%",
                height: "auto",
              }}
            />

            <div className="link">
              {item.projectName}{" "}
              <span className="project-link">
                <Icon.TbArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default WorkList;
