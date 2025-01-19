import './App.css';
import MovieCard from './components/MovieCards'; 

function App() {


  return (
    <div className="App">
      <MovieCard movie={{title :'Harry Potter' , release :'12/05/2007'}} />
    </div>
  );
}

export default App;
