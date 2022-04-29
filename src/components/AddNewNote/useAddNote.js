import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewNote } from '../../redux/actions/actions';

const useAddNote = () => {
  const [newNote, setNewNote] = useState('');
  const dispatch = useDispatch();

  const inputNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleNewNote = () => {
    dispatch(addNewNote(newNote));
    setNewNote('');
  };
  return {
    newNote,
    setNewNote,
    inputNoteChange,
    handleNewNote,
  };
};

export default useAddNote;
