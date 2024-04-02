import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const games = [
    { id: 1, title: 'Super Mario RPG', publisher: 'Nintendo', dateLaunched: '2023-11-17' },
    { id: 2, title: 'Mario VS. Donkey Kong', publisher: 'Nintendo', dateLaunched: '2024-02-16' },
    { id: 3, title: 'Donkey Kong Country: Tropical Freeze', publisher: 'Nintendo', dateLaunched: '2018-05-04' },
    { id: 4, title: 'Super Mario Bros. Wonder', publisher: 'Nintendo', dateLaunched: '2023-10-20' },
    { id: 5, title: 'Super Monkey Ball: Bannana Blitz HD', publisher: 'Sega', dateLaunched: '2019-10-29' },
    { id: 6, title: 'Mario & Sonic at the Olympic Games Tokyo 2020', publisher: 'Sega', dateLaunched: '2019-11-05' }
];

function Header() {
    return (
        <header className="App-header">
            <h2>Games that I got for my Birthday</h2>
        </header>
    );
}

function GameDisplay() {
    const [currentGame, setCurrentGame] = useState(games[0]);

    function setGame(id = "none"){
        if (id == "none") {
            setCurrentGame(games[Math.Floor(Math.random() * 6)]);
        } else if (id >= 0 && id < 6) {
            setCurrentGame(games[id - 1]);
        }
    }

    return (
        <>
            <div id="game">
                <h2>{currentGame.title}</h2>
            </div>
            <div>
                <input id="gameID" type="text" placeholder="Type an id here (1 through 6):"></input>
                <button onClick={setGame(Number(document.getElementById("gameID")) - 1)}>Set Game to current ID</button>
                <button onClick={setGame}>Randomize Game Shown</button>
            </div>
        </>
    );
}

function MagicButton() {
    const [count, setCount] = useState(0);
    function doMagic() {
        setCount(count + 1);
        alert('Are you not entertained?');
    }

    return (
        <button onClick={doMagic}>
            Magic {count} times
        </button>
    );
}

function ShamelessPlug() {
    return (
        <p>I've been working on this GameDisplay thing for so long, please check out my portfolio: <a href="https://shawnporto-portfolio.netlify.app/">Right Here</a>
        </p>
    );
}

function App() {
  return (

    <div className="App">
          <header className="App-header">
              <GameDisplay />
              <ShamelessPlug />
              <MagicButton />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
              <p>
                  Or check out my&nbsp;
                  <a href="https://shawnporto-portfolio.netlify.app/">
                      Portfolio
                  </a>
              </p>
              <p> With love and Care,</p>
              <p>Shawn</p>
      </header>
    </div>
  );
}

export default App;
