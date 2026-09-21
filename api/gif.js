export default async function handler(req, res) {
  // -- Place the names of the GIFs in the "images/gifs" folder --
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

  const gifSelected = gifs[Math.floor(Math.random() * gifs.length)];
  const githubUrl = `https://raw.githubusercontent.com/ElTitox/ElTitox/main/images/gifs/${gifSelected}`;

  try {
    const response = await fetch(githubUrl);
    
    if (!response.ok) throw new Error("Fallo al descargar de GitHub");
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=0, no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    res.status(200).send(buffer);
  } catch (error) {
    res.status(500).send("Error al cargar el GIF");
  }
}