import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const GenericInput = ({
  name,
  value,
  type,
  placeholder,
  required,
  onChange,
}: InputProps) => {
  return (
    <div>
      <input
        style={{ paddingLeft: "14px" }}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default GenericInput;
