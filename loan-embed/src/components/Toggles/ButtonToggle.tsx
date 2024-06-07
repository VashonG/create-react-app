import React from "react";

interface ButtonTogglesProps {
  onVariantChange: () => void;
  onKindChange: () => void;
}

const ButtonToggles: React.FC<ButtonTogglesProps> = ({ onVariantChange, onKindChange }) => {
  return (
    <div>
      <h2>Button Properties</h2>
      <button onClick={onVariantChange}>Toggle Variant</button>
      <button onClick={onKindChange}>Toggle Kind</button>
    </div>
  );
};

export default ButtonToggles;
