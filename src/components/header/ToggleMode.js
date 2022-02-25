import React from 'react';
import classes from './ToggleMode.module.css';

const ToggleMode = ({ onToggleDarkMode }) => {
  return (
    <button className={classes.button} onClick={onToggleDarkMode}>
      Toggle Mode
    </button>
  );
};

export default ToggleMode;
