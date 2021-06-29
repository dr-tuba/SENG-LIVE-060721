// import logo from './logo.svg';
import './App.css';

// Component Imports
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header 
          title = 'My Header Title'
          content = 'Header Content'
          isLoggedIn={false}
        />
      </div>
  );
}

export default App;
