import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'

export type Session = {
  loginUser?: {id: number, name: string} | null;
  cart: {id: number, name: string, price: number}[];
}
const SampleSession: Session = {
  loginUser: { id: 1, name: 'Sunny' },
  cart: [
    { id: 100, name: 'cookie', price: 1 },
    { id: 101, name: 'coffee', price: 2 },
    { id: 200, name: 'flower', price: 3 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  return (
    <>
      <Hello name='Sunny' point={count}>
        <strong>c</strong>
      </Hello>

      {session.loginUser?.name}
      <button 
        onClick={() => {
        // session.loginUser = null;
          setSession({ ...session, loginUser: null });
        }}>
          Logout
        </button>

      <button onClick={() => setCount((count) => count +1)}>
        count is {count}
      </button>
    </>
  );
}

export default App
