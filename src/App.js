
import React,{useEffect, useState} from "react";
import './App.css';
function App() {
  const[theme,setTheme]=useState(()=>{
    return localStorage.getItem('theme') || 'light';
    })

    const toggleTheme=()=>{
      setTheme(prev=>(prev==="light"?"dark":"light"));
    };
    useEffect(() => {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
      }
    }, [theme]);
  return (
    <div className="App">
      <h1>{theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}</h1>
      <button onClick={()=>toggleTheme()}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;
