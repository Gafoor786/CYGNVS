import { useState } from "react";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  field: {
    marginBottom: '10px',
  },
  rightBtn: {
    display: "flex",
    justifyContent: "flex-end"
  }
});
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const classes = useStyles()
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField className={classes.field} id="outlined-multiline-flexible" label="Comments" multiline
        maxRows={2} variant="outlined" value={text} fullWidth required
        onChange={(e) => setText(e.target.value)} gutterBottom />
        <Button variant="contained" className={classes.rightBtn} disabled={isTextareaDisabled} gutterBottom>Comment</Button>
      
      {/* <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button> */}
      {hasCancelButton && (/* 
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button> */
        <Button variant="contained" disabled={isTextareaDisabled} onClick={handleCancel} gutterBottom>Cancel</Button>
      )}
    </form>
  );
};

export default CommentForm;
