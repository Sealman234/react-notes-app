import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';

const StyledNote = styled.div`
  background-color: #fef68a;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 保留換行與連續空格 */
  white-space: pre-wrap;
  /* 允許單字斷行 */
  word-wrap: break-word;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Note = ({ id, title, description, date, onDeleteNote }) => {
  const transformedDate = date.split('-');
  const localeDate = `${transformedDate[0]}年${transformedDate[1]}月${transformedDate[2]}日`;

  const deleteClickHandler = () => {
    onDeleteNote(id);
  };

  return (
    <StyledNote>
      <span>{title}</span>
      <span>{description}</span>
      <div className="note-footer">
        <small>{localeDate}</small>
        <DeleteButton onClick={deleteClickHandler}>
          <MdDeleteForever size="1.3rem" title="Delete" />
        </DeleteButton>
      </div>
    </StyledNote>
  );
};

export default Note;
