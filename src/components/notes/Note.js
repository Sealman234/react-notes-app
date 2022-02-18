import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date }) => {
  const transformedDate = date.split('-');
  const localeDate = `${transformedDate[0]}年${transformedDate[1]}月${transformedDate[2]}日`;

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{localeDate}</small>
        <MdDeleteForever size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
