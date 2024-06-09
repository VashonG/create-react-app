import React, { useState } from 'react';
import Modal from './Modal';

const HubSpotFormButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-black text-white shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Signup
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default HubSpotFormButton;
