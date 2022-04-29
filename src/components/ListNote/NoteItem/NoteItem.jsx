import React, { useMemo } from 'react';
import './NoteItem.css';
import useNoteItem from './useNoteItem';

const NoteItem = ({ item }) => {
  const {
    showInput,
    setShowInput,
    updateNewContent,
    handleRemoveItem,
    handleChangeNewContent,
    inputContent,
  } = useNoteItem(item);

  const editContent = useMemo(() => {
    if (showInput) {
      return (
        <textarea
          className="edit-input"
          value={inputContent}
          onChange={handleChangeNewContent}
          cols="30"
          rows="10"
        ></textarea>
      );
    } else {
      return <p key={item.id}>{item.content}</p>;
    }
  }, [showInput, item, inputContent, handleChangeNewContent]);

  return (
    <div className="wrap-list">
      <div className="note-item">
        {editContent}
        <div className="btn-box" on>
          <button
            className="remove-item"
            onClick={() => {
              setShowInput(!showInput);
              updateNewContent();
            }}
          >
            {showInput ? 'Lưu' : 'Sửa'}
          </button>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="remove-item"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
