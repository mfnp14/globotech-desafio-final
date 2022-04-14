import React from "react";
import { GenericButtonContainer } from "./styles";

interface GenericButtonProps {
  label?: string | number;
  primary?: boolean;
  secondary?: boolean;
  link?: boolean;
  disabled?: boolean;
  onclick?: () => void;
  type?: "button" | "submit" | "reset";
  title?: string;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  primary,
  secondary,
  link,
  disabled,
  onclick,
  type,
  title,
}) => {
  return (
    <GenericButtonContainer>
      <button
        type={type || "button"}
        className={`
          ${primary ? "primary" : ""}
          ${secondary ? "secondary" : ""}
          ${link ? "link" : ""}
        `}
        disabled={disabled}
        onClick={onclick}
        title={title}
      >
        {label && <span className="label">{label}</span>}
      </button>
    </GenericButtonContainer>
  );
};

export default GenericButton;
