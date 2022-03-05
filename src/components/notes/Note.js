import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';

const DeleteIcon = styled(MdDeleteForever)`
  cursor: pointer;
  padding: 10px;
  margin: -10px;
`;

const Note = ({ id, text, date, onDeleteNote }) => {
  const transformedDate = date.split('-');
  const localeDate = `${transformedDate[0]}年${transformedDate[1]}月${transformedDate[2]}日`;

  const deleteClickHandler = () => {
    onDeleteNote(id);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{localeDate}</small>
        <DeleteIcon size="1.3rem" onClick={deleteClickHandler} title="Delete" />
      </div>
    </div>
  );
};

export default Note;
