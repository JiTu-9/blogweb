import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
