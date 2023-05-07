
import './App.css';
import Header from './components/Header/Header';
import About from './page/About';
import Home from './page/Home/Home';
import Menu from './page/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Menu />
    </div>
  );
}

export default App;
