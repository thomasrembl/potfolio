// Icon.tsx
import React from "react";

interface IconProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  color = "white",
}) => {
  return (
    <div style={{ color: color }}>
      <IconComponent />
    </div>
  );
};

export default Icon;
