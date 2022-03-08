import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editNote } from '../../store/note-actions';
import { uiActions } from '../../store/ui-slice';

import AutoResizeTextarea from '../UI/AutoResizeTextarea';
import SaveButton from '../UI/SaveButton';

const StyledEditingNote = styled.div`
  width: calc(100% - 32px);
  max-width: 600px;
  margin: 16px auto;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 20%);
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 保留換行與連續空格 */
  white-space: pre-wrap;
  /* 允許單字斷行 */
  word-wrap: break-word;
`;

const NoteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 5px rgb(0 0 0 / 20%);
  margin: 1rem -1rem -1rem -1rem;
  padding: 0.5rem;
`;

const EditingNote = ({ id, title, description, date }) => {
  const dispatch = useDispatch();
  const [titleText, setTitleText] = useState(title);
  const [descriptionText, setDescriptionText] = useState(description);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const characterLimit = 200;

  useEffect(() => {
    // Set title height
    titleRef.current.style.height = '2.5rem';
    titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    // Set description height
    descriptionRef.current.style.height = '2.25rem';
    descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
  }, []);

  const titleChangeHandler = (event) => {
    setTitleText(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setDescriptionText(event.target.value);
    }
  };

  const saveClickHandler = () => {
    if (titleText.trim() === '' && descriptionText.trim() === '') return;
    // Patch Note
    const data = {
      title: titleText,
      description: descriptionText,
    };
    dispatch(editNote(id, data));
    setTitleText('');
    setDescriptionText('');
    titleRef.current.style.height = '2.5rem';
    descriptionRef.current.style.height = '2.25rem';
    dispatch(uiActions.SHOW_EDIT_MODAL(false));
  };

  return (
    <StyledEditingNote>
      <div>
        <AutoResizeTextarea
          textareaRef={titleRef}
          placeholder="標題"
          type="title"
          value={titleText}
          onChange={titleChangeHandler}
        />
        <AutoResizeTextarea
          textareaRef={descriptionRef}
          placeholder="新增記事..."
          type="description"
          value={descriptionText}
          onChange={descriptionChangeHandler}
        />
      </div>
      <NoteFooter>
        <small>{characterLimit - descriptionText.length} Remaining</small>
        <SaveButton onClick={saveClickHandler} />
      </NoteFooter>
    </StyledEditingNote>
  );
};

export default EditingNote;
