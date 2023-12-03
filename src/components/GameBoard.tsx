"use client";

import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { GameContext } from "./PlayerCard";

async function getGameContext() {
  try {
    const response = await fetch("http://localhost:3004/currentGames");
    const data = await response.json();
    const gameContext = data["CurrentGame"];
    return gameContext;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
    }
  }
}

export function GameBoard() {
  const [currentGameContext, setCurrentGameContext] = useState<
    GameContext | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const gameContext = await getGameContext();
      setCurrentGameContext(gameContext);
    })();
  }, []);

  let playerCards;

  if (!currentGameContext) {
    playerCards = "Still loading...";
  } else {
    const { playerState } = currentGameContext;
    playerCards = playerState.map((player, i) => {
      if (!player) {
        return <div key={i}>Still loading player...</div>;
      }
      const { playerName, playerNumber, playerHand, influence, coins } = player;
      return (
        <div key={playerNumber}>
          <PlayerCard
            playerName={playerName}
            playerNumber={playerNumber}
            playerHand={playerHand}
            influence={influence}
            coins={coins}
          />
        </div>
      );
    });
  }

  return <div className="grid grid-cols-3 gap-3">{playerCards}</div>;
}
