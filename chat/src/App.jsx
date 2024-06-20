import { useRef, useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Cookies from 'universal-cookie';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';


const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-Token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const handleEnterChat = () => {
    const roomName = roomInputRef.current.value.trim();
    if (roomName) {
      setRoom(roomName);
    } else {
      alert('Please enter a room name');
    }
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  const signUserOut = async () => {
      await signOut(auth);
      cookies.remove("auth-token");
      setIsAuth(false);
      setRoom(null);
  }

  return (
    <>
      {room ? (
        
          <Chat room={room} />
        
      ) : (
        <div className='room'>
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={handleEnterChat}>Enter Chat</button>
        </div>
      )}

      <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  );
}

export default App;
