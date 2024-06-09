import React, { useState } from 'react';

interface RadiusControlProps {
  onChange: (radius: number) => void;
}

const RadiusControl: React.FC<RadiusControlProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('0');

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRadius = parseInt(event.target.value);
    onChange(newRadius);
    setSelectedOption(event.target.value);
  };

  const renderOption = (value: string, label: string) => (
    <label
      className={`radio flex items-center justify-center rounded-lg p-1 cursor-pointer ${selectedOption === value ? 'peer-checked' : ''}`}
    >
      <input
        type="radio"
        name="radius"
        value={value}
        className="peer hidden"
        onChange={handleRadiusChange}
        checked={selectedOption === value}
      />
      <span
        className={`tracking-widest text-gray-700 p-2 ${selectedOption === value ? 'peer-checked:bg-gradient-to-r peer-checked:from-black peer-checked:to-black peer-checked:text-white' : ''}`}
      >
        {label}
      </span>
    </label>
  );

  return (
    <div className="flex space-x-2 border-[3px] border-black select-none">
      {renderOption('0', 'X')}
      {renderOption('10', 'SM')}
      {renderOption('20', 'MD')}
      {renderOption('30', 'LG')}
    </div>
  );
};

export default RadiusControl;
