import React from "react";
import Icon from "../Common/Icon";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";

type GustBookProps = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  handleOnChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleOnSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formData?: {
    name: string;
    url: string;
    organization: string;
    message: string;
    avater_url: string;
    date?: string;
  };
  submitting: boolean;
};

const GuestForm = (props: GustBookProps) => {
  const {
    showForm,
    setShowForm,
    handleOnChange,
    formData,
    handleOnSubmit,
    submitting,
  } = props;

  return (
    <div>
      <div className="guest-book-form">
        <div
          className="guesst-book-trigger"
          onClick={() => setShowForm(!showForm)}
        >
          GUSTBOOK FORM <Icon.HiChevronDown size={30} />
        </div>
        {showForm && (
          <form className="form-content" onSubmit={handleOnSubmit}>
            <p>Fill in this form and i will add it to guestbook entry 🔥</p>

            <Input
              onChange={handleOnChange}
              name="name"
              required
              title="Name:"
              value={formData?.name || ""}
            />
            <Input
              title="URL(site,etc):"
              name="url"
              value={formData?.url || ""}
              onChange={handleOnChange}
            />
            <Input
              title="Organization:"
              name="organization"
              value={formData?.organization || ""}
              onChange={handleOnChange}
            />
            <Input
              title="Avater Url:"
              name="avater_url"
              value={formData?.avater_url || ""}
              onChange={handleOnChange}
            />
            <TextArea
              name="message"
              value={formData?.message || ""}
              required
              onChange={handleOnChange}
              title="Message:"
            />
            <button
              type="submit"
              disabled={submitting}
              className={submitting ? " loading-btn" : ""}
            >
              {submitting ? "" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GuestForm;
