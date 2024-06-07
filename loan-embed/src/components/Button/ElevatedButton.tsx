import React, { ReactNode, MouseEvent } from "react";
import { Button } from '@cred/neopop-web/lib/components';

interface CustomButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  kind: "flat" | "elevated" | "link";
  fullWidth?: boolean;
  showArrow?: boolean;
  disabled?: boolean;
  size?: "big" | "medium" | "small";
  colorMode?: "dark" | "light";
  style?: React.CSSProperties;
  onClick?: () => void; // Update the onClick prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant,
  kind,
  fullWidth,
  showArrow,
  disabled,
  size,
  colorMode,
  style,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      kind={kind}
      fullWidth={fullWidth}
      showArrow={showArrow}
      disabled={disabled}
      size={size}
      colorMode={colorMode}
      style={style}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;