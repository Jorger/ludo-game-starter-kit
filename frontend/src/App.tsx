import { AppWrapper } from "./components/wrapper";
import Game from "./components/game";
import React from "react";
import type { IUser, TTotalPlayers } from "./interfaces";

const TEMP_USERS: IUser[] = [
  {
    id: "1",
    name: "Player 01",
    isBot: false,
  },
  {
    id: "2",
    name: "Player 02",
    isBot: true,
  },
  {
    id: "3",
    name: "Player 03",
    isBot: false,
  },
  {
    id: "4",
    name: "Player 04",
    isBot: false,
  },
];

const App = () => {
  return (
    <AppWrapper>
      <Game
        initialTurn={0}
        users={TEMP_USERS}
        totalPlayers={TEMP_USERS.length as TTotalPlayers}
      />
    </AppWrapper>
  );
};

export default React.memo(App);
