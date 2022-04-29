import { useSelector } from 'react-redux';

const useListNote = () => {
  const noteItems = useSelector((state) => state.note);
  return { noteItems };
};

export default useListNote;
