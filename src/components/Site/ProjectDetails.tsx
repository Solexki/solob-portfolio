"use client";
import React from "react";
import SiteTopNav from "./SiteTopNav";
import useProject from "../Hooks/useProject";
import "./projects.css";
import Footer from "./Footer";
import SkeletonLoader from "../Common/SkeletonLoader";
import Icon from "../Common/Icon";
import WorkList from "./WorkList";
import Link from "next/link";

function ProjectDetails({ id }: { id: React.ReactNode }) {
  const { projectEmtries, isloading } = useProject();

  const project = projectEmtries.filter((item) => item.id === id);
  if (isloading) return <SkeletonLoader />;
  return (
    <div>
      <SiteTopNav />
      <div className="project-container">
        <div className="post-content">
          <Link className="back-button" href={"/work"}>
            <Icon.IoArrowBack /> Back
          </Link>
          <div className="post-details">
            {project.map((post) => (
              <div key={post.id} className="post-detail">
                <div className="post-title">{post.project_name}</div>
                <div className="post-photo">
                  <img src={post.project_image![0]} alt={post.project_name} />
                </div>
                <div className="post-summary">{post.project_description}</div>
                <div className="more-details">
                  {post.project_technologies && (
                    <div className="project-info">
                      <span> Stacks:</span> {post.project_technologies}
                    </div>
                  )}
                  {post.other_tools && (
                    <div className="project-info">
                      <span> Other Tools:</span> {post.other_tools}
                    </div>
                  )}
                  {post.project_link && (
                    <div className="project-info">
                      <span> EXplore: </span>
                      <Link href={post.project_link}>
                        {post.project_name}
                        <Icon.TbArrowUpRight size={20} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="post-title">More Work</div>
          <WorkList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
