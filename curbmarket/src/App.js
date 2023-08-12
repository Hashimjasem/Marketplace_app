import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import Liked from './pages/Liked';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
    <main>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/createpost" element={<CreatePost/>}/> 
        <Route path="/liked" element={<Liked/>}/> 
        <Route path="/messages" element={<Messages/>}/> 
      </Routes>
    </Layout>
    </main>
    </BrowserRouter>
  );
}

export default App;
