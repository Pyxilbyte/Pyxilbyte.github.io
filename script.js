const games = {
  lab5: {
    title: "Lab 5",
    image: "images/lab5.png",
    description: "A horror game where you wake up in a lab surrounded by failed experiments.",
    download: "downloads/lab5.zip"
  },

  epicSoundEffects: {
    title: "Epic Sound Effects",
    image: "images/epic-sound-effects.png",
    description: "A funny game where a phone alarm chases the player.",
    download: "downloads/epic-sound-effects.zip"
  },
 
 forestEscape: {
    title: "Forest Escape",
    image: "images/forest-escape.png",
    description: "You are in a forest, looking for an exit.",
    download: "downloads/forest-escape.zip"
  },

 survivetheSeeker: {
    title: "Survive the Seeker",
    image: "images/survive-the-seeker.png",
    description: "Survive the seeker in a hotel!",
    download: "https://pyxilbyte.itch.io/survive-the-seeker"
  }
};

const gamesList = document.getElementById("games-list");

if (gamesList) {
  for (const id in games) {
    const game = games[id];

    gamesList.innerHTML += `
      <a class="game-card" href="game.html?id=${id}">
        <img src="${game.image}" alt="${game.title}">
        <h2>${game.title}</h2>
      </a>
    `;
  }
}

const gameDetails = document.getElementById("game-details");

if (gameDetails) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const game = games[id];

  if (game) {
    gameDetails.innerHTML = `
      <section class="details">
        <img src="${game.image}" alt="${game.title}">
        <h1>${game.title}</h1>
        <p>${game.description}</p>
        <a class="button" href="${game.download}" download>Download ZIP</a>
      </section>
    `;
  } else {
    gameDetails.innerHTML = "<h1>Game not found</h1>";
  }
}