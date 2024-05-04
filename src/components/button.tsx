// Button.tsx
import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
  size?: "lte" | "default";
  type?: "primary" | "ghost";
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  size = "default",
  type = "primary",
  text,
  icon,
  iconPosition = "left",
}) => {
  const buttonClasses = `button ${size} ${type}`;
  const iconClasses = `icon ${iconPosition}`;

  return (
    <div className={buttonClasses}>
      {icon && iconPosition === "left" && (
        <span className={iconClasses}>{icon}</span>
      )}
      <p>{text}</p>
      {icon && iconPosition === "right" && (
        <span className={iconClasses}>{icon}</span>
      )}
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["lte", "default"]),
  type: PropTypes.oneOf(["primary", "ghost"]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.element, // React Element pour l'icône
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
