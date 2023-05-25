import './App.css';

function App() {
  return (
   <div className='app-wrapper'>
    <header className='header'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&usqp=CAU" alt="" />
    </header>
    <nav className='nav'>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
    <div className='main'>Main content</div>
   </div>
  );
}

export default App;
