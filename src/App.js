import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './component/Footer';
import Nav from './component/Nav';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <div className="splash-screen"><img className='splash-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCyfEDiz6cP9FNO5wx4KxIf6IPjpYLYpyQub2qBq3udG-oDIEFZpsf9QqDwCYXEfKGg&usqp=CAU"/></div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
