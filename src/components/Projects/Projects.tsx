import ProjectsForm from "./ProjectForm";
import useProject from "../Hooks/useProject";
import SkeletonLoader from "../Common/SkeletonLoader";
import Icon from "../Common/Icon";
import defaultImages from "../Common/defaultImages";

type ProjectsProps = {
  isAdmin?: boolean;
};
const Projects = (props: ProjectsProps) => {
  const { isAdmin } = props;

  const {
    formData,
    handleOnChange,
    handleOnSubmit,
    setShowForm,
    showForm,
    projectEmtries,
    isloading,
  } = useProject();

  type Project = {
    id: string;
    project_name?: string;
    project_tag?: string;
    project_description?: string;
    project_image?: string[];
    project_link?: string;
    project_github?: string;
    project_technologies?: string;
    project_status?: string;
    project_logo?: string;
    date?: string;
  };

  // const projects: Project[] = [
  //   {
  //     id: 1,
  //     name: "Portfolio Website",
  //     description:
  //       "A personal portfolio website showcasing my projects and skills.",
  //     logo: "https://via.placeholder.com/150",
  //     link: "https://example.com/portfolio",
  //     tag: "Personal",
  //   },
  //   {
  //     id: 2,
  //     name: "E-commerce Store",
  //     description: "An online store for buying and selling products.",
  //     logo: "https://via.placeholder.com/150",
  //     link: "https://example.com/ecommerce",
  //     tag: "E-commerce",
  //   },
  //   {
  //     id: 3,
  //     name: "Task Manager",
  //     description: "A web app to manage daily tasks and to-do lists.",
  //     logo: "https://via.placeholder.com/150",
  //     link: "https://example.com/taskmanager",
  //     tag: "Productivity",
  //   },
  //   {
  //     id: 4,
  //     name: "Blog Platform",
  //     description: "A platform for creating and sharing blog posts.",
  //     logo: "https://via.placeholder.com/150",
  //     link: "https://example.com/blogplatform",
  //     tag: "Blogging",
  //   },
  //   {
  //     id: 5,
  //     name: "Weather App",
  //     description: "A weather forecasting app with real-time updates.",
  //     logo: "https://via.placeholder.com/150",
  //     link: "https://example.com/weatherapp",
  //     tag: "Weather",
  //   },
  //   {
  //     id: 6,
  //     name: "Chat Application",
  //     description: "A real-time chat application for seamless communication.",
  //     logo: "https://via.placeholder.com/150",
  //     link: "https://example.com/chatapp",
  //     tag: "Communication",
  //   },
  // ];
  const projects = projectEmtries.map((project) => ({
    id: project.id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_logo: project.project_logo || "",
    project_link: project.project_link,
    project_tag: project.project_tag,
    date: project.date,
    project_status: project.project_status,
    project_image: project.project_image || [""],
    project_github: project.project_github,
    project_technologies: project.project_technologies,
  }));

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.date || "2025-01-01");
    const dateB = new Date(b.date || "2025-01-01");
    return dateB.getTime() - dateA.getTime(); // Sort by date descending
  });

  const projectContent: Project[] = [...sortedProjects];

  // Render the projects
  if (isloading) {
    return <SkeletonLoader />;
  }
  return (
    <div>
      <div className="news-feed-area">
        {isAdmin && (
          <ProjectsForm
            setShowForm={setShowForm}
            showForm={showForm}
            formData={formData}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        )}

        <div className="project-note">
          <div className="project-summary">
            Click{" "}
            <a href="/projects">
              <span>Here </span>
            </a>
            To view Full project details.
          </div>
        </div>

        {projectContent.map((project) => (
          <div key={project.id} className="news-item">
            <div className="news-header">
              <img
                src={project.project_logo}
                alt={`${project.project_name} logo`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    defaultImages.profileImage;
                }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "15px",
                  top: "-8px",
                  position: "relative",
                  border: "1px solid #ccc",
                  padding: "2px",
                }}
              />
              <div className="author-name-date">
                <span>{project.project_name}</span>
              </div>
            </div>
            <div className="news-body">
              <div className="news-tag">{project.project_tag}</div>
              <div className="news-text">
                <p style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                  {project.project_description}
                </p>
                {project.project_image && (
                  <div className="feed-image">
                    <img
                      src={project.project_image[0]}
                      alt={`${project.project_name}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/150";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="action-btn">
              <Icon.FaLink size={20} />
              <span className="project-link-icon">
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
