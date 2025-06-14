import React from "react";

type TextAreaProps = {
  name: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  title?: string;
};
const TextArea = (props: TextAreaProps) => {
  const { name, value, required = false, onChange, title } = props;
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{title}</label>
        <textarea
          rows={4}
          id={name}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
