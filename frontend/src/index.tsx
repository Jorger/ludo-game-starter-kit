import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.clear();

console.log(
  "%c🎲 Realtime Ludo Game, usando ReactJS, NodeJS y SocketIO!!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);

const style = "font-size: 1.5em;";

console.log(
  `%c
  ¡Bienvenid@! Descubre cómo crear tu propio juego de Ludo en tiempo real con este curso 🚀

  🌟 En este curso aprenderás:

    1️⃣ Utilizar ReactJS para la interfaz de usuario dinámica.
    2️⃣ Implementar la lógica del juego con NodeJS.
    3️⃣ Integrar SocketIO para la comunicación en tiempo real.

    👨‍💻 Además, tendrás acceso a:

    1️⃣ El código completo del juego.
    2️⃣ Explicaciones detalladas paso a paso sobre cómo desarrollar cada funcionalidad.

    🔥 ¡No pierdas la oportunidad de convertirte en un desarrollador de juegos con esta experiencia práctica y educativa!
    👉 ¡Compra el curso ahora en Udemy y empieza tu viaje hacia la creación de juegos en tiempo real!
    `,
  style
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
