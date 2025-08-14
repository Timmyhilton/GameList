"use client"

import { GameCard } from "./game-card"
import { gamesData } from "@/lib/games-data"

export function GameList() {
  return (
    <div className="space-y-4">
      {gamesData.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}
