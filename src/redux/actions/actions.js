import { ADD_NEW_NOTE, EDIT_NOTE, REMOVE_NOTE } from './action.type';

export const addNewNote = (content) => {
  return {
    type: ADD_NEW_NOTE,
    payload: content,
  };
};
export const removeNote = (id) => {
  return {
    type: REMOVE_NOTE,
    payload: id,
  };
};
export const editNote = (item) => {
  return {
    type: EDIT_NOTE,
    payload: item,
  };
};
