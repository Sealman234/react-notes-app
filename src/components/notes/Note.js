import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdDeleteForever } from 'react-icons/md';

import { deleteNote } from '../../store/note-actions';

const StyledNote = styled.div`
  background-color: #fff375;
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

  &:hover {
    box-shadow: 0 3px 5px rgb(0 0 0 / 20%);
    transition: box-shadow 0.2s;
  }

  .title {
    font-weight: bold;
    line-height: 1.5rem;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 4px;
    padding-bottom: 12px;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  svg {
    vertical-align: middle;
  }
`;

const Note = ({ id, title, description, date, onOpenModal }) => {
  const dispatch = useDispatch();

  const transformedDate = date.split('-');
  const localeDate = `${transformedDate[0]}年${transformedDate[1]}月${transformedDate[2]}日`;

  const deleteClickHandler = (event) => {
    event.stopPropagation();
    dispatch(deleteNote(id));
  };

  const modalOpenHandler = (event) => {
    onOpenModal({ id, title, description, date });
  };

  return (
    <StyledNote onClick={modalOpenHandler}>
      <div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="note-footer">
        <small>建立時間：{localeDate}</small>
        <DeleteButton onClick={deleteClickHandler}>
          <MdDeleteForever size="1.3rem" title="Delete" />
        </DeleteButton>
      </div>
    </StyledNote>
  );
};

export default Note;
