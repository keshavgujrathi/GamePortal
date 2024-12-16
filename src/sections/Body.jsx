import React from "react";

const games = [
  {
    image: "/assets/fox.png",
    title: "Fox Game",
    description: "A fun and challenging fox adventure game.",
    link: "https://fox-game-web-gl.vercel.app/",
  },
  {
    image: "/assets/maze.png",
    title: "Maze Game",
    description: "Navigate through intricate mazes to reach the goal.",
    link: "https://game-xi-topaz.vercel.app/",
  },
  {
    image: "/assets/snake1.png",
    title: "Snake Game",
    description: "A classic snake game with a modern twist.",
    link: "https://snake-game-eight-fawn.vercel.app/",
  },
  {
    image: "/assets/sudoku.png",
    title: "Sudoku",
    description: "Solve Sudoku puzzles to test your logical thinking.",
    link: "https://sudoku-vert-one.vercel.app/",
  },
];

const Body = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/grad.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {games.map((game, index) => (
          <a
            key={index}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded-lg text-center text-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3
              className="text-4xl font-bold mb-2" 
              style={{ fontFamily: 'Geo, sans-serif' }}
            >
              {game.title}
            </h3>
            <p>{game.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Body;
