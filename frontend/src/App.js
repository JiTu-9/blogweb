import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import VideoContent from './components/contentpage/videocontent';
import BlogContent from './components/contentpage/blogcontent';
import VideoPlayer from './components/player/videoplayer';
import Login from './components/userAuthentication/login';
import Signup from './components/userAuthentication/signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/videos' Component={VideoContent}/>
        <Route path='/blogs' Component={BlogContent}/>
        <Route path='/watch' Component={VideoPlayer}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
