import './App.css';
import PetInfo from './components/PetInfo';
function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={3} hasPet />
      <PetInfo animal="dog" age={6} ha1sPet={false} />
    </div>
  );
}

export default App;
