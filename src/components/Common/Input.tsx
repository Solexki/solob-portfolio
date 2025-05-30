import React from "react";

type InputProps = {
  name: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
};
const Input = (props: InputProps) => {
  const { name, value, required = false, onChange, title } = props;
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{title}</label>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
