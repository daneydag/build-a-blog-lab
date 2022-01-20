import React from 'react';
import Navbar from './components/nabvar';
import Photocard from './components/photocards';
import Comment from './components/comments';
import Article from './components/article';
import Site from './components/site';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <Photocard/>
      <Article/>
        <Comment/>
      <footer>
        <Site/>
      </footer>
    </div>
  );
}

export default App;
