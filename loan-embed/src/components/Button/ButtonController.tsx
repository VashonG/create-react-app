import React, { useState } from "react";
import CustomButton from "./ElevatedButton";
import ButtonToggles from "../Toggles/ButtonToggle";

const ButtonController: React.FC = () => {
  const [buttonVariant, setButtonVariant] = useState<"primary" | "secondary">("primary");
  const [buttonKind, setButtonKind] = useState<"flat" | "elevated" | "link">("elevated");

  const handleVariantChange = () => {
    setButtonVariant((prevVariant) => (prevVariant === "primary" ? "secondary" : "primary"));
  };

  const handleKindChange = () => {
    setButtonKind((prevKind) => {
      switch (prevKind) {
        case "flat":
          return "elevated";
        case "elevated":
          return "link";
        case "link":
          return "flat";
        default:
          return "flat";
      }
    });
  };

  return (
    <div>
      <ButtonToggles onVariantChange={handleVariantChange} onKindChange={handleKindChange} />
      <CustomButton variant={buttonVariant} kind={buttonKind} onClick={() => {}}>
        Loan Button
      </CustomButton>
    </div>
  );
};

export default ButtonController;
