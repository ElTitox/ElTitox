export default async function handler(req, res) {
  // 1. Nombres exactos de los GIFs que tienes en tu carpeta "images"
  const gifs = [
    "computer.gif",
    "mc1.gif",
    "mc2.gif",
    "mc3.gif",
    "mc4.gif",
    "mc5.gif",
    "bg1.gif"// Agrega todos los que quieras aquí
  ];

  // 2. Elegir uno al azar
  const gifElegido = gifs[Math.floor(Math.random() * gifs.length)];

  // 3. Ruta "raw" (cruda) a tus imágenes en GitHub
  // Nota: Si tu rama principal se llama "master" en vez de "main", cámbialo abajo.
  const githubUrl = `https://raw.githubusercontent.com/ElTitox/ElTitox/main/images/${gifElegido}`;

  try {
    // 4. Descargar la imagen de GitHub
    const response = await fetch(githubUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 5. Enviar la imagen bloqueando el caché estricto de GitHub (Camo)
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.send(buffer);
  } catch (error) {
    res.status(500).send("Error al cargar el GIF");
  }
}