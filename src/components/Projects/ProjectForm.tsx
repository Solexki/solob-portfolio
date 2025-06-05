import React from "react";
import Icon from "../Common/Icon";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";
import ImageUploader from "../Common/ImageUloaderInput";

type ProjectFormProps = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  handleOnChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleOnSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formData?: {
    project_name: string;
    project_tag: string;
    project_description: string;
    project_image: string[];
    project_link: string;
    project_github: string;
    project_technologies: string;
    project_status: string;
    project_db?: string;
    other_tools?: string;
    project_logo: string;
  };
};

const ProjectForm = (props: ProjectFormProps) => {
  const { showForm, setShowForm, handleOnChange, formData, handleOnSubmit } =
    props;
  const handleImageUpload = (urls: string[]) => {
    if (formData) {
      formData.project_image = urls;
    }
  };

  const handleLogoUpload = (urls: string[]) => {
    if (formData) {
      formData.project_logo = urls[0];
    }
  };

  return (
    <div>
      <div className="guest-book-form">
        <div
          className="guesst-book-trigger"
          onClick={() => setShowForm(!showForm)}
        >
          PROJECT FORM <Icon.HiChevronDown size={30} />
        </div>
        {showForm && (
          <form className="form-content" onSubmit={handleOnSubmit}>
            <Input
              title="Name:"
              name="project_name"
              value={formData?.project_name || ""}
              required
              onChange={handleOnChange}
            />
            <Input
              title="Tag:"
              name="project_tag"
              value={formData?.project_tag || ""}
              required
              onChange={handleOnChange}
            />
            <Input
              title="Link:"
              name="project_link"
              value={formData?.project_link || ""}
              required
              onChange={handleOnChange}
            />
            <ImageUploader
              onUploadComplete={handleLogoUpload}
              title="Project Logo"
            />
            <Input
              title="Stack:"
              name="project_technologies"
              value={formData?.project_technologies || ""}
              required
              onChange={handleOnChange}
            />
            <Input
              title="Other Tools:"
              name="other_tools"
              value={formData?.other_tools || ""}
              onChange={handleOnChange}
            />
            <Input
              title="DB:"
              name="project_db"
              value={formData?.project_db || ""}
              onChange={handleOnChange}
            />
            <ImageUploader
              onUploadComplete={handleImageUpload}
              title="Project Images"
            />
            <TextArea
              name="project_description"
              value={formData?.project_description || ""}
              required
              onChange={handleOnChange}
              title="Description:"
            />
            <button disabled={!formData?.project_image.length} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
