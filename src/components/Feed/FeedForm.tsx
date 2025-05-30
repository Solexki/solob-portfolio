import React from "react";
import Icon from "../Common/Icon";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";

type FeedFormProps = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  handleOnChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleOnSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formData?: {
    post_tag: string;
    post_title: string;
    message: string;
    post_image: string;
  };
};

const FeedForm = (props: FeedFormProps) => {
  const { showForm, setShowForm, handleOnChange, formData, handleOnSubmit } =
    props;

  return (
    <div>
      <div className="guest-book-form">
        <div
          className="guesst-book-trigger"
          onClick={() => setShowForm(!showForm)}
        >
          FEED FORM <Icon.HiChevronDown size={30} />
        </div>
        {showForm && (
          <form className="form-content" onSubmit={handleOnSubmit}>
            <Input
              title="Tag:"
              name="post_tag"
              value={formData?.post_tag || ""}
              required
              onChange={handleOnChange}
            />
            <Input
              title="Title:"
              name="post_title"
              value={formData?.post_title || ""}
              required
              onChange={handleOnChange}
            />

            <Input
              title="Image:"
              name="post_image"
              value={formData?.post_image || ""}
              required
              onChange={handleOnChange}
            />
            <TextArea
              name="message"
              value={formData?.message || ""}
              required
              onChange={handleOnChange}
              title="Message:"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedForm;
