import logo from './logo.svg';
import './App.css';

function App() {
  // This will crash the app at runtime inside the container
  throw new Error("🔴 Intentional crash to test rollback!");
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          cicd pipeline --ROLLBACK TEST 🔴
        </p>
      </header>
    </div>
  );
}

export default App;