
import './App.css';
import Header from './components/Header/Header';
import About from './page/About';
import Home from './page/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
