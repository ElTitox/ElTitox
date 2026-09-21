export default function handler(req, res) {
  // 1. Place the names of the GIFs in the "images/gifs" folder
  const gifs = [
    "mc1.gif",
    "mc2.gif",
    "mc3.gif",
    "mc4.gif",
    "mc5.gif",
    "bg1.gif",
    "cat-eating-chips.gif",
    "cat.gif",
    "cat2.gif",
    "photography.gif",
    "night.gif",
    "car.gif",
    "car2.gif",
    "citynight.gif"
  ];

  // 2.
  const gifElegido = gifs[Math.floor(Math.random() * gifs.length)];

  // 3.
  const githubUrl = `https://raw.githubusercontent.com/ElTitox/ElTitox/main/images/gifs/${gifElegido}`;

  // 4.
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.redirect(302, githubUrl);
}