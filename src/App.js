import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';

function App() {
  return (
   <div className='app-wrapper'>
    <Header />
    <Sidebar />
    <Profile />
   </div>
  );
}

export default App;
