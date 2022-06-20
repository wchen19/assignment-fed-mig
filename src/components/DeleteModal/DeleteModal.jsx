import React from 'react';
import './DeleteModal.scss';

const DeleteModal = ({ user, deleteModal, deleteUser }) => {
  return (
    <div className='delete-modal'>
      <div className='title'>Delete Customer</div>
      <div className='desc'>
        Are you sure you want to delete {user.name} information
      </div>
      <div className='button'>
        <button onClick={() => deleteUser(user.id)}>Yes</button>
        <button onClick={() => deleteModal(user.name)}>No</button>
      </div>
    </div>
  );
};

export default DeleteModal;
