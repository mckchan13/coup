import { GameContext } from "../components/PlayerCard";

export const mockGameContextData: GameContext = {
  gameId: "ABC123",
  numberOfPlayers: 6,
  currentGameState: "Started",
  currentRoundContext: {
    currentPlayerTurn: 0,
    playerAction: undefined,
    counterAction: undefined,
    challenge: undefined,
  },
  playerState: [
    {
      playerName: "Michael",
      playerNumber: 0,
      playerHand: [undefined, undefined],
      influence: 2,
      coins: 15,
    },
    {
      playerName: "Blake",
      playerNumber: 1,
      playerHand: [undefined, undefined],
      influence: 2,
      coins: 15,
    },
    {
      playerName: "Will",
      playerNumber: 1,
      playerHand: [undefined, undefined],
      influence: 2,
      coins: 15,
    },
    {
      playerName: "Khalid",
      playerNumber: 1,
      playerHand: [undefined, undefined],
      influence: 2,
      coins: 15,
    },
    {
      playerName: "Matt",
      playerNumber: 1,
      playerHand: [undefined, undefined],
      influence: 2,
      coins: 15,
    },
    {
      playerName: "Alex",
      playerNumber: 1,
      playerHand: [undefined, undefined],
      influence: 2,
      coins: 15,
    },
  ],
  deck: [
    {
      character: "Assassin",
      type: "Character",
      revealed: false,
      ownedBy: "Deck",
    },
  ],
};
