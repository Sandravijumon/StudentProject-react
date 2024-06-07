import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <div>
      <AddBook/>
      <Search/>
      <Delete/>
     
    </div>
  );
}

export default App;
