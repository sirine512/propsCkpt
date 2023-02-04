import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName = (name) => {
    alert(`Hello ${name}!`);
  };
  return (
    <div className="App">
      <header className="App-header">
      <Profile
      fullName="Sarrah Smith"
      bio="I am a Developer"
      profession="Full Stack Developer"
      handleName={handleName}
    >
      <img src="https://st4.depositphotos.com/3396639/27946/i/600/depositphotos_279461366-stock-photo-portrait-of-successful-carefree-female.jpg"  alt="ProfilePhoto"style={{width:'350px'}}/>
    </Profile>
      </header>
    </div>
  );
}

export default App;
