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
    let iAmSad = "am sad"
    if (iAmSad === "am sad") {
        console.log("Sadly, I'm sad");
    }
    return (
        <header className="App-header">
            <h2>Games that I got for my Birthday:</h2>
        </header>
    );
}

function GameDisplay() {
    const listGames = games.map(game =>
        <li key={game.id}>
            {game.title}
        </li>
    );
    return (
        <ul>{listGames}</ul>
    )
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
        <Header/>
        <GameDisplay />
          <ShamelessPlug />
          <br></br>
          <p>I will be honest, the site was supposed to look better than this, but I really couldn't get the logic to work, I tried wayyyy to hard to have first state across multiple functions, which didn't work without a parent function. But then I tried to pass an argument through a react function, it wouldn't allow me, and apparently there are answers online for all of these, but none of them worked on this project. Now it's 11:39, so I'm just gonna turn this in, have a good Day</p>
    </div>
  );
}

export default App;
