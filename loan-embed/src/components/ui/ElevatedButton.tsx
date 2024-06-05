import React, { ReactNode, MouseEvent } from "react";
import { Button } from '@cred/neopop-web/lib/components';

interface CustomButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
  fullWidth?: boolean;
  variant: string; // Add the variant property
  kind?: string;
  // You can add more props here if needed, based on the usage of Button component
}

const CustomButton: React.FC<CustomButtonProps> = ({ children }) => {
  return (
    <Button
      variant="primary"
      fullWidth={true}
      kind="elevated"
      size="big"
      colorMode="dark"
      onClick={function noRefCheck() {}}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
