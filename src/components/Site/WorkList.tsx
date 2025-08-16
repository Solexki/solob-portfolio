import React from "react";
import useProject, { ProjectItems } from "../Hooks/useProject";
import Link from "next/link";
import Icon from "../Common/Icon";

function WorkList() {
  const { projectEmtries } = useProject();

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

  const projectList = projects.sort((a, b) => {
    const dateA = new Date(a.date || "2025-01-01");
    const dateB = new Date(b.date || "2025-01-01");
    return dateB.getTime() - dateA.getTime(); // Sort by date descending
  });

  return (
    <div className="work-grid">
      {projectList.map((item, index) => (
        <div key={index} className="project-photo">
          <Link key={item.projectId} href={`/work/${item.projectId}`}>
            <img
              src={`${item.projectImages?.[0]}?tr=f-auto`}
              srcSet={`
    ${item.projectImages?.[0]}?tr=w-400,f-auto 400w,
    ${item.projectImages?.[0]}?tr=w-800,f-auto 800w,
    ${item.projectImages?.[0]}?tr=w-1600,f-auto 1600w
  `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              decoding="async"
              loading="lazy"
              fetchPriority="low"
              draggable="false"
              alt={item.projectName}
              style={{ objectFit: "cover", borderRadius: "1rem" }}
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
