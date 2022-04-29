import { ADD_NEW_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actions/action.type';

const initState = [
  {
    id: 1,
    content: 'note 1',
  },
  { id: 2, content: 'note 2' },
  { id: 3, content: 'note 3' },
];

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const randomId = Math.random();
      const newState = [...state, { id: randomId, content: action.payload }];
      state = newState;
      return state;

    case REMOVE_NOTE:
      state = state.filter((note) => {
        if (note.id === action.payload) {
          return false;
        }
        return true;
      });
      return state;

    case EDIT_NOTE:
      console.log(action.payload);
      state = state.filter((note) => {
        if (note.id === action.payload.id) {
          console.log(action.payload);
          return (note.content = action.payload.content);
        } else {
          return note;
        }
      });
      return state;
    default:
      return state;
  }
};

export default noteReducer;
