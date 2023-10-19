import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Dorier</h1>
        <nav>
          <button>MENU</button>
        </nav>
      </header>

      <main>
        <section className="intro">
          <h2>WE DESIGN</h2>
          <h1>EVENT & AUDIOVISUAL EXPERIENCES</h1>
          <p>SCROLL DOWN TO START</p>
          <div className="scroll-indicator">⌄</div>
        </section>
      </main>
    </div>
  );
}

export default App;