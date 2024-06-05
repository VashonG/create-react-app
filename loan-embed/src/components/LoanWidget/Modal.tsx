import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled(motion.div)`
  position: fixed;
  background: white;
  width: 100%;
  max-width: 400px;
  bottom: 0;
  @media (min-width: 768px) {
    right: 0;
    top: 0;
    bottom: 0;
  }
  z-index: 1000;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContent
        initial={{ x: '100%', y: '0%' }}
        animate={{ x: isOpen ? '0%' : '100%', y: isOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Loan Details</h2>
        <p>Details about the loan will go here...</p>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
