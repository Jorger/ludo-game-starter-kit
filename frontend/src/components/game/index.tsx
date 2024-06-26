import React, { useState } from "react";
import type {
  IActionsTurn,
  IListTokens,
  IPlayer,
  ISelectTokenValues,
  IUser,
  TBoardColors,
  TDicevalues,
  TTotalPlayers,
  TTypeGame,
} from "../../interfaces";
import {
  EBoardColors,
  EPositionProfiles,
  ETypeGame,
} from "../../utils/constants";
import { PageWrapper } from "../wrapper";
import {
  Board,
  BoardWrapper,
  Debug,
  ProfileSection,
  Tokens,
} from "./components";
import {
  getInitialActionsTurnValue,
  getInitialDataPlayers,
  getInitialPositionTokens,
  getRandomValueDice,
} from "./helpers";

interface GameProps {
  totalPlayers: TTotalPlayers;
  initialTurn: number;
  users: IUser[];
  typeGame?: TTypeGame;
  boardColor?: TBoardColors;
  debug?: boolean;
}

const Game = ({
  totalPlayers = 2,
  initialTurn = 0,
  users = [],
  typeGame = ETypeGame.OFFLINE,
  boardColor = EBoardColors.RGYB,
  debug = true,
}: GameProps) => {
  /**
   * Estado que guarda la información de los jugadores, (setPlayers)...
   */
  const [players] = useState<IPlayer[]>(() =>
    getInitialDataPlayers(users, boardColor, totalPlayers)
  );

  /**
   * Estado que guarda la información de los tokens del juego...
   * // setListTokens
   */
  const [listTokens, setListTokens] = useState<IListTokens[]>(() =>
    getInitialPositionTokens(boardColor, totalPlayers, players)
  );

  // setActionsTurn
  /**
   * Establece la información relaciona a las acciones de cada turno
   */
  const [actionsTurn, setActionsTurn] = useState<IActionsTurn>(() =>
    getInitialActionsTurnValue(initialTurn, players)
  );

  const [currentTurn] = useState(initialTurn);

  const handleSelectedToken = (selectTokenValues: ISelectTokenValues) => {
    //console.log("selectTokenValues: ", selectTokenValues);
  };

  /**
   * Función que recibe el estado del timer,
   * útil para hacer acciones para el bot...
   * @param ends
   */
  const handleTimer = (ends = false) => {
    //console.log("handleTimer: ", { ends });
  };

  /**
   * Función que establece cuando se ha hecho click en el dado...
   * @param diceValue
   * @param isActionSocket
   */
  const handleSelectDice = (
    diceValue?: TDicevalues,
    isActionSocket = false
  ) => {
    // console.log("handleSelectDice: ", { diceValue, isActionSocket });
    setActionsTurn((current) => getRandomValueDice(current, diceValue));
  };

  /**
   * Función que determina que el dado ha terminado de girar...
   * @param isActionSocket
   */
  const handleDoneDice = (isActionSocket = false) => {
    console.log("handleDoneDice: ", { isActionSocket });
  };

  /**
   * Para establecer el mute del chat de un usuario,
   * el usaurio actual (posición 0) no se puede mutear...
   * @param playerIndex
   */
  const handleMuteChat = (playerIndex: number) => {
    console.log("handleMuteChat: ", { playerIndex });
  };

  const profileHandlers = {
    handleTimer,
    handleSelectDice,
    handleDoneDice,
    handleMuteChat,
  };

  const profileProps = { players, totalPlayers, currentTurn, actionsTurn };

  return (
    <PageWrapper>
      <BoardWrapper>
        <ProfileSection
          basePosition={EPositionProfiles.TOP}
          profileHandlers={profileHandlers}
          {...profileProps}
        />
        <Board boardColor={boardColor}>
          {debug && <Debug.Tiles />}
          <Tokens
            debug={debug}
            isDisabledUI={actionsTurn.isDisabledUI}
            listTokens={listTokens}
            diceList={actionsTurn.diceList}
            handleSelectedToken={handleSelectedToken}
          />
        </Board>
        <ProfileSection
          basePosition={EPositionProfiles.BOTTOM}
          profileHandlers={profileHandlers}
          {...profileProps}
        />
      </BoardWrapper>
      {debug && (
        <Debug.Tokens
          typeGame={typeGame}
          players={players}
          listTokens={listTokens}
          actionsTurn={actionsTurn}
          setListTokens={setListTokens}
          handleSelectDice={handleSelectDice}
        />
      )}
    </PageWrapper>
  );
};

export default React.memo(Game);
