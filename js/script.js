function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/Avatar-oculos.png");
    img.setAttribute(
      "alt",
      "Foto de Ana Carolina, usando um óculos de sol, no estilo pixel art feito pelo Gemini do Google"
    );
  } else {
    img.setAttribute("src", "assets/Avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Ana Carolina no estilo pixel art feito pelo Gemini do Google"
    );
  }
}
