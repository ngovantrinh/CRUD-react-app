import './App.css';
import AddNote from './components/AddNewNote/AddNote';
import ListNote from './components/ListNote/ListNote';

function App() {
  return (
    <div className="App">
      <AddNote />
      <ListNote />
    </div>
  );
}

export default App;
