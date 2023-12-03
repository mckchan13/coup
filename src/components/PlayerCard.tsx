"use client";

import { ReactNode } from "react";
import ActionsPanel, { AvailableActions } from "./ActionsPanel";

export type CharacterCardType =
  | "Duke"
  | "Assassin"
  | "Captain"
  | "Contessa"
  | "Ambassador";

export type PlayerNumber = 0 | 1 | 2 | 3 | 4 | 5;

export interface Card {
  character: CharacterCardType;
  type: "Character" | "Counter";
  revealed: boolean;
  ownedBy: PlayerNumber | "Deck";
}

export type Hand = [Card?, Card?];

export interface PlayerCardProps {
  playerName: string;
  playerNumber: PlayerNumber;
  playerHand: Hand;
  influence: 0 | 1 | 2;
  coins: number;
  availableActions?: AvailableActions;
}

export interface GameContext {
  gameId: string;
  numberOfPlayers: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  currentGameState: string;
  currentRoundContext: {
    currentPlayerTurn: PlayerNumber;
    playerAction: unknown;
    counterAction: unknown;
    challenge: unknown;
  };
  playerState: [
    PlayerCardProps,
    PlayerCardProps,
    PlayerCardProps?,
    PlayerCardProps?,
    PlayerCardProps?,
    PlayerCardProps?
  ];
  deck: Card[];
}

export default function PlayerCard(props: PlayerCardProps): ReactNode {
  const {
    playerName,
    playerNumber,
    playerHand,
    influence,
    coins,
    availableActions,
  } = props;

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Player {playerNumber + 1}
          </h5>
          <h4>
            <ul>
              <li>Player Name: {playerName}</li>
              <li>Hand: {playerHand.toString()}</li>
              <li>Influence: {influence}</li>
              <li>Coins: {coins}</li>
            </ul>
          </h4>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Stats:
        </p>
        <ActionsPanel availableActions={availableActions} />
      </div>
    </>
  );
}
