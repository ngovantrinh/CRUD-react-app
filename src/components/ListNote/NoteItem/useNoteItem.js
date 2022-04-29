import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote, removeNote } from '../../../redux/actions/actions';

const useNoteItem = (item) => {
  const [showInput, setShowInput] = useState(false);
  const [inputContent, setInputContent] = useState(item.content);

  const dispatch = useDispatch();

  const handleChangeNewContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeNote(id));
  };

  const updateNewContent = () => {
    const newItemContent = { ...item, content: inputContent };
    console.log(newItemContent);
    dispatch(editNote(newItemContent));
  };

  return {
    showInput,
    setShowInput,
    inputContent,
    setInputContent,
    handleChangeNewContent,
    updateNewContent,
    handleRemoveItem,
  };
};

export default useNoteItem;
