// src/components/IconUploader/IconUploader.tsx
import React, { useState } from 'react';

interface IconUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}

const IconUploader: React.FC<IconUploaderProps> = ({ onImageUpload }) => {
  const [fileSize, setFileSize] = useState<string>('0.00 MB');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const img = new Image();
          img.src = reader.result as string;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 38;
            canvas.height = 38;
            if (ctx) {
              ctx.drawImage(img, 0, 0, 38, 38);
              const resizedImageUrl = canvas.toDataURL('image/png');
              onImageUpload(resizedImageUrl);
            }
          };
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="group relative">
        Upload Icon
      <label
        className="bg-white w-10 h-10 flex justify-center items-center rounded-lg hover:text-blue-600 hover:translate-y-1 hover:duration-300 cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
      <span
        className="absolute w-20 text-center -bottom-12 left-[50%] -translate-x-[50%] origin-bottom tracking-wider z-20 scale-0 px-1 rounded-lg bg-white text-blue-600 py-2 text-sm transition-all duration-300 ease-in-out group-hover:scale-100"
      >
        {fileSize}
      </span>
    </div>
  );
};

export default IconUploader;
