const questions = [
  { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

  { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

  { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },

  { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

  { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

  { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },

  { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

  { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },

  { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },

  { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

  { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },

  { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },

  { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

  { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },

  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

  { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

  { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

  { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },

  { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

  { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

  { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

  { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

  { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },

  { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },

  { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
  { letter: "a", answer: "abducir", status: 0, question: "CON LA AA. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

  { letter: "b", answer: "bingo", status: 0, question: "CON LA BB. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

  { letter: "c", answer: "churumbel", status: 0, question: "CON LA CC. Niño, crío, bebé" },

  { letter: "d", answer: "diarrea", status: 0, question: "CON LA DD. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

  { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA EE. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

  { letter: "f", answer: "facil", status: 0, question: "CON LA FF. Que no requiere gran esfuerzo, capacidad o dificultad" },

  { letter: "g", answer: "galaxia", status: 0, question: "CON LA GG. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

  { letter: "h", answer: "harakiri", status: 0, question: "CON LA HH. Suicidio ritual japonés por desentrañamiento" },

  { letter: "i", answer: "iglesia", status: 0, question: "CON LA II. Templo cristiano" },

  { letter: "j", answer: "jabali", status: 0, question: "CON LA JJ. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

  { letter: "k", answer: "kamikaze", status: 0, question: "CON LA KK. Persona que se juega la vida realizando una acción temeraria" },

  { letter: "l", answer: "licantropo", status: 0, question: "CON LA LL. Hombre lobo" },

  { letter: "m", answer: "misantropo", status: 0, question: "CON LA MM. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

  { letter: "n", answer: "necedad", status: 0, question: "CON LA NN. Demostración de poca inteligencia" },

  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA ÑÑ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

  { letter: "o", answer: "orco", status: 0, question: "CON LA OO. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

  { letter: "p", answer: "protoss", status: 0, question: "CON LA PP. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

  { letter: "q", answer: "queso", status: 0, question: "CON LA QQ. Producto obtenido por la maduración de la cuajada de la leche" },

  { letter: "r", answer: "raton", status: 0, question: "CON LA RR. Roedor" },

  { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA SS. Comunidad salvadora de todo desarrollador informático" },

  { letter: "t", answer: "terminator", status: 0, question: "CON LA TT. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

  { letter: "u", answer: "unamuno", status: 0, question: "CON LA UU. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

  { letter: "v", answer: "vikingos", status: 0, question: "CON LA VV. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

  { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA WW. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

  { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA XX. Toxina bacteriana utilizada en cirujía estética" },

  { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA YY. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },

  { letter: "z", answer: "zen", status: 0, question: "CON LA ZZ. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
  { letter: "a", answer: "abducir", status: 0, question: "CON LA AAA. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },

  { letter: "b", answer: "bingo", status: 0, question: "CON LA BBB. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },

  { letter: "c", answer: "churumbel", status: 0, question: "CON LA CCC. Niño, crío, bebé" },

  { letter: "d", answer: "diarrea", status: 0, question: "CON LA DDD. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },

  { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA EEE. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },

  { letter: "f", answer: "facil", status: 0, question: "CON LA FFF. Que no requiere gran esfuerzo, capacidad o dificultad" },

  { letter: "g", answer: "galaxia", status: 0, question: "CON LA GGG. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },

  { letter: "h", answer: "harakiri", status: 0, question: "CON LA HHH. Suicidio ritual japonés por desentrañamiento" },

  { letter: "i", answer: "iglesia", status: 0, question: "CON LA III. Templo cristiano" },

  { letter: "j", answer: "jabali", status: 0, question: "CON LA JJJ. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },

  { letter: "k", answer: "kamikaze", status: 0, question: "CON LA KKK. Persona que se juega la vida realizando una acción temeraria" },

  { letter: "l", answer: "licantropo", status: 0, question: "CON LA LLL. Hombre lobo" },

  { letter: "m", answer: "misantropo", status: 0, question: "CON LA MMM. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },

  { letter: "n", answer: "necedad", status: 0, question: "CON LA NNN. Demostración de poca inteligencia" },

  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA ÑÑÑ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },

  { letter: "o", answer: "orco", status: 0, question: "CON LA OOO. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },

  { letter: "p", answer: "protoss", status: 0, question: "CON LA PPP. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },

  { letter: "q", answer: "queso", status: 0, question: "CON LA QQQ. Producto obtenido por la maduración de la cuajada de la leche" },

  { letter: "r", answer: "raton", status: 0, question: "CON LA RRR. Roedor" },

  { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA SSS. Comunidad salvadora de todo desarrollador informático" },

  { letter: "t", answer: "terminator", status: 0, question: "CON LA TTT. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },

  { letter: "u", answer: "unamuno", status: 0, question: "CON LA UUU. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },

  { letter: "v", answer: "vikingos", status: 0, question: "CON LA VVV. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },

  { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA WWW. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },

  { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA XXX. Toxina bacteriana utilizada en cirujía estética" },

  { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA YYY. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },

  { letter: "z", answer: "zen", status: 0, question: "CON LA ZZZ. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }
]

const players = [
  { player: 1, name: "Jordi", hits: 24, fail: 3 },
  { player: 2, name: "Julia", hits: 5, fail: 22 },
  { player: 3, name: "Manu", hits: 12, fail: 15 },
  { player: 4, name: "Cristina", hits: 7, fail: 20 },
];
function buildRosco() {
  return {
    letters: {
      a: getRandomQuestion("a"),
      b: getRandomQuestion("b"),
      c: getRandomQuestion("c"),
      d: getRandomQuestion("d"),
      e: getRandomQuestion("e"),
      f: getRandomQuestion("f"),
      g: getRandomQuestion("g"),
      h: getRandomQuestion("h"),
      i: getRandomQuestion("i"),
      j: getRandomQuestion("j"),
      k: getRandomQuestion("k"),
      l: getRandomQuestion("l"),
      m: getRandomQuestion("m"),
      n: getRandomQuestion("n"),
      "ñ": getRandomQuestion("ñ"),
      o: getRandomQuestion("o"),
      p: getRandomQuestion("p"),
      q: getRandomQuestion("q"),
      r: getRandomQuestion("r"),
      s: getRandomQuestion("s"),
      t: getRandomQuestion("t"),
      u: getRandomQuestion("u"),
      v: getRandomQuestion("v"),
      w: getRandomQuestion("w"),
      x: getRandomQuestion("x"),
      y: getRandomQuestion("y"),
      z: getRandomQuestion("z")
    }
  }
};

function getRandomQuestion(letter) {
  let letterQuestions = questions.filter(question => question.letter === letter);
  let finalQuestion = letterQuestions[getRandomNumber(letterQuestions)]
  return finalQuestion;
}
function getRandomNumber(arr) {
  const randomInt = Math.floor(Math.random() * arr.length);
  return randomInt;
}

function playOneRound() {
  for (let allLetters in rosco.letters) {
    if (rosco.letters[allLetters].status === 0) {
      let solution = prompt(rosco.letters[allLetters].question)
      if (solution.toLowerCase() === rosco.letters[allLetters].answer) {
        rosco.letters[allLetters].status = 1
        hits++
        alert("Perfecto, siguiente palabra")
      }
      else if (solution.toLowerCase() === "pasapalabra") {
        alert("Vale, tranquilo, continuamos con la siguiente palabra")
      }
      else if (solution.toLowerCase() === "end") {
        end = true
        alert(`Gracias por jugar, has acertado ${hits} palabras`)
        break;
      }
      else {
        fail++
        rosco.letters[allLetters].status = 2
        alert(`Noooo...La respuesta correcta es ${rosco.letters[allLetters].answer} .Bueno, no pasa nada, vamos con la siguiente palabra`)
      }
    }
  }
}
function allLetters() {
  do {
    playOneRound();
    if (end === true) {
      alert("Vamos con la siguiente ronda")
    }
  }
  while (hits + fail < 27 && end === false)
}
let rosco = buildRosco()
const playerName = prompt("¿Cual es tu nombre?")
let hits = 0;
let fail = 0;
let end = false
allLetters();
players.push({ name: playerName, hits: hits, fail: fail });
players.sort((player1, player2) => player2.hits - player1.hits);
alert("Ranking usuarios:");
players.forEach(player => alert(player.name + ": " + player.hits));


