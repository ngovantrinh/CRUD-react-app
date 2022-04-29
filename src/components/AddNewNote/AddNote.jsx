import React from 'react';
import './AddNote.css';
import useAddNote from './useAddNote';

const AddNote = () => {
  const { newNote, inputNoteChange, handleNewNote } = useAddNote();
  console.log('hehe');
  return (
    <div className="new-note">
      <input
        onChange={inputNoteChange}
        type="text"
        value={newNote}
        placeholder="add new note"
      />
      <button onClick={handleNewNote}>Thêm</button>
    </div>
  );
};

export default AddNote;
