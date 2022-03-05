import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = () => {
  return <div>Backdrop</div>;
};

const ModalOverlay = () => {
  return <div>ModalOverlay</div>;
};

const NoteModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default NoteModal;
