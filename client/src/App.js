import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  useEffect(() => {
    fetch('/movies')
    .then(r => r.json())
    .then(console.log)
  }, [])
  
  return <h1>Hello From React!</h1>
}

export default App;
