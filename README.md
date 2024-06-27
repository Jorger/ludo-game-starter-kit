# 🎓 ludo-game-starter-kit

**Este es el reposotorio base del Curso: Realtime Ludo Game, usando ReactJS, NodeJS y SocketIO, que puedes encontrar en udemy.**


## 🎲 Ludo.

El [Ludo](https://en.wikipedia.org/wiki/Ludo) tiene sus raíces en la antigua India, donde se le conocía como "Pachisi", que significa "veinticinco" en sánscrito, en referencia a las 25 casillas que componen el tablero original.

La versión moderna del juego, conocida como Ludo, fue patentada por primera vez en Inglaterra en 1896, bajo el nombre de "Parchís". A lo largo de los años, el juego ha sido adaptado y comercializado por varias empresas de juegos de mesa en todo el mundo, adquiriendo diferentes nombres y variaciones según la región.

En Estados Unidos, por ejemplo, el juego se comercializó como "Sorry!", mientras que en el Reino Unido se popularizó como "Ludo".

Sin embargo, independientemente del nombre, el juego conserva su esencia original y sigue siendo uno de los juegos de mesa más populares y queridos en todo el mundo.

### 💡 Objetivo del Juego

El objetivo del Ludo es ser el primero en llevar todas las fichas desde el área de inicio hasta la meta, completando un recorrido circular alrededor del tablero.

### 🏁 Inicio del Juego

Cada jugador elige un color y coloca sus cuatro fichas en el área de inicio correspondiente a su color.


### 🅾️ Movimiento de las Fichas.

Los jugadores lanzan un dado por turno y mueven una de sus fichas según el número que salga en el dado. Las fichas se mueven en sentido horario alrededor del tablero, comenzando desde el área de inicio.

### 📖 Reglas del juego

* Si un jugador saca un 6, tiene la opción de mover una ficha que ya está en el tablero o sacar una ficha nueva del área de inicio.
* Si una ficha cae en una casilla ocupada por una ficha de otro jugador, la ficha que estaba en esa casilla se envía de vuelta a su área de inicio.
* Si una ficha cae en una casilla segura (marcada con una estrella), no puede ser capturada por las fichas de otros jugadores.
* Si dos o más fichas del mismo color está en una misma casilla (no segura), convierte esa casilla como segura y otras fichas no podrá enviarlas a la cárcel.
* Si un jugador envía a la cárcel a otra ficha, tiene la opción de lanzar de nuevo el dado.
* Si el usuario lleva una ficha a la meta también se le entrega la opción de lanzar de nuevo el dado.
* Si el usuario tiene tres dados del mismo valor pierde el turno (por ejemplo si ha obtenido tres 6 consecutivos)

## ⚛️ Ludo ReactJS

En el curso Realtime Ludo Game, usando ReactJS, NodeJS y SocketIO, exploraremos cómo desarrollar el clásico juego del Ludo utilizando [ReactJS](https://react.dev/). A lo largo de las lecciones, aprenderemos a implementar las reglas del juego, gestionar el movimiento de las fichas, crear la interfaz de usuario interactiva y mucho más.

### ℹ️ Modalidades de Juego

#### 🔴 Offline

En la cual pueden jugar 2, 3 ó 4 jugadores en el mismo dispositivo. 

Además es posible jugar contra un bot 🤖, en este caso se puede seleccionar el número de bots con los que se desea jugar, incluso es posible configurar que todos sean bots y ser sólo un espectador. 

#### 🟢 Online

En esta opción es posible jugar versus otros usuarios en realtime, otras opciones son:

* Si se está autenticado se podrá crear y unirse a salas privadas.
* Podrán jugar dos o cuatros jugadores al mismo tiempo.
* Se cuenta con un chat con el cual los jugadores se podrán comunicar.





