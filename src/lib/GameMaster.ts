export type Character =
  | "Duke"
  | "Assassin"
  | "Captain"
  | "Contessa"
  | "Ambassador";

export class Card {
  private characterCards = {};

  constructor(public character: Character, public id: number) {
    this.character = character;
    this.id = id;
  }
}

export class Dealer {
  private deck: Card[];

  constructor() {
    this.deck = this.initDeck();
  }

  deal(): Card | never {
    if (this.deck.length > 0) {
      const card = this.deck.pop()!;
      return card;
    }

    throw new Error("No cards left");
  }

  initDeck() {
    const deck: Character[] = [
      "Duke",
      "Duke",
      "Duke",
      "Assassin",
      "Assassin",
      "Assassin",
      "Captain",
      "Captain",
      "Captain",
      "Contessa",
      "Contessa",
      "Contessa",
      "Ambassador",
      "Ambassador",
      "Ambassador",
    ];

    const shuffledDeck = this.shuffle(deck);

    return shuffledDeck.map((character: Character, i: number) => {
      return new Card(character, i);
    });
  }

  shuffle<T>(array: T[]) {
    for (let i = 0; i < 15; i++) {
      const random = this.getRandomNumber(0, array.length - 1);
      const temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }

    return array;
  }

  getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}

export class GameMaster {
  constructor(public dealer: Dealer) {
    this.dealer = dealer;
  }
}

export type PlayerId = 0 | 1 | 2 | 3 | 4 | 5;

export type CharacterActionType =
  | "Duke"
  | "Assassin"
  | "Captain"
  | "Ambassador";

export type CounterActionType = "Duke" | "Contessa" | "Captain" | "Ambassador";

export type ActionStatus = "Pending" | "Succeeded" | "Failed";

export type CharacterActionObject<
  P extends PlayerId,
  T extends CharacterActionType
> = {
  initiatorPlayerId: P;
  characterActionType: T;
  targetPlayerId: T extends "Duke" | "Ambassador" ? P : Omit<P, PlayerId>;
  status: ActionStatus;
};

export type CounterActionObject<
  P extends PlayerId,
  T extends CharacterActionType,
  K extends CounterActionType
> = {
  initiatorPlayerId: P;
  counterActionType: K;
  characterActionType: T,
  targetPlayerId: Omit<P, PlayerId>;
  status: ActionStatus;
};

export type ChallengeActionObject<
  P extends PlayerId,
  T extends CharacterActionType | CounterActionType
> = {
  initiatorPlayerId: P; // if status is success, then initiator wins
  type: T;
  targetPlayerId: Omit<P, PlayerId>;
  status: ActionStatus; // if status is fail, then target wins
};
