import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          maxWidth: '30%',  // Adjust the maximum width as needed
          maxHeight: '50vh', // Adjust the maximum height as needed
          margin: '0 auto',
          border: 'none',   // Remove border
          borderRadius: '8px',
          overflow: 'auto',
          background: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <img src={imageUrl} alt="Full size"  style={{ maxHeight:'100%', maxWidth:'100%'}}/>
    </Modal>
  );
};

export default ImageModal;
