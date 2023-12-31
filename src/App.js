import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Content />
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
