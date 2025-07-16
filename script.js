const grid = document.getElementById("grid");

// Definimos categorías de asignaturas y sus colores
const categorias = {
  "Matemática": "#ffe3d8",     // Rosa naranja
  "Lenguaje": "#ffdcd8",       // Naranja claro
  "Ciencias": "#ffd6e8",       // Rosa claro
  "Formación práctica": "#e1d8ff", // Lavanda
  "Inclusión y diversidad": "#d8f3dc", // Verde menta
  "Investigación": "#fefae0",  // Amarillo crema
  "General": "#f8ead4",        // Beige suave
  "Idioma": "#d4edf8",         // Celeste
  "Pedagogía": "#f8d4e3"       // Rosa pálido
};

// Relación materia-categoría
const mapaCategorias = {
  // SEMESTRE 1
  "Literatura Infantil": "Pedagogía",
  "Psicología del desarrollo y neurociences": "Pedagogía",
  "Creatividad y juego": "Pedagogía",
  "Expresión y apreciación artística": "Pedagogía",
  "Adquisición del lenguaje": "Lenguaje",
  "Curriculum en la Educación Parvularia": "Pedagogía",
  "Construcción de la identidad profesional docente": "Pedagogía",
  "Inglés General I": "Idioma",

  // SEMESTRE 2
  "Identidad y autonomía para el desarrollo socioemocional": "Pedagogía",
  "Psicología del aprendizaje": "Pedagogía",
  "Desarrollo del lenguaje": "Lenguaje",
  "Evaluación para el Aprendizaje 1": "Pedagogía",
  "Curso de Formación General": "General",
  "Inglés General II": "Idioma",

  // SEMESTRE 3
  "Psicomotricidad Infantil": "Pedagogía",
  "Pensamiento matemático en la infancia": "Matemática",
  "Ciudadanía y convivencia infantil en contextos diversos": "Inclusión y diversidad",
  "Estrategias de apoyo para la inclusión": "Inclusión y diversidad",
  "Curso de Formación General.": "General",
  "Inglés General III": "Idioma",

  // SEMESTRE 4
  "Formación Práctica 1: Nivel Sala Cuna": "Formación práctica",
  "Construcción del conocimiento matemático 1: Aditivos y patrones": "Matemática",
  "Alfabetización emergente": "Lenguaje",
  "Derechos de la niñez y rol de las familias": "Inclusión y diversidad",
  "Curso de Formación General. ": "General",

  // SEMESTRE 5
  "Formación Práctica 2: Niveles Medios / Transición": "Formación práctica",
  "Construcción del conocimiento matemático 2: Formas y espacios": "Matemática",
  "Exploración de la naturaleza y el medio ambiente": "Ciencias",
  "Comprensión del mundo sociocultural": "Pedagogía",
  "Evaluación para el Aprendizaje 2": "Pedagogía",

  // SEMESTRE 6
  "Formación Práctica 3: Niveles Medios / Transición": "Formación práctica",
  "Proyecto de Investigación en contextos educativos": "Investigación",
  "Gestión de aulas inclusivas e interculturales en Educ. Parvularia": "Inclusión y diversidad",
  "Electivo de Facultad": "General",

  // SEMESTRE 7
  "Práctica Profesional 1": "Formación práctica",
  "Metodología de Investigación en contexto educativo": "Investigación",
  "Seminario de título": "Investigación",

  // SEMESTRE 8
  "Práctica Profesional 2": "Formación práctica",
  "Políticas Públicas y Liderazgo": "General",
  "Curso de Formación General": "General"
};

// Datos por semestre
const semestres = [
  // SEMESTRE 1
  [
    "Literatura Infantil",
    "Psicología del desarrollo y neurociences",
    "Creatividad y juego",
    "Expresión y apreciación artística",
    "Adquisición del lenguaje",
    "Curriculum en la Educación Parvularia",
    "Construcción de la identidad profesional docente",
    "Inglés General I"
  ],
  // SEMESTRE 2
  [
    "Identidad y autonomía para el desarrollo socioemocional",
    "Psicología del aprendizaje",
    "Desarrollo del lenguaje",
    "Evaluación para el Aprendizaje 1",
    "Curso de Formación General",
    "Inglés General II"
  ],
  // SEMESTRE 3
  [
    "Psicomotricidad Infantil",
    "Pensamiento matemático en la infancia",
    "Ciudadanía y convivencia infantil en contextos diversos",
    "Estrategias de apoyo para la inclusión",
    "Curso de Formación General.",
    "Inglés General III"
  ],
  // SEMESTRE 4
  [
    "Formación Práctica 1: Nivel Sala Cuna",
    "Construcción del conocimiento matemático 1: Aditivos y patrones",
    "Alfabetización emergente",
    "Derechos de la niñez y rol de las familias",
    "Curso de Formación General. "
  ],
  // SEMESTRE 5
  [
    "Formación Práctica 2: Niveles Medios / Transición",
    "Construcción del conocimiento matemático 2: Formas y espacios",
    "Exploración de la naturaleza y el medio ambiente",
    "Comprensión del mundo sociocultural",
    "Evaluación para el Aprendizaje 2"
  ],
  // SEMESTRE 6
  [
    "Formación Práctica 3: Niveles Medios / Transición",
    "Proyecto de Investigación en contextos educativos",
    "Gestión de aulas inclusivas e interculturales en Educ. Parvularia",
    "Electivo de Facultad"
  ],
  // SEMESTRE 7
  [
    "Práctica Profesional 1",
    "Metodología de Investigación en contexto educativo",
    "Seminario de título"
  ],
  // SEMESTRE 8
  [
    "Práctica Profesional 2",
    "Políticas Públicas y Liderazgo",
    "Curso de Formación General"
  ]
];

// Colores alternados por semestre
const coloresSemestres = ["#fff0f7", "#ffe3ec", "#ffd6e2", "#ffc9d8", "#ffbadf", "#ffadd6", "#ff9fcc", "#ff90c2"];

// Crear malla
semestres.forEach((materias, indiceSemestre) => {
  const contenedorColumna = document.createElement("div");
  contenedorColumna.classList.add("column");
  contenedorColumna.style.backgroundColor = coloresSemestres[indiceSemestre];
  contenedorColumna.style.borderRadius = "8px";
  contenedorColumna.style.padding = "10px";

  const titulo = document.createElement("h3");
  titulo.textContent = `Semestre ${indiceSemestre + 1}`;
  contenedorColumna.appendChild(titulo);

  materias.forEach(materia => {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const categoria = mapaCategorias[materia] || "General";
    cell.style.backgroundColor = categorias[categoria];
    cell.textContent = materia;

    cell.addEventListener("click", () => {
      if (cell.style.textDecoration === "line-through") {
        cell.style.textDecoration = "none";
        cell.style.backgroundColor = categorias[categoria];
      } else {
        cell.style.textDecoration = "line-through";
        cell.style.backgroundColor = "#d0f0c0";
      }
    });

    const input = document.createElement("input");
    input.placeholder = "Comentario...";
    input.classList.add("comment-box");

    contenedorColumna.appendChild(cell);
    contenedorColumna.appendChild(input);
  });

  grid.appendChild(contenedorColumna);
});
