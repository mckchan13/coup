import { ReactNode } from "react";
import { CharacterActionType, CounterActionType } from "../lib/GameMaster";
import Button from "./Button";
import { PlayerNumber } from "./PlayerCard";

export type GeneralActionType = "Foreign Aid" | "Income" | "Coup";

export type ActionName =
  | GeneralActionType
  | CharacterActionType
  | CounterActionType
  | "Challenge";

export type ActionType = "General" | "Character" | "Counter" | "Challenge";

export type ActionContext<
  N extends ActionName = ActionName,
  T extends ActionType = ActionType
> = {
  name: N;
  type: T;
  available: boolean;
  playedBy: PlayerNumber;
  targetedAt?: PlayerNumber | "Self";
};

export type AvailableActions = {
  characterActions: {
    [P in CharacterActionType]: ActionContext;
  };
  counterActions: {
    [P in CounterActionType]: ActionContext;
  };
  challenge: ActionContext;
};

export type ActionsPanelProps = {
  availableActions: AvailableActions | undefined;
};

export default function ActionsPanel({
  availableActions,
}: ActionsPanelProps): ReactNode {
  if (!availableActions) {
    return <div>No actions available</div>;
  }

  const { characterActions, counterActions, challenge } = availableActions;

  // render all available character actions
  const availableCharacterActions = Object.entries(characterActions).map(
    ([character, actionStatus]) => {
      const disabled = !actionStatus.available;
      return (
        <Button key={character} disabled={disabled} primary outline>
          {character}
        </Button>
      );
    }
  );

  // available counter actions
  const availableCounterActions = Object.entries(counterActions).map(
    ([character, actionStatus]) => {
      const disabled = !actionStatus.available;
      return (
        <Button key={character} disabled={disabled} danger outline>
          {character}
        </Button>
      );
    }
  );

  // determine if challenge is disabled
  const challengeDisabled = !challenge?.available;
  const challengeButton = (
    <Button disabled={challengeDisabled} warning outline></Button>
  );

  return (
    <>
      <div>
        <div>Character Actions</div>
        {availableCharacterActions}
      </div>

      <div>
        <div>Counter Actions</div>
        {availableCounterActions}
      </div>

      <div>
        <div>Challenge</div>
        {challengeButton}
      </div>
    </>
  );
}
