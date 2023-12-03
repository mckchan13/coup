import { Suspense } from "react";
import { GameBoard } from "@/components/GameBoard";
import Loading from "./loading";

export default function GameHome() {
  return (
    <>
      <div>Testing Game Home</div>
      <Suspense fallback={<Loading />}>
        <GameBoard />
      </Suspense>
    </>
  );
}
