import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { uiActions } from '../../store/ui-slice';

import EditingNote from '../notes/EditingNote';
import Backdrop from './Backdrop';

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`;

const ModalOverlay = ({ id, title, description, date }) => {
  return (
    <StyledModalOverlay>
      <EditingNote
        id={id}
        title={title}
        description={description}
        date={date}
      />
    </StyledModalOverlay>
  );
};

const NoteModal = ({ id, title, description, date }) => {
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(uiActions.SHOW_EDIT_MODAL(false));
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={modalCloseHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          id={id}
          title={title}
          description={description}
          date={date}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default NoteModal;
