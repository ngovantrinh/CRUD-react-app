import React from 'react';
import './ListNote.css';
import NoteItem from './NoteItem/NoteItem';
import useListNote from './useListNote';

const ListNote = () => {
  const { noteItems } = useListNote();
  //   const noteItems = useSelector((state) => state.note);
  return (
    <div className="note-list">
      {noteItems.map((item) => (
        <NoteItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListNote;
